import { Base } from "./base.js";
import { Figure } from "./figure.js";
import { InlineCode } from "./inline-code.js";

export const DisplayListOfMovies = () =>
  html`
    <${Base}>
      <p>
        Display the list of movies on the page. Movies should be listed in
        alphabetical order.
      </p>

      <p>You can find a JSON list of movies at</p>

      <ul>
        <li><${InlineCode} link="/api/movies.json">/api/movies.json<//></li>
      </ul>

      <${Figure}
        path="/assets/steps/display-list-of-movies_01.png"
        caption="Fig 1. Example of movies listed."
        alt="screenshot of successful step completion"
      />
    <//>
  `;
