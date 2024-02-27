import './Footer.scss'

const Footer = () => {
    return (
        <>
        <div className='footer_signup'>
          <span>Sign up and get exclusive special deals</span>
          <div>
            <input type="text" />
            <button>Sign Up</button>
          </div>
        </div>
        <div className='footer_nav_back'>
            <nav className='footer_nav'>
            <li>
                <span>CATEGORIES</span>
                <ul>
                <li>Web Builder</li>
                <li>Hosting</li>
                <li>Data Center</li>
                <li>Robotic-Automation</li>
                </ul>
            </li>
            <li>
                <span>CONTACT</span>
                <ul>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
                <li>Categories</li>
                <li>About</li>
                </ul>
            </li>
            <div className='footer_nav_cn'>
                <select name="" id="" >
                    <option value="US">United States</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="IN">India</option>
                </select>
            </div>
            </nav>
        </div>
        </>
    )
}

export default Footer;