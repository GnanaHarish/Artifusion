import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Create, Posts } from '../components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Posts/>}/>
        <Route path='/create' element = {<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App