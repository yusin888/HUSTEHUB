import './App.css';
// import LogInSignUp from './components/LogInSIgnUp/LogInSignUp';
import Header from './components/LogInSIgnUp/header';
import './App.css'
import BsTabs from './components/LogInSIgnUp/BsTabs';
function App() {
  return (
    <div className='App'>
      <Header/>
      {/* <LogInSignUp/> */}
      <BsTabs/>
    </div>
  );
}

export default App;
