import { createApp } from "vue";
import { init as OSOMUIInit } from "osom-ui";
import App from "./App.vue";


const app = createApp(App);

app.use(OSOMUIInit);
app.mount("#app");
