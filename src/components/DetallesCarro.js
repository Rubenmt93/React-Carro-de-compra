import { Component } from "react";

const style = {
    detallesCarro:{
        backgroundColor:'#ffff',
        position:'absolute',
        marginTop:30,
        boxShadow:'1px 5px 5px rgb(0,0,0,0.3)',
        width:'300px',
        right:50,
    },
    ul:{
        margin:0,
        padding:0
    },
    producto:{
        listStyleType:'none',
        display:'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        padding: '20px 25px',
        borderBottom: 'solid 1px #aaa'
    }
   
}

class DetallesCarro extends Component {

    render() {       
        const { carro }= this.props
        return (
          <div style={style.detallesCarro}>
            <ul style={style.ul}>
                {carro.map(x=>                     
                    <li style={style.producto} key={x.name}>
                        <img alt={x.name} src={x.img} width='50' height={'32'}></img>
                        {x.name} <span>{x.cantidad}</span>
                    </li>
                )}
            </ul>
          </div>
        )
    }
}
export default DetallesCarro