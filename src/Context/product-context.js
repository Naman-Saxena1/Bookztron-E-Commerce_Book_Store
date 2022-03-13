import { useState, useReducer, useContext, createContext} from 'react'
import HarryPotterDeathlyHollows from "../Assets/Images/Book_Covers/harry-potter-and-the-deathly-hallows.jpg"
import Attack_On_Titan from "../Assets/Images/Book_Covers/Attack_On_Titan.jpg"
import The_Fault_In_Our_Stars from "../Assets/Images/Book_Covers/The_Fault_in_Our_Stars.jpg"
import Naruto_Volume1 from "../Assets/Images/Book_Covers/Naruto Volume-1.jpg"
import Naruto_Volume72 from "../Assets/Images/Book_Covers/Naruto Volume-72.jpg"
import DanBrown_DaVinciCode from "../Assets/Images/Book_Covers/Dan Brown- Da Vinci Code.jpg"
import DanBrown_Angels_and_Demons from "../Assets/Images/Book_Covers/Dan Brown-Angels and Demons.jpg"
import MansSearchForMeaning from "../Assets/Images/Book_Covers/Mans_Search_For_Meaning.jpg"
import The_Secret from "../Assets/Images/Book_Covers/The_Secret.jpg"
import Shades_Of_Grey from "../Assets/Images/Book_Covers/50_Shades_Of_Grey.jpg"
import I_too_had_a_love_story from "../Assets/Images/Book_Covers/I_too_had_a_love_story.jpg"
import The_Mystery_Of_The_Blue_Train from "../Assets/Images/Book_Covers/The_Mystery_Of_The_Blue_Train.jpg"
import Death_On_The_Nile from "../Assets/Images/Book_Covers/Death_On_The_Nile.jpg"
import Eloquent_JavaScript from "../Assets/Images/Book_Covers/Eloquent_JavaScript.jpg"
import You_Dont_Know_JS from "../Assets/Images/Book_Covers/You_Dont_Know_JS.jpg"



const ProductsContext = createContext()

let filterOptionsObject = {
    includeOutOfStock        : true,
    onlyFastDeliveryProducts : false,
    minPrice                 : 180,
    maxPrice                 : 1000,
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
                    minPrice                 : 180,
                    maxPrice                 : 1000,
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
                    minPrice                 : 180,
                    maxPrice                 : 1000,
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
                    minPrice                 : 180,
                    maxPrice                 : 1000,
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
                    minPrice                 : 180,
                    maxPrice                 : 1000,
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
                    minPrice                 : 180,
                    maxPrice                 : 1000,
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
                    minPrice                 : 180,
                    maxPrice                 : 1000,
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
                    minPrice                 : 180,
                    maxPrice                 : 1000,
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

let productList = [
    {
        id : 1,
        bookname : "Thus Spoke Zarathustra",
        author   : "Friedrich Nietzche",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : 'https://enztron-dev-branch.netlify.app/Icons-and-Images/Book-Covers/Book_Cover-Thus_Spoke_Zarathustra.jpg',
        imgalt : 'Book - Thus Spoke Zarathustra',
        badgetext : 'Best Seller',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "philosophy",
        rating : 4
    },
    {
        id : 2,
        bookname : "Attack On Titan - Volume 34",
        author   : "Hajime Isayama",
        originalprice : 1000,
        discountedprice : 750,
        discountpercent : 25,
        imgsrc : Attack_On_Titan,
        imgalt : 'Book-Attack On Titan',
        badgetext : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "manga",
        rating : 3
    },
    {
        id : 3,
        bookname : "The Stranger",
        author   : "Albert Camus",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : 'https://enztron-dev-branch.netlify.app/Icons-and-Images/Book-Covers/Book_Cover-The_Stranger.jpg',
        imgalt : 'Book-The Stranger',
        badgetext : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "philosophy",
        rating : 3
    },
    {
        id : 4,
        bookname : "Game Of Thrones - Dance with Dragons",
        author   : "George R. R. Martin",
        originalprice : 1000,
        discountedprice : 750,
        discountpercent : 25,
        imgsrc : 'https://enztron-store-basic-version-dev-branch.netlify.app/Images/HomePage/Game_Of_Thrones-Dance-with-Dragons.jpg',
        imgalt : 'Book-Game Of Thrones Dance with Dragons',
        badgetext : 'Popular',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "fiction",
        rating : 2
    },
    {
        id : 5,
        bookname : "Harry Potter and the Deathly Hollows",
        author   : "J.K. Rowling",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : HarryPotterDeathlyHollows,
        imgalt : 'Book - Harry Potter Deathly Hollows',
        badgetext : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "fiction",
        rating : 4
    },
    {
        id : 6,
        bookname : "The Fault In Our Stars",
        author   : "John Green",
        originalprice : 200,
        discountedprice : 225,
        discountpercent : 25,
        imgsrc : The_Fault_In_Our_Stars,
        imgalt : 'Book-The_Fault_In_Our_Stars',
        badgetext : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "romance",
        rating : 1 
    },
    {
        id : 7,
        bookname : "Top 5 Regrets Of The Dying",
        author   : "Bronnie Ware",
        originalprice : 200,
        discountedprice : 225,
        discountpercent : 25,
        imgsrc : 'https://enztron-dev-branch.netlify.app/Icons-and-Images/Book-Covers/Book_Cover-Top_5_Regrets_Of_The_Dying.jpg',
        imgalt : 'Book-Top_5_Regrets_Of_The_Dying',
        badgetext : 'Trending',
        outOfStock: true,
        fastDeliveryAvailable : false,
        genre: "philosophy",
        rating : 3  
    },
    {
        id : 8,
        bookname : "Naruto - Volume 1",
        author   : "Masashi Kishimoto",
        originalprice : 1000,
        discountedprice : 750,
        discountpercent : 25,
        imgsrc : Naruto_Volume1,
        imgalt : 'Book-Naruto - Volume 1',
        badgetext : 'Popular',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "manga",
        rating : 4 
    },
    {
        id : 9,
        bookname : "Naruto - Volume 72",
        author   : "Masashi Kishimoto",
        originalprice : 1000,
        discountedprice : 750,
        discountpercent : 25,
        imgsrc : Naruto_Volume72,
        imgalt : 'Book-Naruto - Volume 72',
        badgetext : 'Popular',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "manga",
        rating : 5 
    },
    {
        id : 10,
        bookname : "Da Vinci Code",
        author   : "Dan Brown",
        originalprice : 800,
        discountedprice : 600,
        discountpercent : 25,
        imgsrc : DanBrown_DaVinciCode,
        imgalt : 'Book-Dan Brown - Da Vinci Code',
        badgetext : 'Trending',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "fiction",
        rating : 2 
    },
    {
        id : 11,
        bookname : "Angels and Demons",
        author   : "Dan Brown",
        originalprice : 800,
        discountedprice : 600,
        discountpercent : 25,
        imgsrc : DanBrown_Angels_and_Demons,
        imgalt : 'Book-Dan Brown - Angels and Demons',
        badgetext : 'Trending',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "fiction",
        rating : 3  
    },
    {
        id : 12,
        bookname : "The Gulag Archipelago",
        author   : "Aleksandr Solzhenitsyn",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : "https://enztron-dev-branch.netlify.app/Icons-and-Images/Book-Covers/Book_Cover-The_Gulag_Archipelago.jpg",
        imgalt : 'Book - The Gulag Archipelago',
        badgetext : 'Best Seller',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "philosophy",
        rating : 2  
    },
    {
        id : 13,
        bookname : "Murder of Roger Ackroyd",
        author   : "Agatha Christie",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : "https://enztron-temp-deployed-branch.netlify.app/Icons-and-Images/Book-Covers/Book_Cover-The_Murder_Of_Roger_Ackroyd.jpg",
        imgalt : 'Book - Murder of Roger Ackroyd',
        badgetext : 'Thriller',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "thriller",
        rating : 5  
    },
    {
        id : 14,
        bookname : "The Secret",
        author   : "Rhonda Byrne",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : The_Secret,
        imgalt : 'Book - The Secret',
        badgetext : 'Best Seller',
        outOfStock: true,
        fastDeliveryAvailable : true,
        genre: "fiction",
        rating : 4  
    },
    {
        id : 15,
        bookname : "50 Shades Of Grey",
        author   : "E. L. James",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : Shades_Of_Grey,
        imgalt : 'Book - 50 Shades Of Grey',
        badgetext : 'Romance',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "romance",
        rating : 5  
    },
    {
        id : 16,
        bookname : "Man's Search For Meaning",
        author   : "Viktor E. Frankl",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : MansSearchForMeaning,
        imgalt : 'Book - Mans Search For Meaning',
        badgetext : 'Best Seller',
        outOfStock: true,
        fastDeliveryAvailable : false,
        genre: "philosophy",
        rating : 3  
    },
    {
        id : 17,
        bookname : "I too had a love story",
        author   : "Ravinder Singh",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : I_too_had_a_love_story,
        imgalt : 'Book - I too had a love story',
        badgetext : 'Romance',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "romance",
        rating : 3  
    },
    {
        id : 18,
        bookname : "The Mystery Of The Blue Train",
        author   : "Agatha Christie",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : The_Mystery_Of_The_Blue_Train,
        imgalt : 'Book - The Mystery Of The Blue Train',
        badgetext : 'Thriller',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "thriller",
        rating : 4  
    },
    {
        id : 19,
        bookname : "Death On The Nile",
        author   : "Agatha Christie",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : Death_On_The_Nile,
        imgalt : 'Book - Death On The Nile',
        badgetext : 'Thriller',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "thriller",
        rating : 4  
    },
    {
        id : 20,
        bookname : "Eloquent JavaScript",
        author   : "Marijn Haverbeke",
        originalprice : 800,
        discountedprice : 600,
        discountpercent : 25,
        imgsrc : Eloquent_JavaScript,
        imgalt : 'Book-Dan Brown - Eloquent JavaScript',
        badgetext : 'Tech',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "tech",
        rating : 4   
    },
    {
        id : 21,
        bookname : "You Don't Know JS",
        author   : "Kyle Simpson",
        originalprice : 800,
        discountedprice : 600,
        discountpercent : 25,
        imgsrc : You_Dont_Know_JS,
        imgalt : 'Book-Dan Brown - You Dont Know JS',
        badgetext : 'Tech',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "tech",
        rating : 4    
    }
]

function productsOrderFunc(state,action)
{
    switch(action.type)
    {
        case "PRICE_HIGH_TO_LOW" : 
            {
                // for(let i=0; i<state.length-1; i++)
                // {
                //     for(let j=0; j<state.length-1-i; j++)
                //     {
                //         if(state[j].discountedprice < state[j+1].discountedprice && i+1<state.length)
                //         {
                //             let swappedNum = state[j];
                //             state[j] = state[j+1];
                //             state[j+1] = swappedNum
                //         }
                //     }
                // }
                // return [...state]
                return [...state].sort((a,b)=>b.discountedprice-a.discountedprice)
            }

        case "PRICE_LOW_TO_HIGH" : 
            {
                // for(let i=0; i<state.length-1; i++)
                // {
                //     for(let j=0; j<state.length-1-i; j++)
                //     {
                //         if(state[j].discountedprice > state[j+1].discountedprice && i+1<state.length)
                //         {
                //             let swappedNum = state[j];
                //             state[j] = state[j+1];
                //             state[j+1] = swappedNum
                //         }
                //     }
                // }
                // return [...state]
                return [...state].sort((a,b)=>a.discountedprice-b.discountedprice)
            }

        case "UPDATE_LIST_AS_PER_FILTERS" : 
            {
                if(action.payload.includeOutOfStock===true)
                {
                    //All products
                    return (action.payload.onlyFastDeliveryProducts===false) 
                    ? productList.filter(item=>
                        (
                            action.payload.minPrice<=item.discountedprice 
                            && item.discountedprice<action.payload.maxPrice
                            && action.payload[item.genre]
                            && item.rating>=action.payload.minRating
                        )
                      )
                    : productList.filter(item=> 
                        (
                            item.fastDeliveryAvailable===true
                            && (
                                action.payload.minPrice<=item.discountedprice 
                                && item.discountedprice<action.payload.maxPrice
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
                                action.payload.minPrice<=item.discountedprice 
                                && item.discountedprice<action.payload.maxPrice
                               ) 
                            && action.payload[item.genre]
                            && item.rating>=action.payload.minRating
                        ))
                    : productList.filter(item=>
                        (
                            item.outOfStock===false
                            && item.fastDeliveryAvailable===true 
                            && (
                                action.payload.minPrice<=item.discountedprice 
                                && item.discountedprice<action.payload.maxPrice
                               ) 
                            && action.payload[item.genre]
                            && item.rating>=action.payload.minRating
                        ))
                }
            }

        default : return [...state]
    }
}

let ProductsProvider = ({children}) => 
{
    const [ productsAvailableList, dispatchSortedProductsList] = useReducer(productsOrderFunc,productList)
    const [ productFilterOptions, dispatchProductFilterOptions ] = useReducer(updateProductFilters,filterOptionsObject)

    return (
        <ProductsContext.Provider value={{ productsAvailableList, dispatchSortedProductsList, productFilterOptions, dispatchProductFilterOptions}}>
            {children}
        </ProductsContext.Provider>
    )
}

let useProductAvailable = () => useContext(ProductsContext)

export { ProductsProvider, useProductAvailable }