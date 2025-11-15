function Artist({ artistProp }) {
    const { id, name, description, age, image } = artistProp;
    return (
        <div className="artist-target">
            <p>{id}</p>
            <p>{name}</p>
            <p className="description-artist">{description}</p>
            <p>{age}</p>
            <img className="picture-artist" src={image} alt="Artistas" />

        </div>

    )

}
export default Artist