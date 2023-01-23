import { Component } from "react";
const style = {
    titulo:{
        marginBottom:'30px'
    }
}

class Title extends Component {

    render() {
       
        return (
           <div>
            <h1 style={style.titulo}>Tienda</h1>
         
           </div>
        )
    }
}
export default Title