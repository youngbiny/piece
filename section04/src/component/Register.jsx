import { useRef, useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name : "",
    birth : "",
    country : "",
    bio : "",
  });
  const inputRef = useRef();
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value,
    })
  }
  const onSubmit = () => {
    if(input.name === ""){
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  }
  return(
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder="이름" />
      </div>
      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  )
}

export default Register;