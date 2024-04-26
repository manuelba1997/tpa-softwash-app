import LogoContainer from "./LogoContainer";
import NavMenu from "./NavMenu.js"


export default function NavBar(){
const navBarStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-around',
    backgroundColor:'#F2F2F2'

}

    return( 
        <div style = {navBarStyles}>
        <LogoContainer />
        <NavMenu />
        </div>
    );

}