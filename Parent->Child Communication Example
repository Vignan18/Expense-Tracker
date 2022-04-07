import { useState } from 'react';

function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');
  
  function filterset(props){
      setFilterText(props.target.value);
  }

  return (
    <div>
      <SearchBar 
        filterText={filterText}  
        onFilterTextChange={filterset} />
    </div>
  );
}


function SearchBar({filterText,onFilterTextChange}) {
  return (
    <>
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Search..." 
        onChange={(e)=>{onFilterTextChange(e)} }/>
    </form>
    <p>{filterText}</p>
    </>
  );
}


export default function App() {
  return <FilterableProductTable />;
}
