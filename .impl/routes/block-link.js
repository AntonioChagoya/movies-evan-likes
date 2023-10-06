const { css } = emotion;

const style = css`
  text-align: center;
  border-bottom: 1px solid #57606f;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const BlockLink = ({ children, target }) =>
  html`<div className=${style}><a href=${target}>${children}</a></div>`;
