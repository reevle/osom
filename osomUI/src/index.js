import rn from "./components";

/**
 * @param  {Object} app Vue 3 app instance
 */
export const init = (app) => {
  Object.keys(rn).map((name) => {
    app.component("Osom" + name, rn[name]);
  });
};

export { default as Theme } from "./state/theme";
