import React from 'react';
import './App.css';
import axios from 'axios';


function getData(){
  const url = '/discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2019-10-22';
  console.log ("check!");
  axios.get(url).then(response => console.log(response));

}

function App() {
  getData();
  return (
    <div className="App">
      <p>Movie App</p>
    </div>
  );
}

export default App;
