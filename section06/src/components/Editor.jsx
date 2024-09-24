import './Editor.css';
import {useState, useRef} from 'react';
const Editor = ({onCreate}) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const onChange = (e) => {
    setContent(e.target.value);
  }
  const onKeyDwon = (e) => {
    if(e.keyCode === 13){
      onSubmit();
    }
  }
  const onSubmit = () => {
    if(content === ""){
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }
  return(
    <div className="editor">
      <input ref={contentRef} value={content} onChange={onChange} onKeyDown={onKeyDwon} placeholder="새로운 to do...." />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;