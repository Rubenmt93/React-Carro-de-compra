import { Component } from 'react';
import Productos from './components/Productos.js'
import Layout from './components/Layout.js'
import Title from './components/Title.js';
class App extends Component{
  state={
    productos:[
      {name: 'Tomate', price: 1500, img: './productos/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: './productos/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: './productos/lechuga.jpg'},
    ]
  }
  render(){
    return(
      <div>
        <Layout>
          <Title></Title>
          <Productos
            agregarAlCarro={() => console.log('No hace nada')}
            productos={this.state.productos}/>
        </Layout>
        
      </div>
    )
  }
}
export default App;
