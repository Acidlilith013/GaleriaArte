function Picture({ pictureProp, onDelete }) {
    const { id, name, image, description } = pictureProp;

    return (
        <div className="card-picture">
            <div className="picture-image">
                <h1>IMÁGENES</h1>
                <p>{id}</p>
                <p>{name}</p>
                <img className="img-picture" src={image} alt="cuadro" />
                <p>{description}</p>
            </div>
            <button onClick={() => onDelete(id)}>Eliminar</button>
        </div>
    )
}

export default Picture
