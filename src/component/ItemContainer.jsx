import "../scss/component/ItemContainer.scss";
import { ItemSmall } from "./ItemSmall";

function ItemContainer({ chairData, shoeData }) {
  return (
    <>
      {chairData.results.map((item) => {
        return (
          <div className="item-container">
            <ItemSmall itemData={item} />
          </div>
        );
      })}
    </>
  );
}
export default ItemContainer;
