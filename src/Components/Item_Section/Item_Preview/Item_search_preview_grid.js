import React, { Component } from 'react'
import './item_preview.css'
import EyeWish from './Eye_Wish'
import AddItem from './Add_Item';

let star = <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="#FFCD4E" className="feather feather-star"><defs><linearGradient id="star-0.007182026372693384"><stop offset="0"></stop><stop offset="0"></stop></linearGradient></defs><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;

export default class ItemSearchPreviewGrid extends Component {

  heartclick = () => {
    console.log("heartclick")
  }

  render() {
    return (
      <>
      {this.props.data.map(res => 
      <div className='itemview-grid' key={res.sku}>
        <div className='offer-indicator --visible'><span>50%</span></div>
        <EyeWish product={res} heartclick={this.heartclick} tooggleFav={this.props.tooggleFav}/>
        <div className='image-container'><img src= {res.images.split("~")[0]} alt='imagepic'/></div>
        <div className='item-detail-box'>
          <div className='item-detail'>
            <div className='name-container'>{res.name}</div>
            <div className='rating-container'>{star} </div>
            <div className='price-container'>
              <span className='current-price'>${res.price*0.5}</span>
              <span className='original-price'>${res.price}</span>
            </div>
          </div>
        <div className='addtocart-icon'>
        <AddItem itemid1={res.sku}/>
        </div>
        
        </div>
      </div>
      )}
      </>
    )
  }
}
