import { Row, Col } from "react-bootstrap"
import { ShopItem } from "../components/ShopItem"
import products from "../data/products.json"
import { Card } from "../components/Card"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Shop() {
    const { showToast, shoppingCartItems } = useShoppingCart()
    return <>
        
        <Row lg={3} md={2} xs={1} className="g-3">
            {products.products.map(product => (
                <Col key={product.id}>
                    <ShopItem {...product} />
                </Col>
            ))}
        </Row>
        {showToast && shoppingCartItems.length != 0 && <Card id={shoppingCartItems[shoppingCartItems.length - 1].id} isToast />}
    </>
}
