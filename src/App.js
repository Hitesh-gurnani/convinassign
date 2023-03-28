import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainContainer from './components/MainContainer';
import History from './components/History';
const appRouter=createBrowserRouter([{
  path:"/",
  element:<MainContainer/>,
},
  {
    path:'/historyPage',
    element:<History/>
  }
  ])
function App() {
  return (
    <Provider store={store}>
      <MainContainer/>
      
    </Provider>
  );
}

export default App;
