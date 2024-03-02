import { Fragment } from "react";
import { FaPlay } from "react-icons/fa";
import MusicList from "../MusicList/MusicList";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Fragment>
      <div className="text-center p-2" style={{ backgroundColor: "gray" }}>
        <button className="p-2"
          style={{
            color: "white",
            fontSize: "1.5rem",
            background: "gray",
            borderColor: "cyan",
            border:"1px solid cyan"
          }}
        >
          Get Our Latest Album
        </button>
        <div className="p-3"><button className="p-3" style={{background: "gray",border:"1px solid cyan",borderRadius:"50%"}}>
           <FaPlay style={{color:"cyan",fontSize:"1.5rem"}}/>
           </button>
           </div>
      </div>
      <h2
              className="text-center p-4"
              style={{ fontFamily: "-moz-initial", fontWeight: "bold" }}
            >
              Tours
            </h2>
      <Container>
<MusicList/>
      </Container>
      <h1 style={{background: "hsl(175, 76%, 50%)",color:"white",marginTop:"4rem",fontSize:"3rem",padding:"25px"}}>The Generics</h1>
    </Fragment>
  );
};

export default Home;
