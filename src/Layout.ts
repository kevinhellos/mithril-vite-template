import m, { Vnode } from "mithril";
import { Navbar } from "./components/Navbar";

// Shared Layout (root layout)
export const Layout = {
    view: function(vnode: Vnode) {
        return m("div", [
            m(Navbar),
            m("main", vnode.children)
        ]);
    }
};