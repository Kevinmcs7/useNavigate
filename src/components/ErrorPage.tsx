import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navegation = useNavigate()
  return (
    <div>
      <h1> Sorry, This Page Does't exist!!!</h1>
      <button onClick={() => navegation("/")}>Profile Page</button>
    </div>
  );
}

export default ErrorPage;
