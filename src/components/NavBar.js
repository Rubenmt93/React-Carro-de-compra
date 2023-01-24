import { Component } from "react";
import Logo from './Logo'
const style = {
    navBar:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        heigth:'100px',
        justifyContent:'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow:' 0 2px 3px rgba(0, 0 ,0 ,0.1)'

    }
   
}

class NavBar extends Component {

    render() {       
        return (
           <nav style={style.navBar}>
            <Logo/>
            <p>Carro</p>
           </nav>
        )
    }
}
export default NavBar