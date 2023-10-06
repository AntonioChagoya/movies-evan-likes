import { Title } from "./title.js";
import { BlockLink } from "./block-link.js";
import * as Step from "./steps.js";
import useLocation from "../use-location.js";

const { css, cx } = emotion;

const linkStyle = css`
  font-weight: bold;
  border-bottom: 2px solid #1e90ff;
  padding-bottom: 1px;
`;

const inactiveLinkStyle = css`
  color: #747d8c;
  font-style: italic;
`;

const style = css`
  display: flex;
  flex-direction: column;
`;

const navStyle = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #57606f;
  padding-bottom: 20px;
  width: 100%;
  margin-bottom: 20px;

  & > span {
    font-style: italic;
  }
`;

const lastNavStyle = css`
  border-top: 1px solid #57606f;
  padding-top: 20px;
  margin-top: 20px;
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
`;

const childrenWrapperStyle = css`
  display: block;

  & > * + * {
    margin-top: 20px;
  }

  & em {
    font-weight: bold;
    font-style: italic;
  }
`;

const Link = ({ active = true, onClick, children }) =>
  html`<a
    className=${cx({ [linkStyle]: active, [inactiveLinkStyle]: !active })}
    onClick=${active ? onClick : undefined}
    >${children}<//
  >`;

const getCurrentStep = (loc) => {
  const matched = loc.match(/steps\/(\d+)$/);

  return matched === null ? null : Number(matched[1]);
};

export const Base = ({ title, children }) => {
  const [location, setLocation] = useLocation();
  const currentStep = getCurrentStep(location);
  const totalSteps = Object.keys(Step).length;

  const hasPrev =
    location === "/done" || (currentStep !== null && currentStep >= 1);

  const hasNext =
    location !== "/done" && (currentStep === null || currentStep <= totalSteps);

  const goNext = () => {
    let target;

    if (currentStep !== null && currentStep !== totalSteps) {
      target = `/steps/${currentStep + 1}`;
    } else if (currentStep === totalSteps) {
      target = "/done";
    } else {
      target = "/steps/1";
    }

    setLocation(target);
  };

  const goPrev = () => {
    let target;

    if (currentStep === 1) {
      target = "/";
    } else if (location === "/done") {
      target = `/steps/${totalSteps}`;
    } else {
      target = `/steps/${currentStep - 1}`;
    }

    setLocation(target);
  };

  const testsPath = `/tests${currentStep ? `?step=${currentStep}` : ""}`;

  return html`
    <div className=${style}>
      <nav className=${navStyle}>
        <${Link} onClick=${goPrev} active=${hasPrev}>previous<//>
        ${currentStep &&
        html`<span>« step ${currentStep} of ${totalSteps} »</span>`}
        <${Link} onClick=${goNext} active=${hasNext}>next<//>
      </nav>
      <${BlockLink} target=${testsPath}>go to tests<//>
      ${!!title && html`<${Title}>${title}<//>`}
      <div className=${childrenWrapperStyle}>${children}</div>
      <nav className=${cx(navStyle, lastNavStyle)}>
        <${Link} onClick=${goPrev} active=${hasPrev}>previous<//>
        ${currentStep &&
        html`<span>« step ${currentStep} of ${totalSteps} »</span>`}
        <${Link} onClick=${goNext} active=${hasNext}>next<//>
      </nav>
    </div>
  `;
};
