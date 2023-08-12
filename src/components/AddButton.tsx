const divStyle = {
    border: "2px solid black",
    borderRadius: "8px",
    cursor: "pointer",
}

const spanStyle = {
    borderRadius: "6px 0 0 6px",
    backgroundColor: "#FFBD12",
    padding: "2px 6px",
    fontSize: "large"
}

const imgStyle = {
    alignSelf: "center",
    height: "32px",
    padding: "7px"
}

export function AddButton({addItem, id, price}: any) {
    return <div className="d-flex flex-row" onClick={() => {addItem(id, price)}}
    style={divStyle}>
        <span style={spanStyle}><b>Add</b></span>

        <img style={imgStyle} src="/imgs/plus.png"/>
    </div>
}
