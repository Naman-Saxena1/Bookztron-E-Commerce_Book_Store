import { useReducer, createContext, useContext } from "react"

const OrdersContext = createContext()

const updateOrdersFunc = (state,action) => {
    switch(action.type)
    {
        case "UPDATE_USER_ORDERS" : 
            {
                return [...action.payload]
            }
        default : return state 
    }
}

const OrdersContextProvider = ({children}) => {
    const [userOrders, dispatchUserOrders] = useReducer(updateOrdersFunc,[])

    return (
        <OrdersContext.Provider value={{userOrders, dispatchUserOrders}}>
            {children}
        </OrdersContext.Provider>
    )
}

let useOrders = () => useContext(OrdersContext)

export { useOrders, OrdersContextProvider }