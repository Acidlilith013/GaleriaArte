function Artist({ artistProp, onDelete }) {
    const { id, name, description, age, image } = artistProp;
    return (
<<<<<<< HEAD
        <div className="artist-target">
            <p>{id}</p>
            <p>{name}</p>
            <p className="description-artist">{description}</p>
            <p>{age}</p>
            <img className="picture-artist" src={image} alt="Artistas" />
=======
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

>>>>>>> 792565864d951ad94a678b19adf02bcb9f051596

        </div>


    )

}
export default Artist