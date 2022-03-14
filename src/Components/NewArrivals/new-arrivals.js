import HarryPotterDeathlyHollows from "../../Assets/Images/Book_Covers/harry-potter-and-the-deathly-hallows.jpg"
import Attack_On_Titan from "../../Assets/Images/Book_Covers/Attack_On_Titan.jpg"
import The_Fault_In_Our_Stars from "../../Assets/Images/Book_Covers/The_Fault_in_Our_Stars.jpg"

let newArrivalsProductList = [
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
        rating : 4.0, 
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
        rating : 1.0, 
        description : "The Fault in Our Stars is a novel by John Green. It is his fourth solo novel, and sixth novel overall. It was published on January 10, 2012."  
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
        rating : 3.0, 
        description : "The Stranger, also published in English as The Outsider, is a 1942 novella by French author Albert Camus. Its theme and outlook are often cited as examples of Camus' philosophy, absurdism, coupled with existentialism; though Camus personally rejected the latter label." 
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
        rating : 3.0,
        description: "Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives inside cities surrounded by three enormous walls that protect them from the gigantic man-eating humanoids referred to as Titans" 
    }
]

export { newArrivalsProductList }