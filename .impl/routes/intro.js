import { Base } from "./base.js";
import { Subtitle } from "./subtitle.js";
import { KofileLogo } from "./kofile-logo.js";

export const Intro = () =>
  html`
    <${Base}>
      <p>
        In this coding kata, we'll build a personal movie tracker that displays
        a list of some of Evan's favorite science fiction films.
      </p>

      <p>For tools, you've got:</p>

      <ul>
        <li><a href="https://reactjs.org">React v17</a></li>
        <li><a href="https://emotion.sh/docs/emotion">Emotion v10</a></li>
        <li>
          Browser APIs: ${" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
            Fetch
          </a>
          ${" & "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
          >
            localStorage
          </a>
        </li>
      </ul>

      <p>For testing tools, you've got:</p>

      <ul>
        <li><a href="https://mochajs.org">Mocha</a></li>
        <li><a href="https://unexpected.js.org">Unexpected</a></li>
        <li>
          <a href="https://testing-library.com/docs/dom-testing-library/intro">
            DOM Testing Library
          </a>
        </li>
      </ul>

      <${Subtitle}>What We're Looking For<//>

      <ol>
        <li>Your solution delivers on all the requirements.</li>
        <li>You write tests for at least one of the steps.</li>
        <li>
          Your code is thoughtful, stylistically consistent, and easily
          extensible.
        </li>
      </ol>

      <p>Bonus points for awesome styling! 😎</p>

      <${Subtitle}>Development Tips<//>

      <ul>
        <li>
          <p>
            You only need to have your solution working in Chrome or Firefox or
            Safari. Do not stress too much about cross-browser compatibility.
          </p>

          <p>
            Let us know when you submit your solution which browser you
            targeted.
          </p>
        </li>
        <li>
          <p>
            The code runs all in-browser (no hot reloading), so you'll need to
            refresh to see changes.
          </p>
        </li>
      </ul>

      <p>Enjoy!</p>
      <p>- Kofile Dev Team</p>

      <${KofileLogo} />
    <//>
  `;
