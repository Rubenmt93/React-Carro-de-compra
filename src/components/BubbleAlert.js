import { Component } from "react";

const styles = {
   
   bubbleAlert:{
        backgroundColor: '#E9725A',
        borderRadius: '50%',
        color: '#ffff',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px'
   }
}

class BubbleAlert extends Component {

    render() {       
        return (
           <span style={styles.bubbleAlert}> 5 </span>
        )
    }
}
export default BubbleAlert