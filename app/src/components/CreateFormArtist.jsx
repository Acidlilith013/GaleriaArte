import { useState } from "react";

function CreateFormArtist({ CreateNewArtistProps }) {
    const [nameArtist, setNameArtist] = useState("")
    const [imageArtist, setImageArtist] = useState("")
    const [descriptionArtist, setDescriptionArtist] = useState("")

    function sendFormArtist(event) {
        event.preventDefault()

        const packageArtist = {
            name: nameArtist,
            image: imageArtist,
            description: descriptionArtist

        }
        CreateNewArtistProps(packageArtist)
    }
    return (
        <div>
            <form onSubmit={sendFormArtist}>
                <div className="form">
                    <label>Nombre Artista</label>
                    <input
                        value={nameArtist} onChange={(event) => { setNameArtist(event.target.value) }} //Event.target ( se pone cuando pongo un Usestate en Value, no puedo modificarlo , por lo que ponemos el evento e. Target (quién hace la acción)

                    />
                </div>
                <div className="form">
                    <label>imagen artista</label>
                    <input
                        value={imageArtist} onChange={(event) => { setImageArtist(event.target.value) }}
                    />
                </div>
                <div className="form">
                    <label>descripcion artista</label>
                    <input
                        value={descriptionArtist} onChange={(event) => { setDescriptionArtist(event.target.value) }}
                    />
                </div>
                <button type="submit">Enviar</button>

            </form>
        </div>
    )
}
export default CreateFormArtist