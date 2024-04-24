import { type CSSProperties } from "react";

type TSection = {
  id: string;
  backgroundColor: string;
};

const sections: TSection[] = [
  { id: "first-section", backgroundColor: "red" },
  { id: "second-section", backgroundColor: "blue" },
  { id: "third-section", backgroundColor: "yellow" },
];

const Page = () => {
  const height = typeof window === "undefined" ? 779 : window.innerHeight;

  const container: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  };
  const item: CSSProperties = {
    width: "100%",
  };
  const scrollArea: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    maxHeight: `${height - 41}px`,
    overflow: "auto",
  };

  return (
    <div style={container}>
      <a href="/debug/dummy">Go back</a>

      <div style={scrollArea}>
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            style={{
              ...item,
              backgroundColor: section.backgroundColor,
              minHeight: height,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { Page };
