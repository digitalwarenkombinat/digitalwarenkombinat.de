import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

export const CanvasContext = createContext<{
  context: CanvasRenderingContext2D | undefined;
}>({
  context: undefined,
});

export const useCanvasContext = () => {
  return useContext(CanvasContext);
};
