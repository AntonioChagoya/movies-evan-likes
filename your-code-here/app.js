// NOTE See HELP.md in this folder for some useful info & tips

import "./tests.js";
import { MoviesList } from "../components/MoviesList.js";

const { css } = emotion;
const { useEffect } = React;

const style = css`
  text-align: left;
`;

const container = css`
  display: flex;
  flex-direction: column;
  
  margin: 0 auto;

  max-width: 800px;
  min-height: 90vh;

  width: 100%;
`;

export const App = ({ onLoad }) => {
  useEffect(onLoad, []); // to run tests

  return html`
    <div className=${container}>
      <h1 className=${style}>My Favorite Movies</h1>
      <p>(this file can be found at ./your-code-here/app.js)</p>
      <p className=${style}>
        Evan's favorite science fiction films
      </p>
      <${MoviesList} />
    </div
  `;
};
