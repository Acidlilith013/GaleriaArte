function Artist({ artistProp }) {
    const { id, name, description, age, image } = artistProp;
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{age}</p>
            <img src={image} alt="Artistas" />

        </div>

    )

}
export default Artist