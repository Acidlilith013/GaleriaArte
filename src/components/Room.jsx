export default function Room({ roomProp }) {
    const { id, name, image, description } = roomProp;

    return (
        <div className="room"> 
            <p>{id}</p>
            <p>{name}</p>
            <img src={image} alt="" />
            <p>{description}</p>
        </div>
    )
}


