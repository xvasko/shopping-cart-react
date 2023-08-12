import { Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { AddButton } from "./AddButton"

import { trimPrice } from "../utils/trimPrice";

type ShopItemProps = {
    id: string,
    name: string,
    category: string,
    price: string,
    bgColor: string,
}

const cardImgStyle = {
    objectFit: "cover",
    width: "30%",
    padding: "18px 8px",
    margin: "30px 20px",
    borderRadius: "20px",
    borderColor: "black",
    border: "2px",
    borderStyle: "solid",
}

export function ShopItem({id, name, category, price, bgColor}:ShopItemProps) {
    const { addItem } = useShoppingCart()
    return <Card style={{flexDirection: "row"}}>
        <Card.Img 
            variant="bottom" 
            src={`/imgs/${id}.png`} 
            style={{...cardImgStyle, backgroundColor: bgColor}}
        />
        <Card.Body className="d-flex flex-column p-4">
            <Card.Title>
                <span style={{ fontSize: "1rem"}} className="text-muted">{category}</span> <br />
                <span>{name}</span>
            </Card.Title>
            <Card.Text className="d-flex justify-content-between align-items-bottom mt-auto">
                <span style={{ fontSize: "1.5rem", fontWeight: "bold"}}>${trimPrice(price)}</span>
                <AddButton addItem={addItem} id={id} price={price}/>
            </Card.Text>
        </Card.Body>
    </Card>
}
