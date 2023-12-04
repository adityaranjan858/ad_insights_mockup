import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import CreateAds from './components/createAds/CreateAds';
import NavigationBar from './components/common/NavigationBar';
import TextAdForm from './components/forms/TextAdForm';
import TextAndMediaAdForm from './components/forms/TextAndMediaAdForm';

function App() {

  return (
    <>
      <NavigationBar/> 
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path="/textAdForm" element={<TextAdForm/>} />
        <Route path="/textAndMediaAdForm" element={<TextAndMediaAdForm/>} />
        <Route path='/createAds' element={<CreateAds/>} />
      </Routes>  
      
    </>
  )
}

export default App
