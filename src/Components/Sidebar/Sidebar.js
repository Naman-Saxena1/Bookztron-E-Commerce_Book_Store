import React, { useState, useEffect, useRef } from "react";
import './Sidebar.css'
import { useProductAvailable } from "../../Context/product-context"
import { useGenre } from "../../Context/genre-context";

function Sidebar() {
  const {
  productsAvailableList,
  dispatchSortedProductsList,
  productFilterOptions,
  dispatchProductFilterOptions
  } = useProductAvailable()

  const {
    fictionCategoryCheckbox,
    setFictionCategoryCheckbox,
    thrillerCategoryCheckbox, 
    setThrillerCategoryCheckbox,
    techCategoryCheckbox, 
    setTechCategoryCheckbox,
    philosophyCategoryCheckbox, 
    setPhilosophyCategoryCheckbox,
    romanceCategoryCheckbox, 
    setRomanceCategoryCheckbox,
    mangaCategoryCheckbox, 
    setMangaCategoryCheckbox, 
  } = useGenre()

  const ratingRadioBtnRef = useRef(null)

  const [sortPriceLowToHigh, setSortPriceLowToHigh ] = useState(false)
  const [sortPriceHighToLow, setSortPriceHighToLow ] = useState(false)
  
  const [includeOutOfStockCheckbox, setIncludeOutOfStockCheckbox] = useState(true);
  const [fastDeliveryOnlyCheckbox, setFastDeliveryOnlyCheckbox] = useState(false);

  const [minPriceRange, setMinPriceRange] = useState(0);
  const [maxPriceRange, setMaxPriceRange] = useState(1200);


  useEffect(()=>{
    dispatchSortedProductsList({type:"UPDATE_LIST_AS_PER_FILTERS",payload:productFilterOptions})
    if(sortPriceLowToHigh){ setSortPriceLowToHigh(true); setSortPriceHighToLow(false); dispatchSortedProductsList({type:"PRICE_LOW_TO_HIGH"}) }
    if(sortPriceHighToLow){ setSortPriceLowToHigh(false); setSortPriceHighToLow(true); dispatchSortedProductsList({type:"PRICE_HIGH_TO_LOW"}) }
  },[productFilterOptions, dispatchSortedProductsList])

  function clearFilters()
  {
    setMinPriceRange(0)
    setMaxPriceRange(1200)
    setFictionCategoryCheckbox(true)
    setThrillerCategoryCheckbox(true)
    setTechCategoryCheckbox(true)
    setPhilosophyCategoryCheckbox(true)
    setRomanceCategoryCheckbox(true)
    setMangaCategoryCheckbox(true)
    ratingRadioBtnRef.current.click()
    setSortPriceLowToHigh(false) 
    setSortPriceHighToLow(false)
    setIncludeOutOfStockCheckbox(true)
    setFastDeliveryOnlyCheckbox(false)
    dispatchProductFilterOptions({type:"RESET_DEFAULT_FILTERS"})
  }

  return (
    <aside className="product-page-sidebar">
      <div className="filter-clear-options">
        <p className="sidebar-filter-option">Filters</p>
        <p onClick={clearFilters}className="sidebar-clear-option text-underline">Clear</p>
      </div>

      <div className="price-slider">
        <p>Price</p>

        <div className="price-input">
          <div className="field">
            <span>Min</span>
            <input
              onChange={(e) => {
                setMinPriceRange(e.target.value); 
                if(maxPriceRange-e.target.value>100)
                {
                  dispatchProductFilterOptions({type:"UPDATE_MIN_PRICE_RANGE_FILTER",minPrice:e.target.value})
                }
              }}
              type="number"
              className="input-min"
              value={minPriceRange}
              max="10000"
            />
          </div>
          <div className="separator">-</div>
          <div className="field">
            <span>Max</span>
            <input
              onChange={(e) => {
                setMaxPriceRange(e.target.value);
                if(e.target.value-minPriceRange>100)
                {
                  setMaxPriceRange(e.target.value); 
                  dispatchProductFilterOptions({type:"UPDATE_MAX_PRICE_RANGE_FILTER",maxPrice:e.target.value})
                }
              }}
              type="number"
              className="input-max"
              value={maxPriceRange}
              max="10000"
            />
          </div>
        </div>

        <div className="slider">
          <div
            className="progress"
            style={{
              left: (minPriceRange / 1200) * 100 + "%",
              right: 100 - (maxPriceRange / 1200) * 100 + "%",
            }}
          ></div>
        </div>

        <div className="range-input">
          <input
            onChange={(e) => {
              if(maxPriceRange-e.target.value>100)
              {
                setMinPriceRange(e.target.value); 
                dispatchProductFilterOptions({type:"UPDATE_MIN_PRICE_RANGE_FILTER",minPrice:e.target.value})
              }
            }}
            type="range"
            className="range-min"
            min="0"
            max="1200"
            value={minPriceRange}
            step="50"
          />
          <input
            onChange={(e) => {
              if(e.target.value-minPriceRange>100)
              {
                setMaxPriceRange(e.target.value); 
                dispatchProductFilterOptions({type:"UPDATE_MAX_PRICE_RANGE_FILTER",maxPrice:e.target.value})
              }
            }}
            type="range"
            className="range-max"
            min="0"
            max="1200"
            value={maxPriceRange}
            step="50"
          />
        </div>
      </div>

      <div className="product-category">
        <p>Category</p>
        <div className="checkbox-item">
          <input
            onChange={() =>{ setFictionCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_FICTION_FILTER"}) }}
            id="fiction-checkbox"
            type="checkbox"
            checked={fictionCategoryCheckbox}
          />
          <label htmlFor="fiction-checkbox">Fiction</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setThrillerCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_THRILLER_FILTER"}) } }
            id="thriller-checkbox"
            type="checkbox"
            checked={thrillerCategoryCheckbox}
          />
          <label htmlFor="thriller-checkbox">Thriller</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setTechCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_TECH_FILTER"}) } }
            id="tech-checkbox"
            type="checkbox"
            checked={techCategoryCheckbox}
          />
          <label htmlFor="tech-checkbox">Tech</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setPhilosophyCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_PHILOSOPHY_FILTER"}) }}
            id="philosophy-checkbox"
            type="checkbox"
            checked={philosophyCategoryCheckbox}
          />
          <label htmlFor="philosophy-checkbox">Philosophy</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setRomanceCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_ROMANCE_FILTER"}) } }
            id="romance-checkbox"
            type="checkbox"
            checked={romanceCategoryCheckbox}
          />
          <label htmlFor="romance-checkbox">Romance</label>
        </div>

        <div className="checkbox-item">
          <input
            onChange={() => {setMangaCategoryCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_MANGA_FILTER"}) } }
            id="manga-checkbox"
            type="checkbox"
            checked={mangaCategoryCheckbox}
          />
          <label htmlFor="manga-checkbox">Manga</label>
        </div>
      </div>

      <div className="product-page-rating-radio">
        <p>Rating</p>

        <div className="rating-items">
          <input
            onChange={() => dispatchProductFilterOptions({type:"UPDATE_MINIMUM_RATING_FILTER",minRating : 4})   }
            type="radio"
            id="4-stars-or-above"
            name="rating"
            value="4-stars-or-above"
          />
          <label htmlFor="4-stars-or-above">4 stars or above</label>
        </div>

        <div className="rating-items">
          <input
            onChange={() => dispatchProductFilterOptions({type:"UPDATE_MINIMUM_RATING_FILTER",minRating : 3})   }
            type="radio"
            id="3-stars-or-above"
            name="rating"
            value="3-stars-or-above"
          />
          <label htmlFor="3-stars-or-above">3 stars or above</label>
        </div>

        <div className="rating-items">
          <input
            onChange={() => dispatchProductFilterOptions({type:"UPDATE_MINIMUM_RATING_FILTER",minRating : 2})   }
            type="radio"
            id="2-stars-or-above"
            name="rating"
            value="2-stars-or-above"
          />
          <label htmlFor="2-stars-or-above">2 stars or above</label>
        </div>

        <div className="rating-items">
          <input
            onChange={() => dispatchProductFilterOptions({type:"UPDATE_MINIMUM_RATING_FILTER",minRating : 1})   }
            type="radio"
            id="1-stars-or-above"
            name="rating"
            value="1-stars-or-above"
            defaultChecked
            ref={ratingRadioBtnRef}
          />
          <label htmlFor="1-stars-or-above">1 stars or above</label>
        </div>
      </div>

      <div className="product-page-sortby-radio">
        <p>Sort By</p>

        <div className="sortby-items">
          <input
            onChange={() => { setSortPriceLowToHigh(true); setSortPriceHighToLow(false); dispatchSortedProductsList({type:"PRICE_LOW_TO_HIGH"}) } }
            type="radio"
            id="price-low-to-high"
            name="sort-by"
            value="price-low-to-high"
            checked={sortPriceLowToHigh}
          />
          <label htmlFor="price-low-to-high">Price - Low to High</label>
        </div>

        <div className="sortby-items">
          <input
            onChange={() => { setSortPriceLowToHigh(false); setSortPriceHighToLow(true); dispatchSortedProductsList({type:"PRICE_HIGH_TO_LOW"}) } }
            type="radio"
            id="price-high-to-low"
            name="sort-by"
            value="price-high-to-low"
            checked={sortPriceHighToLow}
          />
          <label htmlFor="price-high-to-low">Price - High to Low</label>
        </div>
      </div>

      <div className="additional-filters">
        <p>Additional filters</p>

        <div>
          <input
            id="out-of-stock-checkbox"
            value=""
            onChange={(e) => {setIncludeOutOfStockCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_OUTOFSTOCK_FILTER"}) }  }
            type="checkbox"
            checked={includeOutOfStockCheckbox}
          />
          <label htmlFor="out-of-stock-checkbox">
            Include out of stock products
          </label>
        </div>

        <div>
          <input
            id="fast-delivery-available-checkbox"
            value=""
            onChange={(e) => {setFastDeliveryOnlyCheckbox(prevState=>!prevState); dispatchProductFilterOptions({type:"UPDATE_FASTDELIVERY_FILTER"})} }
            type="checkbox"
            checked={fastDeliveryOnlyCheckbox}
          />
          <label htmlFor="fast-delivery-available-checkbox">
            Fast delivery only
          </label>
        </div>
      </div>
    </aside>
  );
}

export { Sidebar };
