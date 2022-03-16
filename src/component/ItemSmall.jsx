


export const ItemSmall = ( {itemData} ) => {

    console.log(itemData.urls.small);
    console.log(itemData.alt_description);
    const imageSmall = itemData.urls.small;
    const imgAlt = itemData.alt_description;
    
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