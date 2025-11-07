export default function Room({ roomProp }) {
    const { id, name, image, description } = roomProp;

    return (
        <div>
            <h1>propiedades Galeria</h1>
            <p>{id}</p>
            <p>{name}</p>
            <p>{image}</p>
            <p>{description}</p>
        </div>
    )
}


