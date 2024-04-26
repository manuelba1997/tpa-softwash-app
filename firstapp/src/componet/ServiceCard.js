import "./ServiceCard.css"

export default function ServiceCard(props){
    return(
        <div className = "card-styles">
             <div className="text-styles">
                <h2>{props.message}</h2>
                    <span className = "vertical-line"></span>
             </div>
             <img style = {props.svgStyles} src="./circle_check.svg" alt="Your SVG" />


        </div>
    )
}