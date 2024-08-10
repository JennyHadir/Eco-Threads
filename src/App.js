import SiteLayout from "./components/SiteLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <ToastContainer />
      <SiteLayout />
    </>
  );
}

export default App;