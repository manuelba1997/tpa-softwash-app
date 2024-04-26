import ServiceCard from "./ServiceCard"
import './OurProductsContainer.css'

export default function OurProductContainer(){
    const svgStyles = {
        widht:'50px',
        height:'50px',
        backGroundColor:"#236096",
        color:"#236096",
    }

    return(
        <div className="product-provider">
            <h1>Our Products</h1>
        <div className = "flex-container">
            <ServiceCard svgStyles = {svgStyles} message = "Gutter Cleaning" />
            <ServiceCard svgStyles = {svgStyles} message = "Roof Cleaning" />
            <ServiceCard svgStyles = {svgStyles} message = "Driveways Cleaning" />
            <ServiceCard svgStyles = {svgStyles} message = "Sidewalks Cleaning" />
            <ServiceCard svgStyles = {svgStyles} message = "Decks Cleaning" />
            <ServiceCard svgStyles = {svgStyles} message = "Fences Cleaning" />
        </div>
        <div className="counter-container">
            <h1>Products:</h1>
        </div>
        </div>
    )
}