import { AppContext } from "../main.js";
import { BlockLink } from "./block-link.js";

const { css } = emotion;
const { useEffect, useContext } = React;

// https://css-tricks.com/snippets/javascript/get-url-variables/
const getQueryVariable = (variable) => {
  const query = window.location.search.substring(1);
  const vars = query.split("&");

  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");

    if (pair[0] == variable) {
      return pair[1];
    }
  }

  return false;
};

const style = css`
  #mocha {
    margin: 0;
    font: unset;

    & .test {
      display: grid;
      grid-template-columns: 1rem auto;
      overflow: unset;
      grid-template-areas:
        "icon desc"
        "output output"
        "error error";

      &.fail,
      &.fail::before {
        color: #ff4757;
      }

      & h2 {
        grid-area: desc;
        display: flex;
        justify-content: space-between;
      }

      & pre {
        grid-area: output;
        border: 0;
        box-shadow: unset;
        background: #dfe4ea;
        color: #000000;
        overflow-x: scroll;
      }

      &::before {
        float: unset;
        grid-area: icon;
      }

      & a.replay {
        position: unset;
        top: unset;
        right: unset;
      }

      & .html-error {
        grid-area: error;
        float: unset;
        border: 0;
        box-shadow: unset;
        background: #dfe4ea;
      }
    }
  }

  #mocha-stats {
    position: relative;
    top: unset;
    right: unset;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    background-color: #f1f2f6;
    border-radius: 5px;

    & .progress {
      float: unset;
    }
  }
`;

export const Tests = () => {
  const appLoaded = useContext(AppContext);
  const step = getQueryVariable("step");
  const returnPath = step ? `/steps/${step}` : "/";

  useEffect(() => {
    if (appLoaded) {
      mocha.run();
    }
  }, [appLoaded]);

  return html`
    <div className=${style}>
      <${BlockLink} target=${returnPath}>return to ${returnPath}<//>
      <div id="mocha"></div>
    </div>
  `;
};
