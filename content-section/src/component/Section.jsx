import { useState } from 'react';
import { EXAMPLES } from '../data';

export default function Section() {
    const [content, setContent] = useState();
    let text = "Please select a content";
  
    function onClickChangeContent(content) {
      setContent(content);
    }
  
    if (content) {
      text = EXAMPLES[content].descritpion
    }

    return <section>
        <h2>Examples</h2>
        <button onClick={() => onClickChangeContent("example1")}>content1</button>
        <button onClick={() => onClickChangeContent("example2")}>content2</button>
        <p>{text}</p>
    </section>
}