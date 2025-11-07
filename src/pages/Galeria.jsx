import Room from "../components/Room"

function Galeria () {
    const galeryexample = {
        id: 1,
        name: "Sala principal",
        image: "",
        description: "Sala Principal dotada de 140m"
    }
    return(
        <div> 
            <h1>Galería</h1>
            <Room roomProp={galeryexample}/>
        </div>
    )
}
export default Galeria