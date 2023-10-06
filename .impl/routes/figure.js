const { css } = emotion;

const style = css`
  box-sizing: border-box;
  margin-left: 0;
  margin-right: 0;

  * {
    box-sizing: border-box;
  }

  figcaption {
    font-size: 0.9rem;
    font-style: italic;
    display: block;
    text-align: center;
  }
`;

const imgStyle = css`
  background: #ffffff;
  display: inline-block;
  border: 15px solid #70a1ff;
  border-radius: 5px;
  width: 500px;
`;

export const Figure = ({ path, caption = null, alt }) =>
  html`
    <figure className=${style}>
      <img className=${imgStyle} src=${path} alt=${alt} />
      ${caption && html`<figcaption>${caption}<//>`}
    <//>
  `;
