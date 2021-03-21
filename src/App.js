import React from 'react';
import WorkoutCard from './Components/WorkoutCard';
import './Styles.css';
import {Data} from './Data.js';

function App() {
  return (
    <div className="Container">
      <WorkoutCard workout={Data}/>
    </div>
  );
}

export default App;

/*

- create workout card and test with one object
-create layout with flexbox
-create an array of objects to loop through, with:
  -image
  -title
  -length
  -distance
  -view details: true/false
  -workouts (Number)
  -instructorImage
-when active, decreased box-shadow

*/