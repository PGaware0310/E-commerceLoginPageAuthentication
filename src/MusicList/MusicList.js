import {Row,Col,Button} from "react-bootstrap";
const MusicList = (props) => {
  const list = [
    {
      date: "JUL 16",
      title: "DETROIT, MI",
      description: "DTE ENERGY MUSIC THEATRE",
    },
    {
        date: "JUL 19",
        title: "TORONTO,ON",
        description: "BUDWEISER STAGE",
      },
      {
        date: "JUL 22",
        title: "BRISTOW, VA",
        description: "JIGGY LUBE LIVE",
      },
      {
        date: "JUL 29",
        title: "PHOENIX, AZ",
        description: "AK-CHIN PAVILION",
      },
      {
        date: "AUG 2",
        title: "LAS VEGAS, NV",
        description: "T-MOBILE ARENA",
      },
      {
        date: "AUG 7",
        title: "CONCORD, CA",
        description: "CONCORD PAVILION",
      },
  ];
  return( 
  <>
{list.map((item,index)=>(
  <Row key={index} className="p-2" md={4} style={{borderBottom:"1px solid"}}>
    <Col>{item.date}</Col>
    <Col style={{color:"gray"}}>{item.title}</Col>
    <Col style={{color:"gray"}}>{item.description}</Col>
    <Col><Button style={{border:"none",background:"hsl(175, 76%, 50%)",fontSize:"14px",fontWeight:"bold",width:"80%"}}>BUY TICKETS</Button></Col>
  </Row>
))}
  </>
  );
};

export default MusicList;
