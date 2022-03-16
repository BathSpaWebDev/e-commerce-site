import './ItemSmall.scss';
import { ItemSmall } from './ItemSmall';

function ItemContainer( {chairData, shoeData} ) {
    return (
        <div className='item-container'>

            <ItemSmall itemData={chairData.results[0]}/>
            <ItemSmall/>
            <ItemSmall/>
            <ItemSmall/>
            <ItemSmall/>
        </div>
    )
}
export default ItemContainer;