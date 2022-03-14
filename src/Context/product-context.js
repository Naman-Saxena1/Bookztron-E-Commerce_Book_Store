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
        bookName : "Thus Spoke Zarathustra",
        author   : "Friedrich Nietzche",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : 'https://enztron-dev-branch.netlify.app/Icons-and-Images/Book-Covers/Book_Cover-Thus_Spoke_Zarathustra.jpg',
        imgAlt : 'Book - Thus Spoke Zarathustra',
        badgeText : 'Best Seller',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "philosophy",
        rating : 4,
        description: "Thus Spoke Zarathustra: A Book for All and None, also translated as Thus Spake Zarathustra, is a work of philosophical fiction written by German philosopher Friedrich Nietzsche between 1883 and 1885."
    },
    {
        id : 2,
        bookName : "Attack On Titan - Volume 34",
        author   : "Hajime Isayama",
        originalPrice : 1000,
        discountedPrice : 750,
        discountPercent : 25,
        imgSrc : Attack_On_Titan,
        imgAlt : 'Book-Attack On Titan',
        badgeText : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "manga",
        rating : 3,
        description: "Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives inside cities surrounded by three enormous walls that protect them from the gigantic man-eating humanoids referred to as Titans" 
    },
    {
        id : 3,
        bookName : "The Stranger",
        author   : "Albert Camus",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : 'https://enztron-dev-branch.netlify.app/Icons-and-Images/Book-Covers/Book_Cover-The_Stranger.jpg',
        imgAlt : 'Book-The Stranger',
        badgeText : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "philosophy",
        rating : 3, 
        description : "The Stranger, also published in English as The Outsider, is a 1942 novella by French author Albert Camus. Its theme and outlook are often cited as examples of Camus' philosophy, absurdism, coupled with existentialism; though Camus personally rejected the latter label." 
    },
    {
        id : 4,
        bookName : "Game Of Thrones - Dance with Dragons",
        author   : "George R. R. Martin",
        originalPrice : 1000,
        discountedPrice : 750,
        discountPercent : 25,
        imgSrc : 'https://enztron-store-basic-version-dev-branch.netlify.app/Images/HomePage/Game_Of_Thrones-Dance-with-Dragons.jpg',
        imgAlt : 'Book-Game Of Thrones Dance with Dragons',
        badgeText : 'Popular',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "fiction",
        rating : 2,
        description: "A Dance with Dragons is the fifth novel of seven planned in the epic fantasy series A Song of Ice and Fire by American author George R. R. Martin. In some areas, the paperback edition was published in two parts, titled Dreams and Dust and After the Feast."
    },
    {
        id : 5,
        bookName : "Harry Potter and the Deathly Hollows",
        author   : "J.K. Rowling",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : HarryPotterDeathlyHollows,
        imgAlt : 'Book - Harry Potter Deathly Hollows',
        badgeText : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "fiction",
        rating : 4, 
        description : "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the main Harry Potter series. It was released on 14 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books."
    },
    {
        id : 6,
        bookName : "The Fault In Our Stars",
        author   : "John Green",
        originalPrice : 200,
        discountedPrice : 225,
        discountPercent : 25,
        imgSrc : The_Fault_In_Our_Stars,
        imgAlt : 'Book-The_Fault_In_Our_Stars',
        badgeText : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "romance",
        rating : 1, 
        description : "The Fault in Our Stars is a novel by John Green. It is his fourth solo novel, and sixth novel overall. It was published on January 10, 2012."  
    },
    {
        id : 7,
        bookName : "Top 5 Regrets Of The Dying",
        author   : "Bronnie Ware",
        originalPrice : 200,
        discountedPrice : 225,
        discountPercent : 25,
        imgSrc : 'https://enztron-dev-branch.netlify.app/Icons-and-Images/Book-Covers/Book_Cover-Top_5_Regrets_Of_The_Dying.jpg',
        imgAlt : 'Book-Top_5_Regrets_Of_The_Dying',
        badgeText : 'Trending',
        outOfStock: true,
        fastDeliveryAvailable : false,
        genre: "philosophy",
        rating : 3,
        description: "The Top Five Regrets of the Dying - A Life Transformed by the Dearly Departing is a 2012 book by Bronnie Ware inspired by her time as a palliative carer."  
    },
    {
        id : 8,
        bookName : "Naruto - Volume 1",
        author   : "Masashi Kishimoto",
        originalPrice : 1000,
        discountedPrice : 750,
        discountPercent : 25,
        imgSrc : Naruto_Volume1,
        imgAlt : 'Book-Naruto - Volume 1',
        badgeText : 'Popular',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "manga",
        rating : 4,
        description: "The world’s most popular ninja comic! Naruto is a young shinobi with an incorrigible knack for mischief. He’s got a wild sense of humor, but Naruto is completely serious about his mission to be the world’s greatest ninja!" 
    },
    {
        id : 9,
        bookName : "Naruto - Volume 72",
        author   : "Masashi Kishimoto",
        originalPrice : 1000,
        discountedPrice : 750,
        discountPercent : 25,
        imgSrc : Naruto_Volume72,
        imgAlt : 'Book-Naruto - Volume 72',
        badgeText : 'Popular',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "manga",
        rating : 5,
        description: "The Naruto series was wildly popular and ran for 15 years. It was made into anime series for television and also several movies. Volume 72 was the grand finale for the series. Will Naruto finally achieve all that he has strived for all his life? Will his actions bring peace to the world at long last?" 
    },
    {
        id : 10,
        bookName : "Da Vinci Code",
        author   : "Dan Brown",
        originalPrice : 800,
        discountedPrice : 600,
        discountPercent : 25,
        imgSrc : DanBrown_DaVinciCode,
        imgAlt : 'Book-Dan Brown - Da Vinci Code',
        badgeText : 'Trending',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "fiction",
        rating : 2,
        description: "The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown's second novel to include the character Robert Langdon: the first was his 2000 novel Angels & Demons." 
    },
    {
        id : 11,
        bookName : "Angels and Demons",
        author   : "Dan Brown",
        originalPrice : 800,
        discountedPrice : 600,
        discountPercent : 25,
        imgSrc : DanBrown_Angels_and_Demons,
        imgAlt : 'Book-Dan Brown - Angels and Demons',
        badgeText : 'Trending',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "fiction",
        rating : 3,
        description: "Angels & Demons is a 2000 bestselling mystery-thriller novel written by American author Dan Brown and published by Pocket Books and then by Corgi Books. The novel introduces the character Robert Langdon, who recurs as the protagonist of Brown's subsequent novels."  
    },
    {
        id : 12,
        bookName : "The Gulag Archipelago",
        author   : "Aleksandr Solzhenitsyn",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : "https://enztron-dev-branch.netlify.app/Icons-and-Images/Book-Covers/Book_Cover-The_Gulag_Archipelago.jpg",
        imgAlt : 'Book - The Gulag Archipelago',
        badgeText : 'Best Seller',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "philosophy",
        rating : 4,
        description: "The Gulag Archipelago: An Experiment in Literary Investigation is a three-volume non-fiction text written between 1958 and 1968 by Russian writer and Soviet dissident Aleksandr Solzhenitsyn. It was first published in 1973, and translated into English and French the following year."   
    },
    {
        id : 13,
        bookName : "Murder of Roger Ackroyd",
        author   : "Agatha Christie",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : "https://enztron-temp-deployed-branch.netlify.app/Icons-and-Images/Book-Covers/Book_Cover-The_Murder_Of_Roger_Ackroyd.jpg",
        imgAlt : 'Book - Murder of Roger Ackroyd',
        badgeText : 'Thriller',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "thriller",
        rating : 5,
        description: "The Murder of Roger Ackroyd is a work of detective fiction by British writer Agatha Christie, first published in June 1926 in the United Kingdom by William Collins, Sons and in the United States by Dodd, Mead and Company. It is the third novel to feature Hercule Poirot as the lead detective"  
    },
    {
        id : 14,
        bookName : "The Secret",
        author   : "Rhonda Byrne",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : The_Secret,
        imgAlt : 'Book - The Secret',
        badgeText : 'Best Seller',
        outOfStock: true,
        fastDeliveryAvailable : true,
        genre: "fiction",
        rating : 4,
        description: "The Secret is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name. It is based on the belief of the pseudoscientific law of attraction, which claims that thoughts can change a person's life directly. The book alleges energy as assurance of its effectiveness."  
    },
    {
        id : 15,
        bookName : "50 Shades Of Grey",
        author   : "E. L. James",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : Shades_Of_Grey,
        imgAlt : 'Book - 50 Shades Of Grey',
        badgeText : 'Romance',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "romance",
        rating : 5,
        description: "Fifty Shades of Grey is a 2011 erotic romance novel by British author E. L. James. It became the first instalment in the Fifty Shades novel series that follows the deepening relationship between a college graduate, Anastasia Steele, and a young business magnate, Christian Grey."  
    },
    {
        id : 16,
        bookName : "Man's Search For Meaning",
        author   : "Viktor E. Frankl",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : MansSearchForMeaning,
        imgAlt : 'Book - Mans Search For Meaning',
        badgeText : 'Best Seller',
        outOfStock: true,
        fastDeliveryAvailable : false,
        genre: "philosophy",
        rating : 3,
        description: "Man's Search for Meaning is a 1946 book by Viktor Frankl chronicling his experiences as a prisoner in Nazi concentration camps during World War II, and describing his psychotherapeutic method, which involved identifying a purpose in life to feel positive about, and then immersively imagining that outcome."  
    },
    {
        id : 17,
        bookName : "I too had a love story",
        author   : "Ravinder Singh",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : I_too_had_a_love_story,
        imgAlt : 'Book - I too had a love story',
        badgeText : 'Romance',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "romance",
        rating : 3,
        description: "I Too Had a Love Story is an English autobiographical novel written by Ravinder Singh. This was the debut novel of the author and was first published in 2008 by Srishti Publishers, in 2012 it was republished by Penguin India."  
    },
    {
        id : 18,
        bookName : "The Mystery Of The Blue Train",
        author   : "Agatha Christie",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : The_Mystery_Of_The_Blue_Train,
        imgAlt : 'Book - The Mystery Of The Blue Train',
        badgeText : 'Thriller',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "thriller",
        rating : 4,
        description: "The Mystery of the Blue Train is a work of detective fiction by British writer Agatha Christie, first published in the United Kingdom by William Collins & Sons on 29 March 1928 and in the United States by Dodd, Mead and Company later in the same year."  
    },
    {
        id : 19,
        bookName : "Death On The Nile",
        author   : "Agatha Christie",
        originalPrice : 400,
        discountedPrice : 300,
        discountPercent : 25,
        imgSrc : Death_On_The_Nile,
        imgAlt : 'Book - Death On The Nile',
        badgeText : 'Thriller',
        outOfStock: false,
        fastDeliveryAvailable : false,
        genre: "thriller",
        rating : 4,
        description: "Death on the Nile is a work of detective fiction by British writer Agatha Christie, published in the UK by the Collins Crime Club on 1 November 1937 and in the US by Dodd, Mead and Company the following year. The UK edition retailed at seven shillings and sixpence and the US edition at $2.00."  
    },
    {
        id : 20,
        bookName : "Eloquent JavaScript",
        author   : "Marijn Haverbeke",
        originalPrice : 800,
        discountedPrice : 600,
        discountPercent : 25,
        imgSrc : Eloquent_JavaScript,
        imgAlt : 'Book-Dan Brown - Eloquent JavaScript',
        badgeText : 'Tech',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "tech",
        rating : 4,
        description: "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."   
    },
    {
        id : 21,
        bookName : "You Don't Know JS",
        author   : "Kyle Simpson",
        originalPrice : 800,
        discountedPrice : 600,
        discountPercent : 25,
        imgSrc : You_Dont_Know_JS,
        imgAlt : 'Book-Dan Brown - You Dont Know JS',
        badgeText : 'Tech',
        outOfStock: false,
        fastDeliveryAvailable : true,
        genre: "tech",
        rating : 4,
        description: "Are you looking for a better way to deeply learn the fundamentals of JavaScript? Look no further!The foundation of all programs is the organization of its variables and functions into different nested scopes. This is a series of books diving deep into the core mechanisms of the JavaScript language."    
    }
]

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