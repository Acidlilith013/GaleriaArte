import Picture from "../components/Picture"
import dataPicture from "../data/dataPicture";
import { useState } from "react";

function Exposicion() {
    const [exposicionState, setExposicionState] = useState(dataPicture);

    return (
        <>
            <div>
                <h1>Galería</h1>

                {exposicionState.map((dataPictureSingle) => {
                    return <Picture
                        key={dataPictureSingle.id}
                        pictureProp={dataPictureSingle} />
                })}
            </div>
        </>
    )
}
export default Exposicion