import {FaYoutubeSquare,FaFacebook,FaSpotify} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="p-4"
    style={{
      background: "hsl(175, 76%, 50%)",
      fontFamily: "-moz-initial",
      color: "white",
    }}>
  
      <h1 style={{fontSize:"4rem"}}>
        The Generics
        
      </h1>
      <a className="p-2" href="https://www.youtube.com" target="_blank">
      <FaYoutubeSquare style={{color:"rgb(224, 48, 17)",fontSize:"1.5rem",background:"white"}}/> 
        </a> 
      <a className="p-2" href="https://www.spotify.com" target="_blank">
<FaSpotify style={{color:"rgb(0, 150, 115)",fontSize:"1.5rem",background:"white"}}/>
        </a>
      <a className="p-2" href="https://www.facebook.com" target="_blank">
      <FaFacebook style={{color:'blue',fontSize:"1.5rem",background:"white"}}/>
        </a>
      
     </section>
  );
};

export default Footer;
