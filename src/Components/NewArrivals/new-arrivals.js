import HarryPotterDeathlyHollows from "../../Assets/Images/Book_Covers/harry-potter-and-the-deathly-hallows.jpg"
import Attack_On_Titan from "../../Assets/Images/Book_Covers/Attack_On_Titan.jpg"
import The_Fault_In_Our_Stars from "../../Assets/Images/Book_Covers/The_Fault_in_Our_Stars.jpg"

let newArrivalsProductList = [
    {
        id : 1,
        bookname : "Harry Potter and the Deathly Hollows",
        author   : "J.K. Rowling",
        originalprice : 400,
        discountedprice : 300,
        discountpercent : 25,
        imgsrc : HarryPotterDeathlyHollows,
        imgalt : 'Book - Harry Potter Deathly Hollows',
        badgetext : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : false
    },
    {
        id : 2,
        bookname : "The Fault In Our Stars",
        author   : "John Green",
        originalprice : 200,
        discountedprice : 225,
        discountpercent : 25,
        imgsrc : The_Fault_In_Our_Stars,
        imgalt : 'Book-The_Fault_In_Our_Stars',
        badgetext : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : false 
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
        fastDeliveryAvailable : true
    },
    {
        id : 4,
        bookname : "Attack On Titan - Volume 34",
        author   : "Hajime Isayama",
        originalprice : 1000,
        discountedprice : 750,
        discountpercent : 25,
        imgsrc : Attack_On_Titan,
        imgalt : 'Book-Attack On Titan',
        badgetext : 'New Arrival',
        outOfStock: false,
        fastDeliveryAvailable : true 
    }
]

export { newArrivalsProductList }