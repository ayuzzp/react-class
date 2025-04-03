// const name="ayush"
// const age=21
// const salary=23000

// import EmpData from "./EmpData";

// const App=()=>{
//   return (
//     <>
//        <h1>This is react i am {name} my age{age}  and my salary {salary*2}</h1>
      
//     </>
//   )
// }
// export default App;

// const subject = <ul>
//   <li>php</li>
//   <li>js</li>
//   <li>java</li>
//   <li>oracle</li>
//   <li>asp</li>
//   <li>sql</li>
// </ul>

// const app=()=>{
//   return (
//   <h1>my subject :{subject}</h1>
//   )
// }

// const one=()=>{

// }

// ====================================================================================================================
// import EmpData from "./EmpData";
// import EmpDesign from "./EmpDesign";
// const App=()=>{
//  const ans=EmpData.map((key)=>(<EmpDesign 
//  id={key.id}
//  name={key.name}
//  designation={key.designation}
//  salary={key.salary}
//  />
//  )) 
 
//   return(
//   <>
//    <h2>welcome</h2>
//    <table border={"2px,solid,black"}>
//     <tr>
//       <th>ID</th>
//       <th>NAME</th>
//       <th>DESIGNATION</th>
//       <th>SALARY</th>
//     </tr>
//       {ans}
//    </table>
//     </> 
//   )
// }
  
// export default App;

// =======================REACT-ROUTER-DOM====================================================================

//  import { BrowserRouter, Routes ,Route } from "react-router-dom";
//  import Layout from "./Layout";
//  import Home from "./pages/Home";
//  import About from "./pages/About";
//  import Contact from "./pages/Contact";

//  const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} /> 
//           <Route path="home" element={<Home />} /> 
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
//  }
//  export default App;

// ==============================importing images in react==================================================

// import img1 from "./Images/download (1).jpg"
// import img2 from "./Images/download (2).jpg"
// import img3 from "./Images/download.jpg"
// const App=()=>{
//   return(
//     <>
//     <h1>welcome </h1>
//       <img src={img1} width="300px" height="300px" />
//       <img src={img2} width="300px" height="300px" />
//       <img src={img3} width="300px" height="300px" />

//     </>
//   )
// }
// export default App;
// ----------------------------------------BOOTSTRAP_________________________________________________________
import Footer from './Footer';
import Table from './Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Carousel from 'react-bootstrap/Carousel';
import img1 from "./Images/big img.webp"
import img2 from "./Images/big img2.webp"
import img3 from "./Images/big img 3.webp"
import cardimg1 from "./Images/cricket_TC_eb127c1142.avif"
import cardimg2 from "./Images/running_d_79c8219795.avif"
import cardimg3 from "./Images/training_d_a5c2eb1789.avif"
import cardimg4 from "./Images/1050x1400_100_c101b35183.avif"
import cardimg5 from "./Images/swimming_d_13c2016e02.avif"


const App=()=>{
  return(
    <>
  
  <Navbar bg="dark" variant="dark" className="shadow-lg">
  <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Carousel>
      <Carousel.Item>
        <img src={img1}  style={{width:"100%",height:"600px"}} />
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} style={{width:"100%",height:"600px"}} />
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3}  style={{width:"100%",height:"600px"}} />
      
      </Carousel.Item>
    </Carousel>

    <div style={{display:"flex" ,justifyContent:"space-around",margin:"10px"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
{/* ================second DIV============================================== */}
    <div style={{display:"flex" ,justifyContent:"space-around",margin:"10px"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

{/* ========================FOOTER============================================================ */}
    <div style={{margin:"10px"}}>
      <Table/>
   <Footer/>
    </div>
    </>
  )
}
export default App