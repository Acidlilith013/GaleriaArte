import Room from "../components/Room";
import dataGallery from "../data/dataGallery";
import { useState } from "react";

function Gallery() {
    const [galleryState, setGalleryState] = useState(dataGallery)

//variable para borrar elemento
    const deleteCard = function(idDel) {
        let index;
        let copy = [...galleryState]//crea copia galleryState

        //creamos un bucle de la longitud de copy e incrementamos 1
        for(let i = 0; i < copy.length; i++) {
            if (copy[i].id === idDel) {
                index = i
            }
        }

        if (index) {
            copy.splice(index, 1)
            setGalleryState(copy)
        } 

    }

    

    return (
        <div className="galeria-wrap">
            <h1 className="galeria-title">Salas de Exposición</h1>
            <div className="galeria-grid">
                {galleryState.map(item => (
                    <Room key={item.id} roomProp={item} onDelete={deleteCard}/>
                ))}
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