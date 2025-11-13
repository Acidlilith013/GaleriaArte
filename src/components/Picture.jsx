function Picture({ pictureProp }) {
    const { id, name, image, description } = pictureProp;

    return (
        <div className="card-picture">
            <h1>IMÁGENES</h1>
            <p>{id}</p>
            <p>{name}</p>
            <img className="img-picture" src={image} alt="cuadro" />
            <p>{description}</p>
        </div>
    )
}

export default Picture
