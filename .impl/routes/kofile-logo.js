const { css } = emotion;

const style = css`
  text-align: center;
  margin: 20px 0 10px;

  img {
    width: 100px;
    display: inline-block;
  }
`;

export const KofileLogo = () =>
  html`<div className=${style}><img src="/assets/kofile-logo.svg" /></div>`;
