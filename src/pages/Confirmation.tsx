import { useLocation } from "react-router-dom";

export function Confirmation() {
    const { state } = useLocation();
    const { orderNumber } = state
    return <>
        <h1>Order number <b>#{orderNumber}</b> confirmed!</h1>
        <p>Thank you for shopping with us. Your order will be with you within 3 to 4 months.</p>
    </>

}
