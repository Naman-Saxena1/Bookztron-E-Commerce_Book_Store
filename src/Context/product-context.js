import { useEffect, useReducer, useContext, createContext} from 'react'
import axios from 'axios'

const ProductsContext = createContext()

let filterOptionsObject = {
    includeOutOfStock        : true,
    onlyFastDeliveryProducts : false,
    minPrice                 : 0,
    maxPrice                 : 1200,
    fiction                  : true,
    thriller                 : true,
    tech                     : true,
    philosophy               : true,
    romance                  : true,
    manga                    : true,
    minRating                : 1
}

function updateProductFilters(state, action)
{
    switch(action.type)
    {
        case "UPDATE_OUTOFSTOCK_FILTER" : 
            {
                return {...state, includeOutOfStock : !(state.includeOutOfStock)}
            }

        case "UPDATE_FASTDELIVERY_FILTER" : 
            {
                return {...state, onlyFastDeliveryProducts : !(state.onlyFastDeliveryProducts)}
            }
        
        case "UPDATE_MIN_PRICE_RANGE_FILTER" :
            {
                return {...state, minPrice : action.minPrice}
            }
        
        case "UPDATE_MAX_PRICE_RANGE_FILTER" :
            {
                return {...state, maxPrice : action.maxPrice}
            }
        case "UPDATE_FICTION_FILTER":
            {
                return {...state, fiction : !(state.fiction) }
            }
        case "UPDATE_THRILLER_FILTER":
            {
                return {...state, thriller : !(state.thriller) }
            }
        case "UPDATE_TECH_FILTER":
            {
                return {...state, tech : !(state.tech) }
            }
        case "UPDATE_PHILOSOPHY_FILTER":
            {
                return {...state, philosophy : !(state.philosophy) }
            }
        case "UPDATE_ROMANCE_FILTER":
            {
                return {...state, romance : !(state.romance) }
            }
        case "UPDATE_MANGA_FILTER":
            {
                return {...state, manga : !(state.manga) }
            }
        case "UPDATE_MINIMUM_RATING_FILTER":
            {
                return {...state, minRating : action.minRating}
            }
        case "SELECT_ONLY_FICTION_FILTER":
            {
                return {
                    ...state,
                    includeOutOfStock        : true,
                    onlyFastDeliveryProducts : false,
                    minPrice                 : 0,
                    maxPrice                 : 1200,
                    fiction                  : true,
                    thriller                 : false,
                    tech                     : false,
                    philosophy               : false,
                    romance                  : false,
                    manga                    : false,
                    minRating                : 1
                }
            }
        case "SELECT_ONLY_THRILLER_FILTER":
            {
                return {
                    ...state,
                    includeOutOfStock        : true,
                    onlyFastDeliveryProducts : false,
                    minPrice                 : 0,
                    maxPrice                 : 1200,
                    fiction                  : false,
                    thriller                 : true,
                    tech                     : false,
                    philosophy               : false,
                    romance                  : false,
                    manga                    : false,
                    minRating                : 1
                }  
            }
        case "SELECT_ONLY_TECH_FILTER":
            {
                return {
                    ...state,
                    includeOutOfStock        : true,
                    onlyFastDeliveryProducts : false,
                    minPrice                 : 0,
                    maxPrice                 : 1200,
                    fiction                  : false,
                    thriller                 : false,
                    tech                     : true,
                    philosophy               : false,
                    romance                  : false,
                    manga                    : false,
                    minRating                : 1
                }  
            }
        case "SELECT_ONLY_PHILOSOPHY_FILTER" :
            {
                return {
                    ...state,
                    includeOutOfStock        : true,
                    onlyFastDeliveryProducts : false,
                    minPrice                 : 0,
                    maxPrice                 : 1200,
                    fiction                  : false,
                    thriller                 : false,
                    tech                     : false,
                    philosophy               : true,
                    romance                  : false,
                    manga                    : false,
                    minRating                : 1
                }  
            }
        case "SELECT_ONLY_ROMANCE_FILTER" :
            {
                return {
                    ...state,
                    includeOutOfStock        : true,
                    onlyFastDeliveryProducts : false,
                    minPrice                 : 0,
                    maxPrice                 : 1200,
                    fiction                  : false,
                    thriller                 : false,
                    tech                     : false,
                    philosophy               : false,
                    romance                  : true,
                    manga                    : false,
                    minRating                : 1
                }  
            }
        case "SELECT_ONLY_MANGA_FILTER" :
            {
                return {
                    ...state,
                    includeOutOfStock        : true,
                    onlyFastDeliveryProducts : false,
                    minPrice                 : 0,
                    maxPrice                 : 1200,
                    fiction                  : false,
                    thriller                 : false,
                    tech                     : false,
                    philosophy               : false,
                    romance                  : false,
                    manga                    : true,
                    minRating                : 1
                }  
            }
        case "RESET_DEFAULT_FILTERS":
            {
                return {
                    ...state,
                    includeOutOfStock        : true,
                    onlyFastDeliveryProducts : false,
                    minPrice                 : 0,
                    maxPrice                 : 1200,
                    fiction                  : true,
                    thriller                 : true,
                    tech                     : true,
                    philosophy               : true,
                    romance                  : true,
                    manga                    : true,
                    minRating                : 1
                }
            }
        default : return {...state}
    }
}

let productList = []

function productsOrderFunc(state,action)
{
    switch(action.type)
    {
        case "PRICE_HIGH_TO_LOW" : 
            {
                return [...state].sort((a,b)=>b.discountedPrice-a.discountedPrice)
            }

        case "PRICE_LOW_TO_HIGH" : 
            {
                return [...state].sort((a,b)=>a.discountedPrice-b.discountedPrice)
            }

        case "UPDATE_LIST_AS_PER_FILTERS" : 
            {
                if(action.payload.includeOutOfStock===true)
                {
                    //All products
                    return (action.payload.onlyFastDeliveryProducts===false) 
                    ? productList.filter(item=>
                        (
                            action.payload.minPrice<=item.discountedPrice 
                            && item.discountedPrice<action.payload.maxPrice
                            && action.payload[item.genre]
                            && item.rating>=action.payload.minRating
                        )
                      )
                    : productList.filter(item=> 
                        (
                            item.fastDeliveryAvailable===true
                            && (
                                action.payload.minPrice<=item.discountedPrice 
                                && item.discountedPrice<action.payload.maxPrice
                               ) 
                            && action.payload[item.genre]
                            && item.rating>=action.payload.minRating
                        ))
                }
                else
                {
                    //Only available products
                    return (action.payload.onlyFastDeliveryProducts===false) 
                    ? productList.filter(item=>
                        (
                            item.outOfStock===false 
                            && (
                                action.payload.minPrice<=item.discountedPrice 
                                && item.discountedPrice<action.payload.maxPrice
                               ) 
                            && action.payload[item.genre]
                            && item.rating>=action.payload.minRating
                        ))
                    : productList.filter(item=>
                        (
                            item.outOfStock===false
                            && item.fastDeliveryAvailable===true 
                            && (
                                action.payload.minPrice<=item.discountedPrice 
                                && item.discountedPrice<action.payload.maxPrice
                               ) 
                            && action.payload[item.genre]
                            && item.rating>=action.payload.minRating
                        ))
                }
            }

        case "ADD_ITEMS_TO_PRODUCTS_AVAILABLE_LIST":
            {
                return [...action.payload]
            }

        default : return [...state]
    }
}

let ProductsProvider = ({children}) => 
{
    const [ productsAvailableList, dispatchSortedProductsList] = useReducer(productsOrderFunc,productList)
    const [ productFilterOptions, dispatchProductFilterOptions ] = useReducer(updateProductFilters,filterOptionsObject)

    useEffect(() => {
      try {
        (async () => {
            const productsAvailableData = await axios.get('https://bookztron-server.vercel.app/api/home/products')
            productList = [...productsAvailableData.data.productsList]
        }) ()
      }
      catch(error) {
        console.log("Error : ", error)
      }
    },[])

    return (
        <ProductsContext.Provider value={{ productsAvailableList, dispatchSortedProductsList, productFilterOptions, dispatchProductFilterOptions}}>
            {children}
        </ProductsContext.Provider>
    )
}

let useProductAvailable = () => useContext(ProductsContext)

export { ProductsProvider, useProductAvailable}