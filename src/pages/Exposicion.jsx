import Picture from "../components/Picture"

function Exposicion() {
    const pictureExample = {
        id: 1,
        name: "¨La noche estrellada",
        image: "",
        description: "Una noche genial y hermosa"
    }

    return (
        <div>
            <h1>exposicion</h1>
            <Picture pictureProp={pictureExample} />

        </div>
    )
}
export default Exposicion