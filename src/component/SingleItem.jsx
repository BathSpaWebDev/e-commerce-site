import './SingleItem.scss';
import { useState } from "react";


export const SingleItem = ( {singleData} ) => {
    const [value, setValue] = useState();

    const imgData = (singleData.results);
    console.log(imgData);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="single-item-container">
            <div className="single-item-box">
                <div className="single-item-imag-box">
                    <img
                        className='img-self'
                        src={imgData[0].urls.regular}
                        alt={imgData[0].alt_description}
                    />
                    <a 
                        target='_blank' 
                        href={imgData[0].user.links.html}
                    >Att</a>
                </div>
                <div className="detail-box">
                    <h3>Price: £0.00</h3>
                    <h3>A {imgData[0].alt_description}</h3>
                    <div className="input-quantity">
                        <label>Select Quantity:</label><br/>
                            <input
                                type='number'
                                placeholder='Enter here'
                                value={value}
                                onChange={handleChange}
                            />
                             <h5>Value:{value}</h5>  
                    </div>
                    <div className="button-box">
                        <button>Add to Cart</button>
                        <button>Save for Later</button>
                    </div>
                    <div className="description-box">
                        <p><span>Delivery Information:</span></p>
                        <p><span>Description:</span></p>
                        <p>Want to shop more? Go back to <span>Main Page</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}