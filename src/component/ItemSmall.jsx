import './ItemSmall.scss';
import chairData from '../chair_images.json';

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

export const ItemSmall = () => {
    const imageSmall = (chairData.results[0].urls.small);
    const imgAlt = (chairData.results[0].alt_description);
    
    return (
        <div className='my-item-small'>
            <h2 className='item-price'>£25</h2>
            <div  className='img-box'>
                <img className='img-small' alt={imgAlt} src={imageSmall}/>
                <button className='view-btn'>Quick View</button>
            </div>
            <button className='add-btn'>Add to Cart</button>
            <h3 className='img-title'>A {imgAlt}</h3>
        </div>
    )
}