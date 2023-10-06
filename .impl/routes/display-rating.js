import { Base } from "./base.js";
import { Figure } from "./figure.js";

export const DisplayRating = () =>
  html`
    <${Base}>
      <p>
        Display the Rotten Tomatoes rating next to each movie title in the list.
        This value should be displayed as a percentage.
      </p>

      <${Figure}
        path="/assets/steps/display-rating_01.png"
        caption="Fig. 4. Example of displaying Rotton Tomato rating."
      />
    <//>
  `;
