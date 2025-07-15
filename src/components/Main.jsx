import comicsArray from '../../db/comics';
import shopArray from '../../db/shop';

export default function Main() {
    return (
        <main className='bg-dark text-white'>

            <div className="current-series">current series</div>

            <div className='container'>
                <div className="comics-grid">
                {comicsArray.map(({id, thumb, series}) => (
                    <div className='comic-card' key={id}>        
                        <figure>
                            <img src={thumb} alt={series}/>
                        </figure>
                        <figcaption>{series}</figcaption>
                    </div>
                ))}
                </div>
            </div>

            <div className='more-comics'>
                <a className="btn btn-primary" href="#">load more</a>
            </div>

            <div className="bg-primary">
                <div id='shop' className='container d-flex align-items-center justify-content-evenly'>
                    {shopArray.map(({id, src, alt, span, big}) => (
                        <div key={id}>
                            <img className={big ? 'big' : ''} src={src} alt={alt}/>
                            <span>{span}</span>
                        </div>
                    ))}
                </div>

                {/* <div id='shop' className='container d-flex align-items-center justify-content-evenly'>
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
                </div> */}
            </div>

        </main>
    )
}