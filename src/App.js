import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home/Home';
import Auth from './components/pages/Auth/Auth';
import Profile from './components/pages/Profile/Profile';

function App() {
  return (
    <div className="App">
        {/* <div className='blur' style={{top:'30%'}}></div>
        <div className='blur' style={{left:'70%',top:'-10%'}}></div> */}
        {/* <Auth/> */}
        <Profile/>
        {/* <Home/> */}

    </div>
  );
}

export default App;
 