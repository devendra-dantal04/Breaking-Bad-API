import './App.css';
import Headers from './components/Headers';
import Characters from './components/Characters';
import Search from './components/Search';
import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';


const App = () => {

  const [items,setItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [query,setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async ()  =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  }, [query]);


  

  return (
    <div className="container">
    <Headers />
    <Search getQuery={(q)=> setQuery(q)}/>
    <Characters isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
