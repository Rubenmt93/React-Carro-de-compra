import { Component } from "react";

const styles = {
   
   bubbleAlert:{
        
        backgroundColor: '#E9725A',
        borderRadius: '50%',
        color: '#ffff',
        padding: '5px 10px',
        fontSize: '0.9rem',
        minWidth:'20px'
        
   }
}

class BubbleAlert extends Component {

    getNumber(n){
        if(!n){
            return ''
        }
        return n > 9 ? '9+' : n
    }
    render() {    
        const { value } =   this.props
        return (
            <span style={styles.bubbleAlert}>
             {this.getNumber(value)} 
            </span>
        )
    }
}
export default BubbleAlert