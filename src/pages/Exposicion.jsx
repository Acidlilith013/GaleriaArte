import Picture from "../components/Picture"
import dataPicture from "../data/dataPicture";
import { useState } from "react";

function Exposicion() {
    const [picturesState, setPicturesState] = useState(dataPicture)
    console.log(picturesState)
    //variable para borrar elemento
    const deletePicture = (idDelPict) => {
        let index = -1; //variable para meter datos 
        let copy = [...picturesState] //crea copia galleryState

        //creamos un bucle de la longitud de copy e incrementamos 1
        for (let i = 0; i < copy.length; i++) {
            if (copy[i].id === idDelPict)  //si el id  del elemento del array es igual a el id pasado por parametros(idDel)
                index = i; //guardo el valor i en index
        }

        if (index !== -1) {  //si tengo index es que he encontrado el elemento
            copy.splice(index, 1) // va a eliminar en la posicion del index un elemento
            console.log(copy)
            setPicturesState(copy) // asigno copy a setGalleryState con el elemento eliminado
            console.log(picturesState)
        }
    }
    return (
        <div className="main-exposiciones">
            <h1>Pictures</h1>
            <div className="picture-grid">
                {picturesState.map((dataPictureSingle) => {
                    return <Picture
                        key={dataPictureSingle.id}
                        pictureProp={dataPictureSingle}
                        onDelete={deletePicture} />
                })}
            </div>
        </div>

    )


}



export default Exposicion