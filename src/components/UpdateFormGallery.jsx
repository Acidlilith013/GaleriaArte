import { useState } from "react";

function UpdateFormGallery({ updateNewRoomProps, oldRoomProps }) {

    const [nameGallery, setNameGallery] = useState(oldRoomProps.name)
    const [imageGallery, setImageGallery] = useState(oldRoomProps.image)
    const [descriptionGallery, setDescriptionGallery] = useState(oldRoomProps.description)

    function sendFormGallery(event) {
        event.preventDefault()           // previene que cuando se envia al pulsar boton se recargue la pagina

        const packageGallery = {
            name: nameGallery,
            image: imageGallery,
            description: descriptionGallery
        }
        updateNewRoomProps(updateIdRoom, packageGallery)
    }
    return (

        <div>
            <form onSubmit={sendFormGallery}>
                <div className="form">
                    <label>Nombre de la Galería</label>
                    <input

                        value={nameGallery} onChange={(event) => { setNameGallery(event.target.value) }}
                    />
                </div>
                <div className="form">
                    <label>Imagen de la Galería</label>
                    <input

                        value={imageGallery} onChange={(event) => { setImageGalestalery(event.target.value) }}
                    />
                </div>
                <div className="form">
                    <label>Descripción de la Galería</label>
                    <input

                        value={descriptionGallery} onChange={(event) => { setDescriptionGallery(event.target.value) }}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>

    )
}

export default UpdateFormGallery