

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>

<Navbar title = "Textutils" about='about'/>
      <div className='container my-3'>
            <Textform Heading="Type the text to be analyzed"/>
      </div>
    </>
    
  );
}

export default App;
