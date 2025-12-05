import Artist from "../components/Artist"
import dataArtist from "../data/dataArtists"
import { useState } from "react"

function Artistas() {
    const [artistState, setArtistState] = useState(dataArtist);

    const deleteArtist = function (idDeleteArtist) {
        let index;
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