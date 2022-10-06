import React, { useState } from 'react'
import "./index.css"
import { BiChevronDown } from 'react-icons/bi';


export default function Dropdown() {

    const countries=[{name:"India",flag:"./assets/india.png"},{name:"USA",flag:"./assets/united-states.png"},
    {name:"UK",flag:"./assets/united-kingdom.png"},{name:"Italy",flag:"./assets/italy.png"},
    {name:"Malaysia",flag:"./assets/malaysia.png"}]

    const [active,setActive]=useState(false)
    const [selectedOption,setSelectedOption]=useState(countries[0])

    const getCountry=country=>{
        setSelectedOption(country)
        setActive(false)
    }

  return (
    <div className='custom-dropdown'>
        <div onClick={()=>setActive(!active)} className='dropdown-btn d-flex justify-content-between align-items-center'>
            
          <div className='d-flex'>
            <img src={selectedOption.flag} className='flag me-2' alt="flag"/>
            <p className='option-name'>{selectedOption.name}</p>
          </div>

            <BiChevronDown/>
        </div>
        
        {active?<div className='dropdown-content' id="dropdownContent">
            {countries.map(country=>(
                <div className='dropdown-list-item d-flex' onClick={()=>getCountry(country)}>
                    <img src={country.flag} alt="flag" className='flag me-2'/>
                    <p>{country.name}</p>
                </div>
            ))}
            
        </div>:""}
        

    </div>
  )
}
