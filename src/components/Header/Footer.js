
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
    
      <a className="p-2" href="https://www.spotify.com" target="_blank">Spotify
          <i  className="fa fa-facebook"></i>
        </a>
      <a className="p-2" href="https://www.facebook.com" target="_blank">Facebook
          <i  className="fa fa-facebook"></i>
        </a>
       
      <a className="p-2" href="https://www.youtube.com" target="_blank">YouTube
          <i  className="fa fa-facebook"></i>
        </a> 
     </section>
  );
};

export default Footer;
