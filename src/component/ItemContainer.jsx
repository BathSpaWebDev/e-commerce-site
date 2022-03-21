import { useState } from "react";
import "../scss/component/ItemContainer.scss";
import { PriceFilter } from "./PriceFilter";
import { ItemSmall } from "./ItemSmall";
import { Pagination } from "./Pagination";

function ItemContainer({ chairData, getIndex, reveilItem, shoeData }) {

  const [page, setPage] = useState(0);
  const showPerPage = 8;
  const pageVisited = page * showPerPage;

  const totalData = chairData.results.length;

  const handleChange = ({selected}) => {
    setPage(selected);
  }

  const lowToHigh = () => {
    const priceLowToHigh = chairData.results.sort((low, high) => {
        return low.price - high.price;
    });
    console.log(priceLowToHigh);
    setPage(priceLowToHigh);
  }
 
  const highToLow = () => {
    const priceHighToLow = chairData.results.sort((low, high) => {
        return high.price - low.price;
    });
    console.log(priceHighToLow);
    setPage(priceHighToLow);
  }
  

  return (
    <>
      <PriceFilter lowToHigh={lowToHigh} highToLow={highToLow}/>
      <div className="itemContainer-box">
      {chairData.results
      .slice(pageVisited, pageVisited + showPerPage)
      .map((item, i) => {
        return (
          <div className="item-container" key={i}>
            <ItemSmall reveilItem={reveilItem} index={i} getIndex={getIndex} key={item} itemData={item} />
          </div>
        );
      })}
      </div>
      <Pagination show={showPerPage} totalData={totalData} handleChange={handleChange}/>
    </>
  );
}

export default ItemContainer;
