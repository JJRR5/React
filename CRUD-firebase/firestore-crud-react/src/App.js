import './App.css';
import Links from  "./components/Links";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  
  return (
    <>
      <h1 className='text-white display-2 text-uppercase fw-bold text-center mt-5'>Links Storage</h1>
      <main className='container p-4 mt-5'>
          <Links />
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
