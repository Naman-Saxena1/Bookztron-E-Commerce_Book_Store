import { useState, useContext, createContext, useEffect} from 'react'
import axios from 'axios'
import newlyAddedBooks from '../Assets/Data/newly_added_books.json';

const NewArrivalsContext = createContext()

let NewArrivalsProvider = ({children}) => 
{
    const [ newArrivalsProductList, setNewArrivalsProductList ] = useState([])

    useEffect(() => {
      (async () => {
        try {
          const productsAvailableData = await axios.get('https://bookztron-server.vercel.app/api/home/newarrivals');
          let fetchedNewArrivals = productsAvailableData.data.newArrivalList || [];
          
          const localNewReleases = newlyAddedBooks.filter(book => book.newRelease === true);
          
          // Combine, ensuring locally added ones are prominent or as per desired logic
          // For now, let's add them to the fetched list.
          // A more robust approach might involve checking for duplicates if _ids could clash.
          // For this task, simple concatenation is used as per instructions.
          const combinedNewArrivals = [...fetchedNewArrivals, ...localNewReleases];
          
          setNewArrivalsProductList(combinedNewArrivals);
        } catch (error) {
          console.log("Error fetching new arrivals: ", error);
          // If API fails, still load local new releases
          const localNewReleases = newlyAddedBooks.filter(book => book.newRelease === true);
          setNewArrivalsProductList(localNewReleases);
        }
      })();
    }, [setNewArrivalsProductList]);

    return (
        <NewArrivalsContext.Provider value={{
            newArrivalsProductList, 
            setNewArrivalsProductList
        }}>
            {children}
        </NewArrivalsContext.Provider>
    )
}

let useNewArrivals = () => useContext(NewArrivalsContext)

export { NewArrivalsProvider, useNewArrivals }