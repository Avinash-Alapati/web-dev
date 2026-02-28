function MsgBox({userName , textColor}){
    let color  = {color : textColor};
    return (
        <h1 style={color}>Hello, {userName}!</h1>
    );
}

export default MsgBox;