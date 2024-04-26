import './ContainersStyles.css';
import H1Heading from './H1Heading';
import H2Heading from './H2heading';
import Buttom from './Buttom';


export default function HeroImage(){

    return(
        <div className='hero-image-container '>
           <div className='main-hero-image flex-center-container'>
               <H1Heading 
                marginB = "10px"
                textAlign = "center"
                color = "#4192D9" fontSize = "80px" 
                text = "Just Relax, We Cleaned For You" />
                <H2Heading 
                textTransform = "uppercase"
                color = " #09495c" 
                fontSize = "20px" 
                text = "Our cleaning company will ensure the cleanliness and care of your property with our gentle Softwash technology."/>
                <Buttom text = "Intrested" />
           </div>
        </div>
    );
}