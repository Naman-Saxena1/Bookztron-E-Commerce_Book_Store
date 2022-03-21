import { useState, useContext, createContext } from 'react'

const ToastContext = createContext()

let ToastContextProvider = ({children}) => {
  const [toastList, setToastList] = useState([])

  let toastProperties = null;

  const showToast = (typeOfToast, toastTitle, toastDescription) =>
  {
    switch(typeOfToast)
    {
      case "success" : toastProperties = {
        id : toastList.length+1,
        title : toastTitle,
        description : toastDescription,
        backgroundColor : 'var(--onlinestatus-or-success)'
      }
      break;
      case "error" : toastProperties = {
        id : toastList.length+1,
        title : toastTitle,
        description : toastDescription,
        backgroundColor : 'var(--red-color)'
      }
      break;
      case "warning" : toastProperties = {
        id : toastList.length+1,
        title : toastTitle,
        description : toastDescription,
        backgroundColor : 'var(--awaystatus-or-warning)'
      }
      break;
      case "info" : toastProperties = {
        id : toastList.length+1,
        title : toastTitle,
        description : toastDescription,
        backgroundColor : 'var(--sky-blue)'
      }
      break;
      default : toastProperties = {}
    }
    
    setToastList(toastList=>[...toastList, toastProperties])
  }

  return (
      <ToastContext.Provider value={{toastList, setToastList, showToast}}>
          {children}
      </ToastContext.Provider>
  )
}

let useToast = () => useContext(ToastContext)

export { ToastContextProvider, useToast }