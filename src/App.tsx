import { BrowserRouter } from 'react-router-dom';
import './App.css'
import NavBar from './component/navbar/navbar';
import RoutesPage from './routes/routes';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesPage />
      </BrowserRouter>
    </div>
  )
}

export default App
