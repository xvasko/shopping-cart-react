import products from "../data/products.json"

export function totalPrice(shoppingCartItems: any) {
    console.log(shoppingCartItems)
    let totalPrice: number = 0;
    shoppingCartItems.forEach((product: any) => {
        totalPrice += parseInt(product.price)
    });

    return "$" + totalPrice
}
