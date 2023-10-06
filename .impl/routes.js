import useLocation from "./use-location.js";
import * as Step from "./routes/steps.js";
import { Intro } from "./routes/intro.js";
import { Tests } from "./routes/tests.js";
import { Done } from "./routes/done.js";

export const Routes = () => {
  const [location] = useLocation();

  switch (location) {
    case "/steps/1":
      return html`<${Step.DisplayListOfMovies} />`;
    case "/steps/2":
      return html`<${Step.ClickOnMovieTitle} />`;
    case "/steps/3":
      return html`<${Step.DisplayMovieYear} />`;
    case "/steps/4":
      return html`<${Step.DisplayRating} />`;
    case "/steps/5":
      return html`<${Step.LocalStorage} />`;
    case "/steps/6":
      return html`<${Step.SearchByTitle} />`;
    case "/steps/7":
      return html`<${Step.FilterByDecade} />`;
    case "/steps/8":
      return html`<${Step.ExpandRow} />`;
    case "/steps/9":
      return html`<${Step.DisplayMoviePoster} />`;
    case "/done":
      return html`<${Done} />`;
    case "/tests":
      return html`<${Tests} />`;
    case "/":
      return html`<${Intro} />`;
    default:
      return html`<p>404... how did you get here??</p>`;
  }
};
