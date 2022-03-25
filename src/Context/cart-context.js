import { useReducer, createContext, useContext } from "react"

const CartContext = createContext()

const updateCartFunc = (state,action) => {
    switch(action.type)
    {
        case "UPDATE_USER_CART" : 
            {
                return [...action.payload]
            }
        default : return [...state] 
    }
}

const CartContextProvider = ({children}) => {
    const [userCart, dispatchUserCart] = useReducer(updateCartFunc,[])

    return (
        <CartContext.Provider value={{userCart, dispatchUserCart}}>
            {children}
        </CartContext.Provider>
    )
}

let useCart = () => useContext(CartContext)

export { useCart, CartContextProvider }