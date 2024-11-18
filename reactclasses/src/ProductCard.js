function ProductCard({title, price, image, rating}){

    
    return(
        <div className="card">
            <img src= {image}/>
            <p><span>Title: </span>{title}</p>
            <p><span>Price: </span>{price}</p>
            <p><span>Rating: </span>{rating.rate}</p>
        </div>
        
    )
}

export default ProductCard