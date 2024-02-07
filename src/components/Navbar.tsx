import {Navbar as NavBS,Container,Nav,Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <NavBS sticky="top"  className="bg-white shadow-sm mb-3" >
        <Container>
            <Nav className="me-auto" >
                <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink} >Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink} >About</Nav.Link>
            </Nav>
            <Button variant="outline-primary" >Cart</Button>
            <div className=" p-2 bg-danger text-white" style={{borderRadius: "40%"}} >
                3
            </div>
        </Container>
    </NavBS>
  )
}

export default Navbar