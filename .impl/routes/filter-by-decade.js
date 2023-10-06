import { Base } from "./base.js";
import { Figure } from "./figure.js";
import { Note } from "./note.js";

export const FilterByDecade = () =>
  html`
    <${Base}>
      <p>
        Implement filter by decade. Decade options should be computed from the
        data, not hard-coded. Selecting a decade should filter the list to show
        all movies from that decade.
      </p>

      <${Note}>
        <p>This filter should be additive to the title search box above it.</p>
      <//>

      <${Figure}
        path="/assets/steps/filter-by-decade_01.gif"
        caption="Fig. 7. Example of filtering movies by decade."
      />
    <//>
  `;
