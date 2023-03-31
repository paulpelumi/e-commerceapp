import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import MainContent from './components/MainContent';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<MainContent />}/>
            <Route path='/product/:id' element={<ProductPage />} />
          </Route>
      </Routes>
    </Router> 
  )
}

export default App;
