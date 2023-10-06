const { css } = emotion;

const style = css`
  font-size: 1.1rem;
  font-style: italic;
  background: #2f3542;
  z-index: 10;
  position: absolute;
  padding: 0 20px;
  margin-left: 10px;
  text-shadow: 2px 2px 0px #000000;
`;

const containerStyle = css`
  position: relative;
  margin-bottom: 10px;
  height: 3rem;
  width: 100%;

  &:after {
    content: " ";
    border-bottom: 1px solid #57606f;
    display: block;
    top: 50%;
    width: 100%;
    position: absolute;
    z-index: 9;
  }
`;

export const Subtitle = ({ children }) =>
  html`<div className=${containerStyle}>
    <h2 className=${style}>${children}</h2>
  </div>`;
