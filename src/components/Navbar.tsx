import { Container, Nav, Navbar as NavbarBootstrap } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import { NavLink } from "react-router-dom";
import { CSSProperties } from "react";


const navLinkStyle: CSSProperties = {
    width: "3rem",
    height: "3rem",
    position: "relative",
    backgroundColor: "white",
    border: "none"
}

const divStyle: CSSProperties = {
    border: "2px solid black",
    fontWeight: "bold",
    backgroundColor: "#E9E7FA",
    color: "black",
    width: "30px",
    height: "30px",
    position: "absolute",
    top: 0,
    right: "6px",
    transform: "translate(30%, 0%)",
    padding: "1px"
}

export function Navbar() {
    const { shoppingCartItems } = useShoppingCart()
    return <NavbarBootstrap sticky="top" className="bg-white shadow-sm mb-2">
        <Container>
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Shop</Nav.Link>
            </Nav>
            <NavLink to="/cart"
                style={navLinkStyle}
                className="rounded-circle">
                <img src="/imgs/cart.png" style={{height: "40px"}} />
                <div style={divStyle}
                    className="rounded-circle d-flex justify-content-center align-items center">
                    {shoppingCartItems.length}
                </div>
            </NavLink>
        </Container>
    </NavbarBootstrap>
}