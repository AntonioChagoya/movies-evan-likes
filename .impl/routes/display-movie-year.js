import { Base } from "./base.js";
import { Figure } from "./figure.js";

export const DisplayMovieYear = () =>
  html`
    <${Base}>
      <p>Display the year the movie was released next to the title.</p>

      <${Figure}
        path="/assets/steps/display-movie-year_01.png"
        caption="Fig. 3. Example of displaying movie year."
      />
    <//>
  `;
