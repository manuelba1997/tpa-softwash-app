

export default function NavItems(props){
    const itemsStyles = {
        fontSize: 20,
        padding: 10
    }
    return(
        <div style = {itemsStyles}>
              {props.itemsName}
        </div>
    );
}