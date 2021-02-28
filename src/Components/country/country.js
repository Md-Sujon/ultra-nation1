import React from 'react';

const Sujon = (props) => {
   const styleFlag={
       height:'100px',
       width:'200px'
    }
    const styleCountry={
        border:'2px solid lightgray'
    }
    const handAddCountry=props.handAddCountry;
    console.log(props);
    const {name,population,region,capital,flag}=props.country;
    
    return (
        <div style={styleCountry}>
            <h1>this is a {name}</h1>
            <img style={styleFlag} src={flag} alt=""/>
            <p>Populataion:{population}</p>
            <p><small>Regian:{region}</small></p>
            <p>Capital:{capital}</p>
            <button onClick={()=>handAddCountry(props.country)}>Add Population</button>
            
        </div>
    );
};

export default Sujon;