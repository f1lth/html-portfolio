import { useAsciiText, alligator, caligraphy2} from 'react-ascii-text';

function AsciiComponent() {
    const asciiTextRef = useAsciiText({
        animationCharacters: "▒░█",
        animationCharacterSpacing: 1,
        animationDelay: 99999999999999999,
        animationDirection: "down",
        animationInterval: 0,
        animationLoop: true,
        animationSpeed: 8,
        font: caligraphy2,
        text: ["F1lth"],
      });
    
      return <pre ref={asciiTextRef}></pre>;
}

export default AsciiComponent;