import './ProductArticle.scss'
import item_image from '../Assets/items_img.png'

//icon for product articles
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineStarPurple500 } from "react-icons/md"
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const ProductArticle = ({label, number, heading, paraOneHighlight, paraOne, paraTwoHighlight, paraTwo, Rating}) => {
    
    // function for rendering Rating's Quote 
    const RatingQuote = (value) => {
        if (value > 9 && value <= 9.1) {
            return 'Very Good';
        } else if (value > 9.1 && value <= 9.3) {
            return 'Exceptional';
        } else if (value > 9.3 && value <= 9.5) {
            return 'Excellent';
        } else if (value > 9.5 && value <= 9.8) {
            return 'Exceptional';
        } else {
            return 'Unknown'; // Handle other cases if needed
        }
    }

    // function for rendering Rating's star
    const RenderRatingStars = (value) => {
        if (value >= 9 && value < 9.5) {
            return (
                <>
                <MdOutlineStarPurple500 /><MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 /><MdOutlineStarPurple500 />
                <MdOutlineStarOutline />
                </>
            )
        }   else if (value >= 9.5 && value < 10) {
            return (
                <>
                <MdOutlineStarPurple500 /><MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 /><MdOutlineStarPurple500 />
                <MdOutlineStarHalf />
                </>
            )
        } else {
            return 'Unknow';  
        }
    } 

    return (
      <>
      <article className='product_item'>
            { label === 'best-choice' ? (
              <div className='product_item_label'><IoTrophyOutline />Best Choice</div>
            ): null}
            { label === 'best-value' ? (
              <div className='product_item_label'><IoDiamondOutline />Best Value</div>
            ): null}
            <div className='product_item_number'>{number}</div>
            <div className='product_item_img_box'>
              <img className='deals_products_image' src={item_image} alt="image not found" />
              <span>{heading}</span>
            </div>
            <div className='product_item_details'>
              <p><b>{paraOneHighlight}</b>
                {paraOne}</p>
              <span><b>{paraTwoHighlight}</b></span>
              <p className='product_details_indented'>{paraTwo != null ? paraTwo : (
                <div className='product_dtl_sub_first'>
                    <div>
                        <span className='product_dtl_sub_rat'>9.9</span>
                        <span className='product_dtl_sub_quote'>Build Responsive</span>
                    </div>
                    <div>
                        <span className='product_dtl_sub_rat'>8.9</span>
                        <span className='product_dtl_sub_quote'>Cool</span>
                    </div>
                    <div>
                        <span className='product_dtl_sub_rat'>8.9</span>
                        <span className='product_dtl_sub_quote'>Docs</span>
                    </div>
                </div>
              )}</p>
              {paraTwo == null ? (
                <div className='product_dtl_sub_second'>
                    <p className='product_dtl_sub_second_hd'>Why we love it</p>
                    <div>
                        <FaCheck className='product_dtl_checkbox'/>
                        <span>Documentation</span>
                    </div>
                    <div>
                        <FaCheck className='product_dtl_checkbox'/>
                        <span>Easy Use</span>
                    </div>
                    <div>
                        <FaCheck className='product_dtl_checkbox'/>
                        <span>Out Of Box</span>
                    </div>
                </div>
              ) : null}
              <button>Show more<RiArrowDropDownLine className='pdt_dtl_btn'/></button>
            </div>
            <div className='product_item_rating'>
              <div>
                <span className='product_rating'>{Rating}</span>
                <span className='product_review'>
                    {RatingQuote(Rating)}
                </span>
                <span className='product_rating_stars'>
                    {RenderRatingStars(Rating)}
                </span>
              </div>
              <button className='product_rating_btn'>View</button>
            </div>
          </article>
      </>
    )
  }

  export default ProductArticle;