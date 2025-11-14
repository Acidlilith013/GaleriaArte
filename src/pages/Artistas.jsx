import Artist from "../components/Artist"
import dataArtist from "../data/dataArtists"
import { useState } from "react"

function Artistas() {
    const [artistState, setArtistState] = useState(dataArtist);
    return (
        <div>
            <h1>Artistas</h1>
            {artistState.map((dataArtistSingle) => {
                return <Artist
                    key={dataArtistSingle.id}
                    artistProp={dataArtistSingle} />
            })}


        </div>
    )
}
export default Artistas