function Picture({ pictureProp }) {
    const { id, name, image, description } = pictureProp;

    return (
        <div>
            <h1>IMÁGENES</h1>
            <p>{id}</p>
            <p>{name}</p>
            <p>{image}</p>
            <p>{description}</p>
        </div>
    )
}

export default Picture
