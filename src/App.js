import './App.scss';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className='container'>
      <Header />
      <Contact allContacts />
    </div>
  );
}

export default App;
