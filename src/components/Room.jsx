export default function Room({ roomProp }) {
    const { id, name, image, description } = roomProp;

    return (
        <article className="room-card" aria-labelledby={`room-${id}-title`}>
            <div className="room-image-wrap">
                <img
                    className="room-image"
                    src={image}
                    alt={name}
                    loading="lazy"
                    width="1600"
                    height="1000"
                />
            </div>
            <div className="room-body">
                <h2 id={`room-${id}-title`} className="room-name">{name}</h2>
                <p className="room-desc">{description}</p>
            </div>
        </article>
    );
}

        // <div className="room"> 
        //     <p>{id}</p>
        //     <p>{name}</p>
        //     <img src={image} alt="" />
        //     <p>{description}</p>
        // </div>
//     )
// }


