import { App } from "./app.js";
import { Routes } from "./routes.js";

const { css } = emotion;
const { createContext, useState } = React;

export const AppContext = createContext(false);

const style = {
  showcase: css`
    display: grid;
    background: #f1f2f6;
    color: #000000;
    border-radius: 5px;
    justify-items: center;
    align-items: center;
    height: calc(100vh - 40px);
    box-shadow: 2px 2px 2px #000000;
  `,
  layout: css`
    display: grid;
    grid-template-columns: auto 600px;
    background: #2f3542;
    color: #ffffff;
    height: calc(100vh - 40px);
    margin: 20px;
  `,
  routes: css`
    padding: 50px 30px 50px 50px;
    height: calc(100vh - 140px);
    overflow-y: scroll;
  `,
};

export const Main = () => {
  const [isLoaded, setAppLoaded] = useState(false);
  const setAppToLoaded = () => setAppLoaded(true);

  return html`
    <div className=${style.layout}>
      <${AppContext.Provider} value=${isLoaded}>
        <div className=${style.showcase} id="user-app">
          <${App} onLoad=${setAppToLoaded} />
        </div>
        <div className=${style.routes}><${Routes} /></div>
      <//>
    </div>
  `;
};
