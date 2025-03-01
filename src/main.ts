import "./style.css";
import m from "mithril";
import { Layout } from "./Layout"; 
import { Counter } from "./pages/Counter.ts";
import { Home } from "./pages/Home.ts";

const root = document.querySelector("#app")!;

const routes = [
    { path: "/", component: Home },
    { path: "/counter", component: Counter },
];

const routeConfig = routes.reduce((acc: any, { path, component }) => {
    acc[path] = {
        render: () => m(Layout, m(component)),
    };
    return acc;
}, {});

m.route(root, "/", routeConfig);