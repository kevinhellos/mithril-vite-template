import "./style.css";
import m from "mithril";
import { App } from "./App.ts";
import { Counter } from "./pages/Counter.ts";

const root = document.querySelector("#app")!;
m.mount(root, App);

// Router
m.route(root, "/", {
    "/": App,
    "/counter": Counter,
});