import Room from "../components/Room";
import dataGallery from "../data/dataGallery";
import dataGalery from "../data/dataGallery";
import { useState } from "react";


    function Gallery () {
        const [galleryState, setGalleryState] = useState (dataGallery);
        
        return (
            <>
    <div>
        <h1>Galería</h1>
        {dataGallery.map((dataGallerySingle) => {
            return <Room roomProp={dataGallerySingle} />
        })}

    </div>
    </>
)
}
export default Gallery