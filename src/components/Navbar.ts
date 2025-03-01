import m from "mithril";

export const Navbar = () => {
    return {
        view: function() {
            return m("nav", [
                m("a", { href: "#!/"}, "Home"),
                m("a", { href: "#!/counter"}, "Counter"),
            ]);
        }
    }
}