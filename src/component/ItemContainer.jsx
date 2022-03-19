import "../scss/component/ItemContainer.scss";
import { ItemSmall } from "./ItemSmall";

function ItemContainer({ chairData, getIndex, shoeData }) {
  return (
    <>
      {chairData.results.map((item, i) => {
        return (
          <div className="item-container">
            <ItemSmall index={i} getIndex={getIndex} key={item} itemData={item} />
          </div>
        );
      })}
    </>
  );
}

export default ItemContainer;
