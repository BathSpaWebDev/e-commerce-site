import './ItemSmall.scss';
import { ItemSmall } from './ItemSmall';

function ItemContainer() {
    return (
        <div className='item-container'>
            <ItemSmall/>
            <ItemSmall/>
            <ItemSmall/>
            <ItemSmall/>
            <ItemSmall/>
        </div>
    )
}
export default ItemContainer;