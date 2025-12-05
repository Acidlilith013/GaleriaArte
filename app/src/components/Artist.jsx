
//1) componente hijo: Artist
//  este componente solo recibe datos y presenta una tarjeta
// cuando se pulsa eliminar avisa al padre con el id

function Artist({ artistProp, onDelete }) {
    //
    const { id, name, description, age, image } = artistProp;
    return (
        <div className="artist-card">
            <div className="artist-image">
                <img src={image} alt="Artistas" className="artist-image"/>
            </div>
            <div className="artist-body">
                <p>{id}</p>
                <p className="artist-name">{name}</p>
                <p>{description}</p>
                <p>{age}</p>
            </div>
            <button onClick={() => onDelete(id)}>Eliminar</button>


        </div>


    )

}
export default Artist