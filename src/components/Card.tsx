import { trimPrice } from "../utils/trimPrice";
import products from "../data/products.json"
import { useShoppingCart } from '../context/ShoppingCartContext'

const cardStyle = {
    border: "2px solid black",
    borderBottom: "6px solid black",
    borderRadius: "14px",
    height: "130px",
    padding: "8px 40px 8px 16px",
    position: "relative",
};

const toastStyle = {
    ...cardStyle,
    backgroundColor: "#00C6AE",
    position: "fixed",
    width: "90%",
    bottom: "10px",
    margin: "0px auto",
    left: "0",
    right: "0",
}

const spanStyle = {
    position: "absolute",
    bottom: 8,
    left: 16,
    fontWeight: "bold",
    fontSize: "1.5rem"
}

const imgStyle = {
    position: "absolute",
    top: "2px",
    right: "2px",
    border: "2px solid black",
    backgroundColor: "white",
    borderRadius: "16px",
    transform: "rotate(45deg)",
    alignSelf: "center",
    height: "32px",
    padding: "7px",
    cursor: "pointer",
}

type CardProps = {
    id: string,
    isToast?: boolean
}

export function Card({id, isToast = false}: CardProps) {
    const { removeItem, setShowToast } = useShoppingCart()
    const product = products.products.find(product => product.id === id)

    if (!isToast) {
        return <div style={{...cardStyle, backgroundColor: product?.bgColor}}>
            <h2>{product?.name}</h2>
            <span style={spanStyle}>
                ${trimPrice(product?.price)}
            </span>
            <img style={imgStyle} src="/imgs/plus.png" onClick={() => removeItem(id)}/>
        </div>
    } else {
        return <div style={toastStyle}>
            <h2>{product?.name}<span style={{fontSize: "large"}}> has been added to your cart.</span></h2>
            <img style={imgStyle} src="/imgs/plus.png" onClick={() => setShowToast(false)}/>
        </div>
    }
}
