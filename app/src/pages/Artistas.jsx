import Artist from "../components/Artist"
import dataArtist from "../data/dataArtists"
import { useState } from "react"
import { useEffect } from "react";
import CreateFormArtist from "../components/CreateFormArtist";

function Artistas() {
    const [artistState, setArtistState] = useState(dataArtist);
    /* useEffect(() => {
        getPosts(dataArtist)
            .then((data) => setdataPicture(data))
            .catch((error) => console.error())
    }) */
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
                index = i;
            }
        }
        if (index !== -1) {
            copy.splice(index, 1)
            console.log(copy)
            setArtistState(copy)
            console.log(artistState)
        }

    }

    return (
        <div className="artist-page">
            <h1>Artistas</h1>
            <div>
                {artistState.map((dataArtistSingle) => {
                    return <Artist
                        key={dataArtistSingle.id}
                        artistProp={dataArtistSingle}
                        onDelete={deleteArtist} />
                })}
            </div>
            <CreateFormArtist CreateNewArtistProps={createNewArtist} />
            </div>
             ); 
}      
  export default Artistas;