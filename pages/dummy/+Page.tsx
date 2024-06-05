import type { CSSProperties } from "react";
import { navigate } from "vike/client/router";
import HashLink from "../../renderer/HashLink";

const Page = () => {
  const smoothScroll: CSSProperties = {
    scrollBehavior: "smooth",
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <a href="anchor#first-section" style={smoothScroll}>
        Go to red
      </a>
      <a href="anchor#second-section">Go to blue</a>
      <a href="anchor#third-section">Go to yellow</a>
      <a
        href="/test/anchor#third-section"
        onClick={() =>
          navigate("/test/anchor#third-section", { keepScrollPosition: true })
        }
      >
        Go to yellow on different route
      </a>
      <HashLink href="/debug/anchor#third-section">
        Go to yellow from Hashlink component
      </HashLink>
    </div>
  );
};

export { Page };
