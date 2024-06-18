import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const redTitle = true;

  return (
    <div className="App">
      {/* Global CSS */}
      <div>
        <h1>React with CSS</h1>
      </div>

      {/* Component CSS */}
      <div>
        <MyComponent />
        <p className="my-paragraph">This paragraph is from App.js</p>
      </div>
    
      {/* Dynamic class */}
      <div>
        <h2 className={redTitle ? 'red-title' : 'title'}>Dynamic Class Title</h2>
      </div>

      {/* Module CSS */}
      <div>
        <Title />
      </div>
    </div>
  );
}

export default App;
