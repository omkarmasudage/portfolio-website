import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Loader from './components/Loader';
import Navbar from './components/Navbar';

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
      {isLoading ? (
        // Loading spinner or message
        <div><Loader /></div>
      ) : (
        <div className="grid grid-cols-12 h-screen">
          <div>
            <Navbar />
          </div>
          <div className="col-span-11 p-4">
            <Home />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
