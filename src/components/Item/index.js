const Item = (props) => {
    return (
        <a href="/" class="list-group-item list-group-item-action list-group-item-dark">
            {props.texto}
        </a>
    )
}

export default Item