import { Component } from "react";
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
            <p>Logo</p>
            <p>Carro</p>
           </nav>
        )
    }
}
export default NavBar