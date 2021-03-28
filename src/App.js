import React,{Component} from 'react';
import Burger from './components/Layout/Burger/Bueger';
import Layout from './components/Layout/Layout'
import BurgerBilder from './container/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render(){
  return (
    <div >
      <Layout>
       
        <BurgerBilder></BurgerBilder>
      </Layout>
    </div>
  );
  }
}

export default App;
