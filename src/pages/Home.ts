import m from "mithril";

export const Home = function() {
  return {
    view: function() {
      return m("div", [
        m("h1", "Home"),
      ]);
    },
  };
};
