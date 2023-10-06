import { Base } from "./base.js";
import { Figure } from "./figure.js";
import { InlineCode } from "./inline-code.js";

export const LocalStorage = () =>
  html`
    <${Base}>
      <p>
        Cache the responses in the browsers ${" "}
        <${InlineCode}>localStorage<//>
        .
      </p>

      <p>
        Do not make network requests to the API if there is a cached version of
        the response available.
      </p>

      <${Figure}
        path="/assets/steps/local-storage_01.gif"
        caption="Fig. 5. Example of localStorage use."
      />
    <//>
  `;
