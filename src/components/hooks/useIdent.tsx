import { useRef, useCallback } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";

export default function useIdent() {
  let idCounter = 0;
  const idGenerator = useCallback(() => {
    const prefix = letters[Math.floor(Math.random() * letters.length)];
    return `${prefix}${idCounter++}`;
  }, []);

  const generatorRef = useRef(idGenerator());
  const id = useRef(generatorRef.current);

  return id.current;
}
