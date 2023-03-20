import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar>
            <Container>
                <Navbar.Brand className="text-white">MARVEL</Navbar.Brand>
                <Nav>
                <Nav.Link className="text-white">TRENDING</Nav.Link>
                <Nav.Link className="text-white">SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar