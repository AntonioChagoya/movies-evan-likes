const { css } = emotion;

const style = css`
  display: inline-block;
  border: 2px solid #a4b0be;
  background: #747d8c;
  border-radius: 2px;
  padding: 2px 4px;
  margin: 0;
`;

const linkStyle = css`
  color: #ffffff;

  &:visited {
    color: #ffffff;
  }
`;

export const InlineCode = ({ children, link = null }) => {
  const code = html`<pre className=${style}><code>${children}</code></pre>`;

  return link ? html`<a className=${linkStyle} href=${link}>${code}</a>` : code;
};
