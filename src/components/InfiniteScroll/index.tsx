import { useEffect, useRef } from "react";

export default function InfiniteScroll({ handle, currentPage }: any) {
  const containerRef = useRef<any>();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // observer.disconnect(); //Uma vez
        handle(currentPage + 1);
      }
    }, options);

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef} />;
}
