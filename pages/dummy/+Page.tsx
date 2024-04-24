import type { CSSProperties } from "react";
import HashLink from "../../renderer/HashLink";

const Page = () => {
  const smoothScroll: CSSProperties = {
    scrollBehavior: "smooth",
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <a href="/debug/anchor#first-section" style={smoothScroll}>
        Go to red
      </a>
      <a href="/debug/anchor#second-section" style={smoothScroll}>
        Go to blue
      </a>
      <HashLink href="/debug/anchor#third-section">Go to yellow</HashLink>
    </div>
  );
};

export { Page };
