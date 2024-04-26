
const H1Heading = function (props){
    return(
        <div>
            <h1 style={{
                fontSize:props.fontSize,
                color: props.color,
                textTransform: props.textTransform,
                textAlign: props.textAlign,
                marginBottom:props.marginB,
            }}>{props.text}</h1>
        </div>
    )
}



export default H1Heading;