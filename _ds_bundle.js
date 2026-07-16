/* Dornaz Design System — component bundle.
   Registers React components on window.DornazDesignSystem_1658b6 so the
   dc-runtime (support.js) can resolve <x-import component-from-global-scope=...>.
   Reconstructed from the component usages across the portfolio pages. */
(function () {
  var React = window.React;
  if (!React) {
    console.error("[ds] window.React not available when _ds_bundle.js ran");
    return;
  }
  var h = React.createElement;

  /* ---------- NavBar({ name, logoSrc, links }) ---------- */
  function NavBar(props) {
    var name = props.name || "";
    var links = props.links || [];
    return h(
      "header",
      {
        style: {
          position: "sticky", top: 0, zIndex: 50,
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "saturate(180%) blur(12px)",
          WebkitBackdropFilter: "saturate(180%) blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        },
      },
      h(
        "nav",
        {
          style: {
            maxWidth: "1120px", margin: "0 auto",
            padding: "0 var(--space-8)", height: "64px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          },
        },
        h(
          "a",
          { href: "Home.dc.html", style: { display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontWeight: 700 } },
          props.logoSrc ? h("img", { src: props.logoSrc, alt: "", width: 26, height: 26, style: { display: "block", borderRadius: "7px" }, onError: function (e) { e.target.style.display = "none"; } }) : null,
          h("span", { style: { font: "var(--text-button)", letterSpacing: "-0.01em", fontSize: "1.05rem" } }, name)
        ),
        h(
          "div",
          { style: { display: "flex", alignItems: "center", gap: "var(--space-6)", flexWrap: "wrap" } },
          links.map(function (l, i) {
            return h(
              "a",
              {
                key: i, href: l.href,
                style: { font: "var(--text-button)", color: "var(--text-secondary)", transition: "color .15s" },
                onMouseEnter: function (e) { e.target.style.color = "var(--text-accent)"; },
                onMouseLeave: function (e) { e.target.style.color = "var(--text-secondary)"; },
              },
              l.label
            );
          })
        )
      )
    );
  }

  /* ---------- Button({ variant, size, onClick, children, ...rest }) ---------- */
  function Button(props) {
    var variant = props.variant || "primary";
    var size = props.size || "md";
    var hover = React.useState(false);
    var isHover = hover[0], setHover = hover[1];

    var pad = size === "lg" ? "0 26px" : "0 18px";
    var height = size === "lg" ? "52px" : "42px";

    var base = {
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
      height: height, padding: pad, border: "1px solid transparent",
      borderRadius: "var(--radius-pill)", font: "var(--text-button)",
      cursor: "pointer", whiteSpace: "nowrap", transition: "all .18s ease",
      textDecoration: "none",
    };
    var variants = {
      primary: {
        background: isHover ? "var(--accent-active)" : "var(--accent)",
        color: "#fff",
        boxShadow: isHover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: isHover ? "translateY(-1px)" : "none",
      },
      secondary: {
        background: isHover ? "var(--surface-accent-tint)" : "transparent",
        color: "var(--text-primary)",
        borderColor: "var(--border-strong)",
      },
    };
    var style = Object.assign({}, base, variants[variant] || variants.primary);
    // dcProps (spread) may carry style overrides
    if (props.style) style = Object.assign(style, props.style);

    return h(
      "button",
      {
        type: "button", style: style, onClick: props.onClick,
        onMouseEnter: function () { setHover(true); },
        onMouseLeave: function () { setHover(false); },
      },
      props.children
    );
  }

  /* ---------- Tag({ tone, children }) ---------- */
  function Tag(props) {
    var tone = props.tone || "outline";
    var tones = {
      accent: { background: "var(--surface-accent-tint)", color: "var(--text-accent-hover)", border: "1px solid transparent" },
      outline: { background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border-strong)" },
    };
    var style = Object.assign(
      {
        display: "inline-flex", alignItems: "center",
        height: "32px", padding: "0 14px",
        borderRadius: "var(--radius-pill)",
        font: "var(--text-caption)", fontWeight: 600, whiteSpace: "nowrap",
      },
      tones[tone] || tones.outline
    );
    return h("span", { style: style }, props.children);
  }

  /* ---------- MetricCounter({ value, suffix, label }) ---------- */
  function MetricCounter(props) {
    return h(
      "div",
      { style: { display: "flex", flexDirection: "column", gap: "6px" } },
      h(
        "div",
        { style: { display: "flex", alignItems: "baseline", gap: "2px" } },
        h("span", { style: { font: "var(--text-stat)", color: "var(--text-primary)", letterSpacing: "-0.02em" } }, props.value),
        props.suffix ? h("span", { style: { font: "var(--text-stat)", fontSize: "1.4rem", color: "var(--text-accent)", fontWeight: 700 } }, props.suffix) : null
      ),
      h("span", { style: { font: "var(--text-caption)", color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em" } }, props.label)
    );
  }

  /* ---------- Footer({ name, logoSrc, email, links }) ---------- */
  var ICONS = {
    linkedin: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z",
    github: "M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z",
  };
  function Footer(props) {
    var links = props.links || [];
    return h(
      "footer",
      { style: { background: "var(--surface-inverse)", color: "#fff" } },
      h(
        "div",
        {
          style: {
            maxWidth: "1120px", margin: "0 auto",
            padding: "56px var(--space-8)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: "24px", flexWrap: "wrap",
          },
        },
        h(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: "8px" } },
          h("div", { style: { font: "var(--text-h4)", color: "#fff", fontWeight: 700 } }, props.name || ""),
          props.email ? h("a", { href: "mailto:" + props.email, style: { color: "var(--ink-200)", font: "var(--text-body)" } }, props.email) : null
        ),
        h(
          "div",
          { style: { display: "flex", alignItems: "center", gap: "12px" } },
          links.map(function (l, i) {
            var d = ICONS[l.icon];
            return h(
              "a",
              {
                key: i, href: l.href, target: "_blank", rel: "noopener noreferrer",
                title: l.label, "aria-label": l.label,
                style: {
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "42px", height: "42px", borderRadius: "var(--radius-pill)",
                  background: "rgba(255,255,255,0.08)", color: "#fff", transition: "background .18s",
                },
                onMouseEnter: function (e) { e.currentTarget.style.background = "var(--accent)"; },
                onMouseLeave: function (e) { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; },
              },
              d
                ? h("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, h("path", { d: d }))
                : l.label
            );
          })
        )
      )
    );
  }

  window.DornazDesignSystem_1658b6 = {
    NavBar: NavBar,
    Button: Button,
    Tag: Tag,
    MetricCounter: MetricCounter,
    Footer: Footer,
  };
})();
