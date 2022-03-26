import { useReducer, useContext, createContext } from "react"

const WishlistContext = createContext()

const updateWishlistFunc = (state,action) => {
    switch(action.type)
    {
        case "UPDATE_USER_WISHLIST" : 
            {
                return [...action.payload]
            }
        default : return [...state] 
    }
}

const WishlistContextProvider = ({children}) => {
    const [userWishlist, dispatchUserWishlist] = useReducer(updateWishlistFunc, [])

    return (
        <WishlistContext.Provider value={{userWishlist, dispatchUserWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

let useWishlist = () => useContext(WishlistContext)

export { WishlistContextProvider, useWishlist }