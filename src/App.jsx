import abt from "./assets/abstract2.png"
import NavComponent from "./components/NavComponent";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
      <div className=' bg-primarygray min-h-screen relative'>
        <img src={abt} alt="background design" className=" absolute top-0 left-[-20px] z-10" />
        <div className=" container mx-auto p-10">
          <NavComponent />
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
