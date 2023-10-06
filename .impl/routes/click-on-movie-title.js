import { Base } from "./base.js";
import { Figure } from "./figure.js";

export const ClickOnMovieTitle = () =>
  html`
    <${Base}>
      <p>
        When a user clicks on the title of the movie, they should be redirected
        to the Rotten Tomatoes page for that movie.
      </p>

      <${Figure}
        path="/assets/steps/click-on-movie-title_01.gif"
        caption="Fig. 2. Example of onClick behavior for movie title."
      />
    <//>
  `;
