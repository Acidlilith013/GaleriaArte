import Room from "../components/Room";
import dataGallery from "../data/dataGallery";
import { useState } from "react";
import CreateFormGallery from "../components/CreateFormGallery";
import UpdateFormGallery from "../components/UpdateFormGallery";

function Gallery() {
    const [galleryState, setGalleryState] = useState(dataGallery)
    const [roomUpdate, setRoomUpdate] = useState({ name: "", image: "", description: "" })
    // console.log("roomupdate--------------", roomUpdate)

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

    function createNewRoom(packageGallery) {

        let originalLenght = galleryState.length
        packageGallery.id = ++originalLenght //añadimo +1 al ultimo id

        let copy = [...galleryState]    //crea copia galleryState
        copy.push(packageGallery)              //metemos los datos nuevos en copy, lo nuevo es Newroom 
        setGalleryState(copy)           //Asignamos a setGallerystate el valor de copy

    }

    function updateRoom(updateIdRoom, packageGallery) {
        let index = -1; //variable para meter datos 
        let copy = [...galleryState]//crea copia galleryState

        //creamos un bucle de la longitud de copy e incrementamos 1
        for (let i = 0; i < copy.length; i++) {
            if (copy[i].id === updateIdRoom) { //si el id  del elemento del array es igual a el id pasado por parametros(idDel)
                index = i //guardo el valor i en index
            }
        }

        if (index !== -1) {  //si tengo index es que he encontrado el elemento
            copy.splice(index, 1, packageGallery) // va a eliminar en la posicion del index un elemento
            // console.log("Paquete galery Splice---------------", copy)
            setGalleryState(copy) // asigno copy a setGalleryState con el elemento eliminado
        }

    }
    return (
        <div className="galeria-wrap">
            <h1 className="galeria-title">Salas de Exposición</h1>
            <div className="galeria-grid">
                {galleryState.map(item => (
                    <Room key={item.id} roomProp={item} onDelete={deleteCard} onUpdate={setRoomUpdate} />
                ))}

            </div>
            <CreateFormGallery createNewRoomProps={createNewRoom} />
            <UpdateFormGallery updateNewRoomProps={updateRoom} oldRoomProps={roomUpdate} />
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