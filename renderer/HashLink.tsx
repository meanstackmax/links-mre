import type {
  AnchorHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
} from "react";
import { usePageContext } from "./usePageContext";

const HashLink = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  const pageContext = usePageContext();

  const smoothScroll: CSSProperties = {
    scrollBehavior: "smooth",
  };

  const onMouseDown = () => {
    if (typeof window === "undefined" || !props.href) {
      return;
    }

    document.body.style.scrollBehavior = "smooth";
    window.location.assign(String(props.href));
  };

  return (
    <a
      style={smoothScroll}
      onMouseDown={onMouseDown}
      {...props}
      // NOTE: override `href` attribute with fallback for SSR
      href={pageContext.urlPathname}
    />
  );
};

export default HashLink;
