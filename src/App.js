import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import Navbar2 from './components/Navbar2';
import Home2 from './components/Home2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './components/Details';

function App() {
  // Loader

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to mimic data fetching or other initialization
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      <Router>
        <div className="flex">
          <div className="max-w-xs h-screen md:min-w-[20rem]">
            <Navbar2 />
          </div>
          <div className="flex-1">
            <Routes>
              <Route exact path='/' element={<Home2 />}></Route>
              <Route exact path="/detail/:imageId" element={<Details/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
