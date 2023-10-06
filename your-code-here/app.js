// NOTE See HELP.md in this folder for some useful info & tips

import "./tests.js";

const { css } = emotion;
const { useEffect } = React;

const style = css`
  text-align: center;
`;

export const App = ({ onLoad }) => {
  useEffect(onLoad, []); // to run tests

  return html`
    <p className=${style}>
      (this file can be found at ./your-code-here/app.js)
    </p>
  `;
};
