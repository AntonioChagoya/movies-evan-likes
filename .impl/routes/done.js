import { Base } from "./base.js";
import { InlineCode } from "./inline-code.js";
import { KofileLogo } from "./kofile-logo.js";

export const Done = () =>
  html`
    <${Base}>
      <p>That's it!</p>
      <p>
        Create an archive of the <${InlineCode}>your-code-here/*<//> folder and
        email it back to us.
      </p>

      <p>Thanks for your time and effort!</p>
      <p>- Kofile Dev Team</p>

      <${KofileLogo} />
    <//>
  `;
