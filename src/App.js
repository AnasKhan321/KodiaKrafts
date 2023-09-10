import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Beers from './components/Beers';
import MyProvider from './ContextApi/Provider.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import {useState} from "react"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [progress, setProgress] = useState(0)
  return (
    <>
      <MyProvider>

        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
           <ToastContainer />
          <Routes>
            <Route exact path='/' element={<Main key="main"  setProgress={setProgress}/>} />
            <Route exact path='/beer' element={<Beers key="beer" setProgress={setProgress} />} />
          </Routes>

          <Footer />

        </BrowserRouter>

      </MyProvider>
    </>
  );
}

export default App;
