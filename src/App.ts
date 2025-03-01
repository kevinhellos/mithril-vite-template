import m from "mithril";

export const App = () => {
  return {
    view: function() {
      return m("div", [
        m("h1", "Home"),
        m("a", { href: "#!/counter"}, "counter")
      ]);
    },
  };
};
