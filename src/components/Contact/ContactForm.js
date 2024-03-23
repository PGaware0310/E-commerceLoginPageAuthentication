import { useState } from "react";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState("");

  const onContactUsHandle = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("https://e-commerce-web-c9af8-default-rtdb.firebaseio.com/contactus.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name,email,phoneno
          }),
        });
  
        if (response.ok) {
          console.log("Data submitted successfully");
          // Clear form fields after successful submission
          setName("");
          setEmail("");
          setPhoneNo("");
        } 
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
  return (
    <form className="mb-2" >
      <div>
        <label>Name</label>
      </div>
      <div>
        <input
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "none",
            padding: "2px",
          }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>PhoneNo.</label>
      </div>
      <div>
        <input
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "none",
            padding: "2px",
          }}
          type="phone"
          value={phoneno}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
      </div>
      <div
        style={{
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: "10px",
        }}
      >
        <button
          style={{
            width: "25%",
            borderRadius: "12px",
            background: "hsl(175, 76%, 50%)",
            border: "none",
            fontWeight: "bold",
            padding: "2px",
          }}
          onClick={onContactUsHandle}>
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
