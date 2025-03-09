import { useState } from "react";
import Header from "./component/header";
import Home from "./component/home";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  }

  return (
    <>
      <div className='min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${ darkmode ? bg-black : bg-white }'>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Home/>
      </div>
    </>
  );
}

export default App;
