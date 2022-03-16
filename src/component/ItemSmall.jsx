
export const ItemSmall = ( {itemData} ) => {

    const imageSmall = itemData.urls.small;
    const imgAlt = itemData.alt_description;
    const Att = itemData.user.links.html;
  
    return (
        <div className='my-item-small'>
            
            <h2 className='item-price'>£25</h2>
            <div  className='img-box'>
                <img className='img-small' alt={imgAlt} src={imageSmall}/>
                <a target='_blank' href={Att}>Att</a>
            </div>
            <button className='view-btn'>Quick View</button>
            <button className='add-btn'>Add to Cart</button>
            <h3 className='img-title'>A {imgAlt}</h3>
        </div>
    )
}