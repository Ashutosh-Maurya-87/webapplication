import logo from './logo.svg';
import './App.css';
import { Button, Link } from '@material-ui/core'
import CompC from './CompC';
import { createContext } from 'react';

const FirstName = createContext();
const LastName = createContext();

const App = () => {

  return (
    <>
      <div className="main-div">
        <div className='nav-div'>
          <Link href="#" >Home</Link>
          <Link href="#" >Feedback</Link>
          <Link href="#" >FAQ</Link>
          <Link href="#" >Contact</Link>
        </div>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <FirstName.Provider value="AShu">
          <LastName.Provider value="Maurya">
            <CompC />
          </LastName.Provider>
        </FirstName.Provider>

        </div>
    </>
      );
}

      export default App;
      export {FirstName, LastName} ;
