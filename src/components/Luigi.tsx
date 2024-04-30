import { useNavigate } from "react-router-dom";

function Luigi() {
  const navegation = useNavigate()
  return (
    <div>
      <h2> Hi I'm Luigi!</h2>
      <p> The Mario's Brother!!!</p>
      <button onClick={() => navegation("/")}>Main Page</button>
    </div>
  );
}

export default Luigi;
