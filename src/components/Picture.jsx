function Picture({ pictureProp }) {
    const { id, name, image, description } = pictureProp;

    return (
        <div>
            <h1>IMÁGENES</h1>
            <p>{id}</p>
            <p>{name}</p>
            <img src={image} alt="cuadro" />
            <p>{description}</p>
        </div>
    )
}

export default Picture
