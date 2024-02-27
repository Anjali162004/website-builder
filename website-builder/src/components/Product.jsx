import './Product.scss'

import item_image from '../Assets/items_img.png'

const Product = () => {
    return (
        <div className='deals_item'>
            <img className='deals_products_image' src={item_image} alt="image not found" />
            <div>
                <span className='deals_item_tag'>20% Off</span>
                <span className='deals_item_tag'>Limited time</span>
            </div>
            <p className='deals_item_hd'>Webbuilder 1</p>
            <p className='deals_item_text'>Computer Modern classic with wix support</p>
            <div className='deals_item_pricing'>
                <span className='deals_item_dis_price'>$39.96</span>
                <span className='deals_item_price'>$49.96</span>
                <span className='deals_item_dis_per'>(20% Off)</span>
            </div>
            <button className='deals_item_button'>View Deal</button>
        </div>
    )
}

export default Product;