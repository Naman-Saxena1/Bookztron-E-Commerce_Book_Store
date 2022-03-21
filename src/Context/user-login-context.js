import { useState, useContext, createContext } from "react"

const UserLoginContext = createContext()

let UserLoginContextProvider = ({children}) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    
    return (
        <UserLoginContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
            {children}
        </UserLoginContext.Provider>
    )
}

const useUserLogin = () => useContext(UserLoginContext)

export { UserLoginContextProvider, useUserLogin }