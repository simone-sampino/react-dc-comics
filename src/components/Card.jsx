export default function Card(props) {
    return (
        <div className='comic-card'>        
            <figure>
                <img src={props.thumb} alt={props.series}/>
            </figure>
            <figcaption>{props.series}</figcaption>
        </div>
    )
}
