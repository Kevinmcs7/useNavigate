import { useNavigate } from "react-router-dom";

function Mario() {
  const navegation = useNavigate()
  return (
    <div>
      <h2> Hi I'm Mario Broos!</h2>
      <button onClick={() => navegation("/")}>Main Page</button>
    </div>
  );
}

export default Mario;
