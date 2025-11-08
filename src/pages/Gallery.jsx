import Room from "../components/Room";
import dataGallery from "../data/dataGallery";
import { useState } from "react";


function Gallery() {
    const [galleryState] = useState(dataGallery);

    return (
        <div className="galeria-wrap">
            <h1 className="galeria-title">Galería</h1>
            <div className="galeria-grid">
                {galleryState.map((item) => (
                    <Room key={item.id} roomProp={item} />
                ))}
            </div>
        </div>
    );
}
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
export default Gallery