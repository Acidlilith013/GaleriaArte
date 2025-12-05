function Artist({ artistProp, onDelete }) {
    const { id, name, description, age, image } = artistProp;
    return (
        <div className="artist-card">
            <div className="artist-image">
                <img src={image} alt="Artistas" />
            </div>
            <div className="artist-body">
                <p>{id}</p>
                <p>{name}</p>
                <p>{description}</p>
                <p>{age}</p>
            </div>
            <button onClick={() => onDelete(id)}>Eliminar</button>


        </div>


    )

}
export default Artist