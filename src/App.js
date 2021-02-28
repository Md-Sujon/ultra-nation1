import logo from './logo.svg';
import React ,{useEffect, useState} from 'react';
import './App.css';
import Sujon from './Components/country/country';
import Cart from './Components/cart/cart';


function App() {
  const [countriys,setCountriys]=useState([]);
  const [cart,setCart]=useState([]);

useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>
      {
        setCountriys(data)
       const names=data.map(countrys=>countrys.name)
      // //  console.log(names);
      })
    .catch(error=>console.log(error))
  },[])

  const handAddCountry=(country)=>{
   const newCart=[...cart,country]
   setCart(newCart)
  }


  return (
    <div className="App">

      <h1>Country Loaded:{countriys.length}</h1>
      <h4>Country Add:{cart.length}</h4>
        <Cart cart={cart}></Cart>          
    {
      countriys.map(country=><Sujon country={country}  key={country.code} handAddCountry={handAddCountry}></Sujon>)
      }
    


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
