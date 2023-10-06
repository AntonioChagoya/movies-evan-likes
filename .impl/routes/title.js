const { css } = emotion;

const style = css`
  color: red;
`;

export const Title = ({ children }) =>
  html`<h1 className=${style}>${children}</h1>`;
