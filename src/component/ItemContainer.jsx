import { useState } from "react";
import "../scss/component/ItemContainer.scss";
import { ItemSmall } from "./ItemSmall";
import { Pagination } from "./Pagination"

function ItemContainer({ chairData, getIndex, reveilItem, shoeData }) {

  const [page, setPage] = useState(0);
  const showPerPage = 6;
  const pageVisited = page * showPerPage;
  const totalData = chairData.results.length;
  const handleChange = ({selected}) => {
    setPage(selected);
}


  return (
    <>
      {chairData.results
      .slice(pageVisited, pageVisited + showPerPage)
      .map((item, i) => {
        return (
          <div className="item-container" key={i}>
            <ItemSmall reveilItem={reveilItem} index={i} getIndex={getIndex} key={item} itemData={item} />
          </div>
        );
      })}
      <Pagination show={showPerPage} totalData={totalData} handleChange={handleChange}/>
    </>
  );
}

export default ItemContainer;
