import { Base } from "./base.js";
import { Figure } from "./figure.js";
import { Note } from "./note.js";
import { InlineCode } from "./inline-code.js";

export const ExpandRow = () =>
  html`
    <${Base}>
      <p>
        When a movie row is clicked, expand the row to show what Evan says about
        the movie. Clicking the row again should collapse it.
      </p>

      <p>You can find a JSON list of Evan's reviews at:</p>

      <ul>
        <li><${InlineCode} link="/api/reviews.json">/api/reviews.json<//></li>
      </ul>

      <${Figure}
        path="/assets/steps/expand-row_01.gif"
        caption="Fig. 8. Example of expanding the movie row."
      />

      <${Note}>
        <p>
          Clicking on the movie title should still take you to the Rotten
          Tomatoes page per Step 1, but <em>should not</em> toggle the row
          expansion before the user leaves the page.
        </p>
      <//>

      <${Figure}
        path="/assets/steps/expand-row_02.gif"
        caption="Fig. 9. Movie title onClick behavior is unchanged."
      />
    <//>
  `;
