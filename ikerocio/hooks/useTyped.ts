import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

const useTyped = (options: TypedOptions) => {
  const el = useRef<HTMLElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      typed.current?.destroy();
    };
  }, [options]);

  return el;
};

export default useTyped;
