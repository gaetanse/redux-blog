import { Component } from "react"
import { Link } from "react-router-dom"
import { Container,Navbar,Nav } from "react-bootstrap"

class Menu extends Component {
    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand>NOM DU SITE</Navbar.Brand>
                <Nav className="me-auto">
                <Link style={{margin:"5px 5px",color: "white",textDecoration: "none",fontSize:"25px"}} to="/">Accueil</Link>
                <Link style={{margin:"5px 5px",color: "white",textDecoration: "none",fontSize:"25px"}} to="/ecrire">Ecrire</Link>
                <Link style={{margin:"5px 5px",color: "white",textDecoration: "none",fontSize:"25px"}} to="/contact">Contact</Link>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}
 
export default Menu;