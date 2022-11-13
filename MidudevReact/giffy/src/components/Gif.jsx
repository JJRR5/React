const Gif = ({ gif }) => {
    const { url, title } = gif

    return (
        <figure className="gif__item flex__column--center">
            <img
                width = "200"
                className='img__gif'
                src={url}
                alt={title} 
                loading="lazy"
            />
            <figcaption className="gif__caption--container flex__column--center">
                <h3 className="figcaption__title">{title}</h3>
                <a className="figcaption__link" href={url} target="_blank"> Take a Look! </a>
            </figcaption>
        </figure>
    )
}

export default Gif