import dcLogo from '/img/dc-logo.png'

export default function Header() {

    return (
        <header className='container d-flex align-items-center justify-content-between my-3'>
            <img src={dcLogo} alt='DC Logo'/>

            <nav>
                <div>
                    <a href="#">Charachters</a>
                    <a href="#">Comics</a>
                    <a href="#">Movies</a>
                    <a href="#">TV</a>
                    <a href="#">Games</a>
                    <a href="#">Collectibles</a>
                    <a href="#">Videos</a>
                    <a href="#">Fans</a>
                    <a href="#">News</a>
                    <a href="#">Shop</a>
                </div>
            </nav>
        </header>
    )
}