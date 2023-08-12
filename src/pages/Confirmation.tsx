import { useLocation } from "react-router-dom";

export function Confirmation() {
    const { state } = useLocation();
    // const { orderNumber } = state
    return <>
        <h1>Order number <b>#{Math.floor(1000 + Math.random() * 9000)}</b> confirmed!</h1>
        <p>Thank you for shopping with us. Your order will be with you within 3 to 4 months.</p>
    </>

}
