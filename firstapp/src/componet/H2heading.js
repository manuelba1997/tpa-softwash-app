
const H2Heading = function (props){
    return(
        <div>
            <h3 className={props.Nameclass} style={{
                fontSize:props.fontSize,
                color: props.color,
                textTransform: props.textTransform,
                textAlign: props.textAlign
            }}>{props.text}</h3>
        </div>
    )
}

export default H2Heading;