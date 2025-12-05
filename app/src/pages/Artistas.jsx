import Artist from "../components/Artist"
import dataArtist from "../data/dataArtists"
import { useState } from "react"
import { useEffect } from "react";
//import CreateFormArtist from "../components/CreateFormArtist";
import getDataArtist from "../logic/GetDataArtist";
// este es el paso 3
function Artistas() {
    const [artistState, setArtistState] = useState(dataArtist);
     useEffect(() => {
        getDataArtist(dataArtist)
            .then((data) => setArtistState(data))
            .catch((error) => console.error())
    },[])
    //funcion para añadir picture
    function createNewArtist(packageArtist) {
        let originalLenght = artistState.length
        packageArtist.id = ++originalLenght
        let copy = [...artistState]
        copy.push(packageArtist)
        setArtistState(copy)
    }
    const deleteArtist = (idDelArtist) => {
        let index = -1;
        let copy = [...artistState]

        for (let i = 0; i < copy.length; i++) {
            if (copy[i].id === idDeleteArtist) {
                index = i
            }
        }
        if (index) {
            copy.splice(index, 1)
            setArtistState(copy)
        }

    }

    return (
        <div>
            <h1>Artistas</h1>
            {artistState.map((dataArtistSingle) => {
                return <Artist key={dataArtistSingle.id}
                    artistProp={dataArtistSingle} onDelete={
                        deleteArtist
                    } />
            })}


        </div>
    )
}
export default Artistas