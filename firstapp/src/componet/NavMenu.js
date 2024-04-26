import NavItems from "./NavItems"

export default function NavMenu(){
     const NavMenuStyles = {
        display: 'flex',
     }

    return(
        <div style ={NavMenuStyles}>
              <NavItems itemsName = "Our Works" />
              <NavItems itemsName = "Services" />
              <NavItems itemsName = "About" />
              <NavItems itemsName = "Contact" />
        </div>
    );
}