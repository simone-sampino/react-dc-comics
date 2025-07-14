import digitalComics from '/img/digital-comics.png'
import merchandise from '/img/merchandise.png'
import subs from '/img/subscriptions.png'
import shopLocator from '/img/shop-locator.png'
import powerVisa from '/img/power-visa.svg'

export default function Main() {
    return (
        <main className='text-white'>
            <div className='bg-black'>
            <p className="container d-flex align-items-center">--&gt; Content goes here &lt;--</p>
            </div>

            <div className="bg-primary">
                <div id='shop' className='container d-flex align-items-center justify-content-evenly'>
                    <img src={digitalComics} alt="Digital Comics"/>
                        <span>digital comics</span>
                    <img src={merchandise} alt="Merchandise"/>
                        <span>dc merchandise</span>
                    <img src={subs} alt="Subscriptions"/>
                        <span>subscription</span>
                    <img src={shopLocator} alt="Shop Locator"/>
                        <span>comic shop locator</span>
                    <img src={powerVisa} alt="Power Visa"/>
                        <span>dc power visa</span>
                </div>
            </div>
        </main>
    )
}