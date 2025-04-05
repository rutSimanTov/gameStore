import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './comp/routing';
import { Nav } from './comp/nav';
import { store } from './redux/store';



function App() {
  return <Provider store={store}>
    <BrowserRouter>
     <Nav></Nav> 
    <Routing></Routing>
    </BrowserRouter>
   </Provider>
}

export default App;
