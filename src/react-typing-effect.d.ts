declare module 'react-typing-effect' {
  import { ComponentType } from 'react';

  interface TypingProps {
    text: string | string[];
    speed?: number;
    eraseSpeed?: number;
    typingDelay?: number;
    eraseDelay?: number;
    staticText?: string;
    cursor?: string;
    className?: string;
    cursorClassName?: string;
    displayTextRenderer?: (text: string, i: number) => JSX.Element;
  }

  const Typing: ComponentType<TypingProps>;

  export default Typing;
}
