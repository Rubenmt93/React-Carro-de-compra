import { Component } from "react";
const style= {
    producto :{
        border: 'solid 1px #eeee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img:{
        width:'100%'

    }
}
class Producto extends Component {

    render() {
       
        const { producto } = this.props
        return (
            <div style={style.producto}>
                <img  style={style.img}
                      alt={producto.name} 
                      src={producto.img}></img>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>    
            </div>
        )
    }
}
export default Producto