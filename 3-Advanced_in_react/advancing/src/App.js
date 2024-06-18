import { useState } from 'react';
import './App.css';

import Lamborguini from './assets/lamborguini.png';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';

function App() {
  const name = "Matheus";
  const [userName] = useState(name);

  const cars = [
    {id: 1, brand: "Ford", km: 0, color: "red", newCar: true},
    {id: 2, brand: "Porsche", km: 9874, color: "blue", newCar: false},
    {id: 3, brand: "Fiat", km: 0, color: "black", newCar: true},
  ]

  return (
    <div className="App">
      <h1>Advancing in React</h1>
      
      {/* Image in public */}
      <div>
        <img src="./ferrari.png" alt="Ferrari" />
      </div>

      {/* Image in assets */}

      <div>
        <img src={Lamborguini} alt="Lamborguini" />
      </div>
      
      <div>
        <ManageData />
      </div>
      
      <div>
        <ListRender />
      </div>
      
      <div>
        <ConditionalRender />
      </div>
      
      {/* Using props */}
      <div>
        <ShowUserName name={userName}/>
      </div>
      
      {/* Using destructuring */}
      <div>
        <CarDetails brand="Ferrari" km="0" color="red" newCar={true}/>
      </div>
      
      {/* Re-using components */}
      <div>
        <CarDetails brand="Lamborguini" km="9874" color="blue" newCar={false} />
      </div>
      
      {/* Re-using components */}
      <div>
        <CarDetails brand="Bugatti" km="87368" color="black" newCar={false} />
      </div>

      {/* Loop in array of objects */}
      <div>
        {cars.map(car => (
          <CarDetails
            brand={car.brand}
            km={car.km}
            color={car.color}
            newCar={car.newCar}
          />
        ))}
      </div>

      {/* Fragment */}
      <div>
        <Fragment propFragment="test" />
      </div>
    </div>
  );
}

export default App;
