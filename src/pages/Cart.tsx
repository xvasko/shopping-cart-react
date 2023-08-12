import { Row, Col } from "react-bootstrap"
import { Card } from '../components/Card'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { totalPrice } from "../utils/totalPrice";
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";


async function createOrder(shoppingCartItems: any, navigate: any, nukeCart: any) {
    let items = ""
    for (const item of shoppingCartItems) {
        items = items + ", " + item.id
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer_name: 'Spar Ro', items })
    };

    const response = await fetch('http://127.0.0.1:8000/api/create-order/', requestOptions);
    const data = await response.json();

    nukeCart()
    
    navigate(`/confirmation`, {state: {orderNumber: data.id}});
}

export function Cart() {
    const { shoppingCartItems, nukeCart } = useShoppingCart()
    const navigate = useNavigate();
    return <>
            <h1>Cart</h1>
            <Row lg={1} md={1} xs={1} className="g-3">
                {shoppingCartItems.map(item => (
                    <Col key={item.id}>
                        <Card id={item.id}/>
                    </Col>
                ))}
            </Row>
            <br/>
            <h2>Total: {totalPrice(shoppingCartItems)}</h2>
            <Button className="mt-4" onClick={() => createOrder(shoppingCartItems, navigate, nukeCart)}>Order</Button>
        </>
}
