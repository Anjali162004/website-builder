import './App.scss';

// components import
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Product from './components/Product'
import ProductArticle from './components/ProductArticle';

// icons import
import { CiCircleCheck } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <main className='content_section'>
        <section className='head_section'>
          <span>Best Website builder in the US</span>
          <div className='head_section_dis'>
            <ul>
              <li><CiCircleCheck className='icon'/> Last Updated - February 22, 2020</li>
              <li><IoIosInformationCircleOutline className='icon'/> Advertising Disclosure</li>
            </ul>
            <select name="" id="">
              <option value="TR">Top Relevant</option>
              <option value="MV">Most Viewed</option>
            </select>
          </div>
          <ul className='head_section_options'>
            <li>Tools</li>
            <li>AWS Builder</li>
            <li>Start Builder</li>
            <li>Build Supplies</li>
            <li>Tooling</li>
            <li>BlurHosting</li>
          </ul>
          <div className='directory_view'>
            <span className='directory_view_item'>Home</span>
            <FaGreaterThan className='directory_view_item'/>
            <span className='directory_view_item'>Hosting for all</span>
            <FaGreaterThan className='directory_view_item'/>
            <span className='directory_view_item'>Hosting</span>
            <FaGreaterThan className='directory_view_item'/>
            <span className='directory_view_item'> Hosting6</span>
            <FaGreaterThan className='directory_view_item'/>
            <span className='directory_view_item'>Hosting5</span>
            <FaGreaterThan className='directory_view_item'/>
          </div>
        </section>
        <section className='product_section'>
          <ProductArticle
            label={'best-choice'}
            number={'1'}
            heading={articleOneHeading}
            paraOneHighlight={paraForArticleOne_part_one_highlight}
            paraOne={paraForArticleOne_part_one}
            paraTwoHighlight={paraForArticleOne_part_two_hightlight}
            paraTwo={paraForArticleOne_part_two}
            Rating={articleOneRating}
          />
          <ProductArticle
            label={'best-value'}
            number={'2'}
            heading={articleTwoHeading}
            paraOneHighlight={paraForArticleTwo_part_one_highlight}
            paraOne={paraForArticleTwo_part_one}
            paraTwoHighlight={paraForArticleTwo_part_two_hightlight}
            paraTwo={paraForArticleTwo_part_two}
            Rating={articleTwoRating}
          />
          <ProductArticle
            label={null}
            number={'3'}
            heading={articleThreeHeading}
            paraOneHighlight={paraForArticleThree_part_one_highlight}
            paraOne={paraForArticleThree_part_one}
            paraTwoHighlight={paraForArticleThree_part_two_hightlight}
            paraTwo={paraForArticleThree_part_two}
            Rating={articleThreeRating}
          />
          <ProductArticle
            label={null}
            number={'4'}
            heading={articleFourHeading}
            paraOneHighlight={paraForArticleFour_part_one_highlight}
            paraOne={paraForArticleFour_part_one}
            paraTwoHighlight={paraForArticleFour_part_two_hightlight}
            Rating={articleFourRating}
          />
        </section>
        <section className='related_deals'>
          <span className='related_deals_hd'>Related deals you might like for</span>
          <div className='related_deals_items'>
            <Product/>
            <Product/>
            <Product/>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

 
const articleOneHeading = `Builder 1`

const paraForArticleOne_part_one_highlight =`WixPro 72-Inch Responsive Website Builder- `

const paraForArticleOne_part_one = `Comprehensive Digital Platform Creation Tool, 
Streamlined Design Interface for Professional 
Websites and Online Stores (Black/Blue)`

const paraForArticleOne_part_two_hightlight =`Main highlights`

const paraForArticleOne_part_two = `[What You Get]: Receive the WixPro website 
builder suite,access to premium design templates, an extensive library 
of widgets and apps, and detailed step-by-step guides.`

const articleOneRating = 9.8;


const articleTwoHeading = `Builder`

const paraForArticleTwo_part_one_highlight =`SiteCraft 68-Inch Ultimate Web Design Studio- `

const paraForArticleTwo_part_one = `Advanced Site Creation Toolkit, Intuitive 
Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)`

const paraForArticleTwo_part_two_hightlight =`Main highlights`

const paraForArticleTwo_part_two = `[What You Get]: Gain access to the SiteCraft 
design studio, featuring a robust selection of design elements, SEO optimization
 tools, and e-commerce integrations.`

 const articleTwoRating = 9.5;
 
const articleThreeHeading = `Builder 1`

const paraForArticleThree_part_one_highlight =`WixPro 72-Inch Responsive Website Builder- `

const paraForArticleThree_part_one = `Comprehensive Digital Platform Creation Tool, 
Streamlined Design Interface for Professional 
Websites and Online Stores (Black/Blue)`

const paraForArticleThree_part_two_hightlight =`Main highlights`

const paraForArticleThree_part_two = `[What You Get]: Receive the WixPro website 
builder suite,access to premium design templates, an extensive library 
of widgets and apps, and detailed step-by-step guides.`

const articleThreeRating = 9.3;

 
const articleFourHeading = `CDX`

const paraForArticleFour_part_one_highlight =`CDK Resposive Builder:  `

const paraForArticleFour_part_one = `An extensive library of widgets and apps, 
and detailed step-by-step guides`

const paraForArticleFour_part_two_hightlight =`Main highlights`

const articleFourRating = 9.1;