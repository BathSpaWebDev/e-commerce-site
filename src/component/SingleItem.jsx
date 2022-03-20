import "../scss/component/SingleItem.scss";
import { useState } from "react";

export const SingleItem = ({ singleData, i, openPage, closePage }) => {
  const [value, setValue] = useState();

  const itemData = singleData.results;

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={`single-item-container ${openPage ? `reveil` : null}`}>
      <div className="single-item-box">
        <div className="single-item-imag-box">
          <img
            className="img-self"
            src={itemData[i].urls.regular}
            alt={itemData[i].alt_description}
          />
          <a target="_blank" href={itemData[i].user.links.html}>
            Att
          </a>
        </div>
        <div className="detail-box">
          <h3>Price: £{itemData[i].price}</h3>
          <h3>A {itemData[i].productName}</h3>
          <div className="input-quantity">
            <label>Select Quantity:</label>
            <br />
            <input
              type="number"
              placeholder="Enter here"
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
            <p>
              <span>Delivery Information:</span>
            </p>
            <p>
              <span>Description:</span>
            </p>
            <p className='close-page' onClick={closePage} >
              Want to shop more? Go back to <span>Main Page</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
