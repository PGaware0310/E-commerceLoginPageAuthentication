import { useContext, useState } from "react";
import NavBarr from "../../Navigation/NavBarr";
import { Container, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const authContext = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkcdTZpL2EGydVEvM37Y2l4tTAjiEZsrg",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            passwd: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        let errMsg = "Authentication Failed";
        throw new Error(errMsg);
      }
      const data = await response.json();
      authContext.login(data.idToken);
      navigate("/store");
    } catch (err) {
      alert(err.message);
    }

    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <NavBarr />
      <h1
        className="text-center mb-4 mt-2"
        style={{
          fontFamily: "-moz-initial",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        LogIn
      </h1>
      <Container
        className="p-4 mt-10"
        style={{
          textAlign: "left",
          fontWeight: "bold",
          background: "gray",
          width: "45%",
          padding: "4px",
          borderRadius: "12px",
          boxShadow: "0 0 50px rgb(189, 147, 231)",
        }}
      >
        <form className="mb-2" onSubmit={onSubmitLoginHandler}>
          <div>
            <label>Email</label>
          </div>
          <div>
            <input
              style={{
                width: "100%",
                borderRadius: "8px",
                border: "none",
                padding: "2px",
              }}
              type="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <label>Password</label>
          </div>
          <div>
            <input
              style={{
                width: "100%",
                borderRadius: "8px",
                border: "none",
                padding: "2px",
              }}
              type="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            <Button
              style={{
                width: "25%",
                borderRadius: "12px",
                background: "hsl(175, 76%, 50%)",
                color: "black",
                border: "none",
                fontWeight: "bold",
                padding: "5px 0px",
                marginTop: "4px",
              }}
              type="submit"
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Login;
