export function trimPrice(price: string|undefined) {
    if (price) {
        return price.split(".")[0]
    }
}
