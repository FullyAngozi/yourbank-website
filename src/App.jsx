import abt from './assets/abstract4.png'
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <div className=' container '>
        <Navbar />
        <h1 className=" bg-green font-lexend font-bold text-4xl p-60">I am just testing out colors</h1>
        <img src={abt} alt="" />
      </div>
    </>
  );
}

export default App;
