import logo from './logo.svg';
import './App.css';
import Fullname from './Components/Profile/Fullname';
import Address from './Components/Profile/Address';
import ProfilePhoto from './Components/Profile/ProfilePhoto';


function App() {
  return (
    <div className='Design'> 
      <ProfilePhoto />
      <Fullname />
      <Address />


    </div>
  );
}

export default App;
