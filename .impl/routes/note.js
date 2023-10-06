const { css } = emotion;

const style = css`
  padding: 10px;
  background: #eccc68;
  border: 2px solid #ffa502;
  border-radius: 5px;
  color: #2f3542;
  display: flex;
  align-items: flex-start;

  & > p {
    margin: 0;
  }

  & > p + * {
    margin: 16px 0 0;
  }
`;

const titleStyle = css`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.15rem;
  margin: 0 16px 0 0;
`;

export const Note = ({ children }) =>
  html`<aside className=${style}>
    <h1 className=${titleStyle}>note</h1>
    ${children}
  <//>`;
