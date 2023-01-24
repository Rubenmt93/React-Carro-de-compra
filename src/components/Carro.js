import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
const style = {
    Carro:{
       backgroundColor: '#359A2C',
       color:'#fff',
       border:'none',
       padding: '15px',
       borderRadius: '15px',
       cursor:'pointer'
    },
    bubble:{
        position:'relative',
        left: 12,
        top: -20,
        
    }
}

class Carro extends Component {

    render() {       
        return (
           <div >
                <span style={style.bubble}>
                    <BubbleAlert/>
                </span>
                <button style={style.Carro}>
                    Carro
                </button>
            
           </div>
        )
    }
}
export default Carro