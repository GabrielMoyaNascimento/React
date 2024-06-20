import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <div>
        <MyForm user={{name: 'Javier', email: 'javier@gmail.com', bio: 'I am Javier', role: 'admin'}}/>
      </div>
    </div>
  );
}

export default App;
