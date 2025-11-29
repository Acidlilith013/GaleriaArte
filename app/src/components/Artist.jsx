function Artist({ artistProp, onDelete }) {
    const { id, name, description, age, image } = artistProp;
    return (
        <div className="artist-card">

            <img src={image} alt="Artistas" className="artist-image" />

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