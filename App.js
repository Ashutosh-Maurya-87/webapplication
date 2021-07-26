import logo from './logo.svg';
import './App.css';
import { Button, Link } from '@material-ui/core'

function App() {
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
    </div>
    </>
  );
}

export default App;
