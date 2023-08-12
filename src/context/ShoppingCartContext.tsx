import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    addItem: (id: string, price: string) => void,
    removeItem: (id: string) => void,
    shoppingCartItems: ShoppingCartItem[],
    showToast: boolean,
    setShowToast: Dispatch<SetStateAction<boolean>>
    nukeCart: () => void
}

type ShoppingCartItem = {
    id: string,
}

export function ShoppingCartProvider({children} : ShoppingCartProviderProps) {
    const [shoppingCartItems, setShoppingCartItems] = useLocalStorage<ShoppingCartItem[]>("shoppingcart ",[])
    const [showToast, setShowToast] = useState(false)

    function addItem(id: string, price: string) {
        setShoppingCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                setShowToast(true)
                return [...currentItems, { id, price }]
            } else {
                return currentItems
            }
        })
    }

    function removeItem(id: string) {
        setShoppingCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    function nukeCart() {
        setShoppingCartItems([])
    }

    return (
        <ShoppingCartContext.Provider value={{addItem, removeItem, shoppingCartItems, showToast, setShowToast, nukeCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
