import React from 'react';
import './SearchBox.css';

const Searchbox = ({placeholder , handleChange}) => {
  return(
    <input  
    className=' pa3 ba b--green bg-lightest-blue'
    type='search'
          placeholder={ placeholder}
          onChange={handleChange}
    />
  );
}
export default Searchbox;