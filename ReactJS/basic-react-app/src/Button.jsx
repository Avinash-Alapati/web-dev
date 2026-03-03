function handleClick() {
    return console.log("Clicked the Button!")
};

function handleHover() {
    console.log("Hovered the button!")
}

export default function Button () {
    return (
        <>
            <div>
                <button onClick={handleClick} onMouseOver={handleHover}>Buy Now!</button>
            </div>
        </>
    );
}