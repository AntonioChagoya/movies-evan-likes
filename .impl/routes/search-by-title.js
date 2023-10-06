import { Base } from "./base.js";
import { Figure } from "./figure.js";
import { InlineCode } from "./inline-code.js";

export const SearchByTitle = () =>
  html`
    <${Base}>
      <p>
        Implement search by title. Only filter results if two or more characters
        are entered in the search box. The list below should update when the
        value of the search box changes.
      </p>

      <p>Search should</p>

      <ul>
        <li>be case-insensitive</li>
        <li>match on any exact substring in <${InlineCode}>title<//></li>
      </ul>

      <${Figure}
        path="/assets/steps/search-by-title_01.gif"
        caption="Fig. 6. Example of searching by movie title."
      />
    <//>
  `;
