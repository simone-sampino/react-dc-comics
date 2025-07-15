import dcLogo from '/img/dc-logo.png'
import navbarArray from '../../db/navbar'

export default function Header() {

    return (
        <header>
            <div className='container d-flex align-items-center justify-content-between my-3'>
            <img src={dcLogo} alt='DC Logo'/>

            <nav>
                <div>
                    {/* <a href="#">Characters</a>
                    <a href="#" className='active'>Comics</a>
                    <a href="#">Movies</a>
                    <a href="#">TV</a>
                    <a href="#">Games</a>
                    <a href="#">Collectibles</a>
                    <a href="#">Videos</a>
                    <a href="#">Fans</a>
                    <a href="#">News</a>
                    <a href="#">Shop</a> */}

                    {navbarArray.map((item) => (
                        <a key={item.id} href={item.href} className={item.active ? 'active' : ''}>{item.text}</a>
                    ))}

                </div>
            </nav>
            </div>

            <div className="jumbotron"></div>
            
        </header>
    )
}