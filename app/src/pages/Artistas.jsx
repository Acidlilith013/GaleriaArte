import Artist from "../components/Artist"
import dataArtist from "../data/dataArtists"
import { useState } from "react"
import { useEffect } from "react";


function Artistas() {
    const [artistState, setArtistState] = useState(dataArtist);

/* useEffect(() => {
    getPosts(dataArtist)
        .then((data) => setdataPicture(data))
        .catch((error) => console.error())
}) */

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
        console.log(pictureState)
    }

}

return (
    <div className="artist-page">
        <h1>Artistas</h1>
        {artistState.map((dataArtistSingle) => {
            return <Artist
                key={dataArtistSingle.id}
                artistProp={dataArtistSingle}
                onDelete={deleteArtist} />
        })}


    </div>
)}

export default Artistas