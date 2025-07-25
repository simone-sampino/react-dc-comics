// Images
import fb from '/img/facebook.png' 
import twitter from '/img/twitter.png' 
import yt from '/img/youtube.png' 
import pinterest from '/img/pinterest.png' 
import periscope from '/img/periscope.png'
// DB
import comicsInfoAr from '../../db/comics-info'
import dcInfoAr from '../../db/dc-info'
import sitesInfoAr from '../../db/sites-info'
import shopInfoAr from '../../db/shop-info'

export default function Footer() {
    return (
        <footer>
            <div className="bg-comics">
                <div className="container text-white">
                    <div className="row">
                        <div className="col-6 links">
                            <div className="row d-flex flex-wrap">
                                <div className="col-4">
                                    <h3>dc comics</h3>
                                    {comicsInfoAr.map((item) => (
                                        <ul>
                                            <li><a key={item.id} href={item.href}>{item.text}</a></li>
                                        </ul>
                                    ))}

                                    {/* <ul>
                                        <li><a href="#">Characters</a></li>
                                        <li><a href="#">Comics</a></li>
                                        <li><a href="#">Movies</a></li>
                                        <li><a href="#">TV</a></li>
                                        <li><a href="#">Games</a></li>
                                        <li><a href="#">Videos</a></li>
                                        <li><a href="#">News</a></li>
                                    </ul> */}
                                </div>
                                <div className="col-4">
                                    <h3>dc</h3>
                                    {dcInfoAr.map((item) => (
                                        <ul>
                                            <li><a key={item.id} href={item.href}>{item.text}</a></li>
                                        </ul>
                                    ))}    
                                    
                                    {/* <ul>
                                        <li><a href="#">Terms Of Use</a></li>
                                        <li><a href="#">Privacy policy (New)</a></li>
                                        <li><a href="#">Ad Choices</a></li>
                                        <li><a href="#">Advertising</a></li>
                                        <li><a href="#">Jobs</a></li>
                                        <li><a href="#">Subscriptions</a></li>
                                        <li><a href="#">Talent Workshops</a></li>
                                        <li><a href="#">CPSC Certificates</a></li>
                                        <li><a href="#">Ratings</a></li>
                                        <li><a href="#">Shop Help</a></li>
                                        <li><a href="#">Contact US</a></li>
                                    </ul> */}
                                </div>
                                <div className="col-4">
                                    <h3>sites</h3>
                                    {sitesInfoAr.map((item) => (
                                        <ul>
                                            <li><a key={item.id} href={item.href}>{item.text}</a></li>
                                        </ul>
                                    ))}       

                                    {/* <ul>
                                        <li><a href="#">DC</a></li>
                                        <li><a href="#">MAD Magazine</a></li>
                                        <li><a href="#">DC Kids</a></li>
                                        <li><a href="#">DC Universe</a></li>
                                        <li><a href="#">DC Power Visa</a></li>
                                    </ul> */}
                                </div>
                                <div className="col-4">
                                    <h3>shop</h3>
                                    {shopInfoAr.map((item) => (
                                        <ul>
                                            <li><a key={item.id} href={item.href}>{item.text}</a></li>
                                        </ul>
                                    ))}     

                                    {/* <ul>
                                        <li><a href="#">Shop DC</a></li>
                                        <li><a href="#">Shop DC Collectibles</a></li>
                                    </ul> */}
                                </div>
                            </div>  
                        </div>
                        <div className="col-6 bg-dc"></div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="footer-left">
                        <button>sign-up now!</button>
                    </div>
                    <div className="footer-right">
                    <span>follow us</span>
                        <img src={fb} alt="Facebook"/>
                        <img src={twitter} alt="Twitter"/>
                        <img src={yt} alt="Youtube"/>
                        <img src={pinterest} alt="Pinterest"/>
                        <img src={periscope} alt="Periscope"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}