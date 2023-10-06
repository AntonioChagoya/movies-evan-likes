import { Base } from "./base.js";
import { Figure } from "./figure.js";
import { InlineCode } from "./inline-code.js";

export const DisplayMoviePoster = () =>
  html`
    <${Base}>
      <p>Display the movie poster next to the review.</p>
      <p>The URLs for the poster images are included in</p>

      <ul>
        <li><${InlineCode} link="/api/movies.json">/api/movies.json<//></li>
      </ul>

      <${Figure}
        path="/assets/steps/display-movie-poster_01.png"
        caption="Fig. 10. Example of displaying the movie poster."
      />
    <//>
  `;
