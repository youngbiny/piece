import { useState } from "react";

const Bulb = () => {
  const [light, setLignt] = useState("off");
  return(
    <div>
      {light === "off" ? (
        <h1 style={{backgroundColor:"gray"}}>OFF</h1>
      ):(
        <h1 style={{backgroundColor:"orange"}}>ON</h1>
      )}
      <h1>{light}</h1>
      <button onClick={() => {
        setLignt(light === "off" ? "on" : "off")
      }}>{light === "off" ? "끄기" : "켜기"}</button>
    </div>
  )
}

export default Bulb;