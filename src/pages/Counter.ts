import m from "mithril";

let count = 0 ;

export const Counter = () => {
  return {
    view: function() {
      return m("div", [
        m("h1", "Counter page"),
        m("p", "Count: " + count),
        m("button", {onclick: function() {count++}}, count + " clicks"),
      ]);
    },
  };
};
