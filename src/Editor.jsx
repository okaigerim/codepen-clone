import React, { useEffect, useState } from "react";
import clsx from "clsx";
import logo from "./codepen_logo.png";
import useLocalStorage from "./storage";
import "./index.css";

const Editor = ({ layout }) => {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [codepenCode, setcodepenCode] = useState("");
  const [activeTab, setActiveTab] = useState("html");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setcodepenCode(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}</script>
        </html>
      `);
    }, 200);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className={clsx("wrapper", layout)}>
      <div className="header">
        <img src={logo} alt="Codepen Logo" />
        <span>Codepen</span>
      </div>

      <div className="container">
        {layout === "tabbed" && (
          <div className="tab-header">
            <button
              className={clsx({ active: activeTab === "html" })}
              onClick={() => setActiveTab("html")}
            >
              HTML
            </button>
            <button
              className={clsx({ active: activeTab === "css" })}
              onClick={() => setActiveTab("css")}
            >
              CSS
            </button>
            <button
              className={clsx({ active: activeTab === "js" })}
              onClick={() => setActiveTab("js")}
            >
              JS
            </button>
          </div>
        )}

        {layout === "vertical" && (
          <div className="vertical-container"
          >
            <div className="input-cover">
              <textarea
                className={clsx("input", {
                  active: layout === "tabbed" && activeTab === "html",
                })}
                value={html}
                placeholder="HTML"
                onChange={(e) => setHtml(e.target.value)}
                autoComplete="off"
              />
              <textarea
                className={clsx("input", {
                  active: layout === "tabbed" && activeTab === "css",
                })}
                value={css}
                placeholder="CSS"
                onChange={(e) => setCss(e.target.value)}
                autoComplete="off"
              />
              <textarea
                className={clsx("input", {
                  active: layout === "tabbed" && activeTab === "js",
                })}
                value={js}
                placeholder="JS"
                onChange={(e) => setJs(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="output">
              <iframe
                srcDoc={codepenCode}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}

        {layout !== "vertical" && (
          <div>
            <div className="input-cover">
              <textarea
                className={clsx("input", {
                  active: layout === "tabbed" && activeTab === "html",
                })}
                value={html}
                placeholder="HTML"
                onChange={(e) => setHtml(e.target.value)}
                autoComplete="off"
              />
              <textarea
                className={clsx("input", {
                  active: layout === "tabbed" && activeTab === "css",
                })}
                value={css}
                placeholder="CSS"
                onChange={(e) => setCss(e.target.value)}
                autoComplete="off"
              />
              <textarea
                className={clsx("input", {
                  active: layout === "tabbed" && activeTab === "js",
                })}
                value={js}
                placeholder="JS"
                onChange={(e) => setJs(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="output">
              <iframe
                srcDoc={codepenCode}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;
