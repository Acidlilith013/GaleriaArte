import Room from "../components/Room";
import dataGallery from "../data/dataGallery";
import { useState } from "react";

function Gallery() {
    const [galleryState, setGalleryState] = useState(dataGallery)

    const [nameGallery, setNameGallery] = useState("")
    const [imageGallery, setImageGallery] = useState("")
    const [descriptionGallery, setDescriptionGallery] = useState("")

    //variable para borrar elemento
    const deleteCard = function (idDel) {
        let index = -1; //variable para meter datos 
        let copy = [...galleryState]//crea copia galleryState

        //creamos un bucle de la longitud de copy e incrementamos 1
        for (let i = 0; i < copy.length; i++) {
            if (copy[i].id === idDel) { //si el id  del elemento del array es igual a el id pasado por parametros(idDel)
                index = i //guardo el valor i en index
            }
        }

        if (index !== -1) {  //si tengo index es que he encontrado el elemento
            copy.splice(index, 1) // va a eliminar en la posicion del index un elemento
            setGalleryState(copy) // asigno copy a setGalleryState con el elemento eliminado
        }

    }

//funcion para añadir sala

    function createNewRoom (event){
        event.preventDefault()
        const newRoom = {
            id:6,
            name: nameGallery,
            image:imageGallery,
            description: descriptionGallery
        }
        console.log(newRoom)

         let copy = [...galleryState]//crea copia galleryState
         copy.push(newRoom)
         setGalleryState (copy)

    } 


    return (
        <div className="galeria-wrap">
            <h1 className="galeria-title">Salas de Exposición</h1>
            <div className="galeria-grid">
                {galleryState.map(item => (
                    <Room key={item.id} roomProp={item} onDelete={deleteCard} />
                ))}

            </div>
            <div>
                <form onSubmit={createNewRoom}>
                    <div className="form">
                        <label>Nombre de la Galería</label>
                        <input

                            value={nameGallery} onChange={(event) => {setNameGallery(event.target.value)}}
                        />
                    </div>
                    <div className="form">
                        <label>Imagen de la Galería</label>
                        <input

                            value={imageGallery} onChange={(event) => {setImageGallery(event.target.value)}}
                        />
                    </div>
                    <div className="form">
                        <label>Descripción de la Galería</label>
                        <input

                            value={descriptionGallery} onChange={(event) => {setDescriptionGallery(event.target.value)}}
                        />
                    </div>
                <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}
export default Gallery;

//     function Gallery () {
//         const [galleryState, setGalleryState] = useState (dataGallery);

//         return (
//             <>
//     <div>
//         <h1>Galería</h1>
//         {dataGallery.map((dataGallerySingle) => {
//             return <Room roomProp={dataGallerySingle} />
//         })}

//     </div>
//     </>
// )
// }
// export default Gallery