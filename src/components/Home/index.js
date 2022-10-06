import React,{useState} from 'react';
import { BiCaretDown, BiChevronDown } from 'react-icons/bi';

import { Col, Container, Row } from 'react-bootstrap'


import {BiChevronRight} from "react-icons/bi"

import { Accordion } from 'react-bootstrap'

import {FaLinkedinIn,FaInstagram, FaTwitter, FaYoutube, FaFacebookF} from "react-icons/fa"
import {RiSearchLine} from "react-icons/ri"

import "./index.css"
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Dropdown from '../Dropdown'


export default function Home() {

  

  const languages=["English","Hindi","Telugu","Kannada","Malayalam"];

  const cities=["Mumbai","Pune","Hyderabad"]

  const [cityActive,setCityActive]=useState(false)

  const [langActive,setLangActive]=useState(false)

  const [selectedLang,setSelectedLang]=useState("English");

  const [selectedCity,setSelectedCity]=useState("Mumbai");

  const getLanguage=lang=>{
      setSelectedLang(lang)
      setLangActive(false)
  };

  const getCity=city=>{
    setSelectedCity(city);
    setCityActive(false)
  }

 
  const localities=[{city:"Lower Parel",num:70},{city:"Powai",num:923},{city:"Malad West",num:923},
  {city:"Borivali West",num:1000},{city:"Bandra Kurla Complex",num:350},{city:"Vasai",num:20},
  {city:"Juhu",num:200},{city:"Girgaon Chowpatty",num:160}]


  // window.onclick=function(e){
  //   console.log(e.target)
  //   console.log(document.getElementById("dropdownEle"))
  //   if(e.target!==document.getElementById("dropdownEle")){
   
  //     setCityActive(false)
  //     setLangActive(false)
  //   }

  // }

  return (
    <>
    <div className='banner-bg'>
        <Navbar/>
        <div className='banner-content'>
          
            <div className='d-flex'>
                  <Link to="/"><img src="./assets/header-logo.png" className="header-logo" alt="header logo"/></Link>
                   <h2 className='ms-3 poppins-font-semibold text-upper header-head'>nom-<span  className='header-main-head'>nom</span></h2>
              </div>

            <p className='poppins-font-medium banner-desc'>Discover the best food & drinks in Mumbai</p>
            <div className='search-container d-flex'>
            

                <div className='banner-dropdown-container'>
                    <div onClick={()=>setCityActive(!cityActive)}  id="dropdownEle" className='banner-dropdown d-flex justify-content-between align-items-center'>
                        
                      <div className='d-flex'>
                        <img src="./assets/location.png" className='location' alt="location"/>
                        <p className='option-name ms-3 city-name poppins-font-light'>{selectedCity}</p>
                      </div>

                      <BiCaretDown/>
                    </div>
        
                    {cityActive?<div className='dropdown-content' id="dropdownContent">
                        {cities.map(city=>(
                            <div className='dropdown-list-item d-flex' onClick={()=>getCity(city)}>
                                
                                <p>{city}</p>
                            </div>
                        ))}
                        
                    </div>:""}
        
                  </div>

              <div className='w-100 ps-2'>
                <RiSearchLine className='search-icon'/>
                <input type="search" className='search-input ms-2 poppins-font-light' placeholder='Search for restaurant, cuisine or a dish'/>
             
              </div>
               
              
            </div>
        </div>
    </div>
   

    <Container>
  
        {/*facilities section */}
        <Row className='mt-3 mb-5'>
            <Col xs={12} md={6} lg={4} className="mb-2">
              <div>
                  <img src="./assets/veg-biryani.png" className='facility-img' alt="veg biryani"/>
              </div>
              <div className='desc-container'>
                <h3 className='poppins-font-medium facilities-title'>Order Online</h3>
                <p className='poppins-font-light facilities-desc'>Stay home and order to your doorstep</p>
              </div>
               
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-2">
              <div>
                  <img src="./assets/wine.png" className='facility-img' alt="wine"/>
              </div>
              <div className='desc-container'>
                <h3 className='poppins-font-medium facilities-title'>Dining</h3>
                <p className='poppins-font-light facilities-desc'>View the city’s favourite dining venues</p>
              </div>
           
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-2">
              <div>
                  <img src="./assets/club.png" className=' facility-img' alt="club"/>
              </div>
              <div className='desc-container'>
                <h3 className='poppins-font-medium facilities-title'>Nightlife and Clubs</h3>
                <p className='poppins-font-light facilities-desc'>Explore the city’s top nightlife outlets</p>
              </div>
              
            </Col>
        </Row>

         {/* collections section */}
        <Row className="collections-section">
           <h2 className='poppins-font-medium'>Collections</h2>
           <div>
              <p className='poppins-font-light'>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>
           </div>

           <Col lg={3} md={4} sm={6} xs={12} className="mb-3">
              <div className="collection">
                  <img src="./assets/welcome.png" className="w-100 collection-img" alt="welcome"/>
                  <div className='collection-desc-container'>
                      <p className='poppins-font-regular collection-desc-title'>Newly Opened</p>
                      <p className='poppins-font-regular places-num'>34 Places</p>
                  </div>
              </div>
           </Col>

           <Col lg={3} md={4} sm={6} xs={12} className="mb-3">
              <div className="collection">
                  <img src="./assets/bestofmumbai.png" className="w-100 collection-img" alt="gate way"/>
                  <div className='collection-desc-container'>
                      <p className='poppins-font-regular collection-desc-title'>Best Of Mumbai</p>
                      <p className='poppins-font-regular places-num'>139 Places</p>
                  </div>
              </div>
           </Col>

           <Col lg={3} md={4} sm={6} xs={12} className="mb-3">
              <div className="collection">
                  <img src="./assets/trending.png" className="w-100 collection-img" alt="trending"/>
                  <div className='collection-desc-container'>
                      <p className='poppins-font-regular collection-desc-title'>Trending This Week</p>
                      <p className='poppins-font-regular places-num'>25 Places</p>
                  </div>
              </div>
           </Col>

           <Col lg={3} md={4} sm={6} xs={12} className="mb-3">
              <div className="collection">
                  <img src="./assets/workfriendly.png" className="w-100 collection-img" alt="work friendly"/>
                  <div className='collection-desc-container'>
                      <p className='poppins-font-regular collection-desc-title'>Work Friendly Places!</p>
                      <p className='poppins-font-regular places-num'>25 Places</p>
                  </div>
              </div>
           </Col>
           
        </Row>

        {/* popular localities section */}
        <Row className='popular-locaties-section'>
            <h2 className='poppins-font-regular localities-head'>Popular localities in and around <span className='poppins-font-semibold'>Mumbai</span></h2>

           
              {localities.map(locality=>(
                  
                  <Col lg={4} md={6} sm={6} xs={12} className="mb-3" >
                    <div className='locality-container d-flex justify-content-between align-items-center'>
                        <div>
                          <p className='poppins-font-light locality-name'>{locality.city}</p>
                          <p className='poppins-font-light locality-places'>{locality.num} places</p>
                        </div>
                        
                        <BiChevronRight className='right-icon'/>
                    </div>
                   
                  </Col>
                
              ))}
              <Col lg={4} md={6} sm={6} xs={12} className="mb-3" >
                    <div className='locality-container'>
                      <div className='see-more-container d-flex justify-content-center align-items-center'>
                          <p className='poppins-font-regular see-more-text'>see more</p>
                          <BiChevronRight className='right-icon rotated-icon'/>  
                      
                      </div>
                         
                        
                        
                    </div>
                   
                  </Col>
        </Row>

        {/* explore section */}      
        <Row className='explore-section'>
            <h2 className='poppins-font-medium explore-main-head'>Explore options near me</h2>
            <Col>
            
                <Accordion className='explore-options-wrapper' defaultActiveKey="0" >
                  <AccordionItem className='explore-option-container' eventKey="0">
                    <AccordionHeader className='poppins-font-light explore-option'>Popular cuisines near me</AccordionHeader>
                 
                    <AccordionBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className='explore-option-container' eventKey="1">
                    <AccordionHeader className='poppins-font-light explore-option'>Popular restaurant types near me  </AccordionHeader>
                 
                    <AccordionBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className='explore-option-container' eventKey="2">
                    <AccordionHeader className='poppins-font-light explore-option'>Top restaurant chains</AccordionHeader>
                    
                    <AccordionBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className='explore-option-container' eventKey="3">
                    <AccordionHeader className='poppins-font-light explore-option'>Cities we deliver to</AccordionHeader>
                   
                    <AccordionBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
            </Col>
        </Row>

        
    </Container>

    {/* footer */}
    <div className='footer-bg'>
      <div className='container'>
          <div className='row'>
            <div className='footer-head-container d-flex justify-content-between  align-items-center mt-5 mb-5'>
                <div className='d-flex'>
                    <Link to="/"><img src="./assets/footer-logo.png" className="footer-logo" alt="footer logo"/></Link>
                   <h2 className='ms-3 poppins-font-semibold text-upper footer-head'>nom-nom</h2>
                </div>
                <div>

                <div className='d-flex'>

                  <Dropdown/>

                  <div className='custom-dropdown ms-4'>
                    <div onClick={()=>setLangActive(!langActive)} className='dropdown-btn d-flex justify-content-between align-items-center'>
                        
                      <div className='d-flex'>
                        <img src="./assets/browser.png"  className="browser me-2" alt="browser"/>
                        <p className='option-name'>{selectedLang}</p>
                      </div>

                        <BiChevronDown/>
                    </div>
        
                    {langActive?<div className='dropdown-content' id="dropdownContent">
                        {languages.map(lang=>(
                            <div className='dropdown-list-item d-flex' onClick={()=>getLanguage(lang)}>
                                
                                <p>{lang}</p>
                            </div>
                        ))}
                        
                    </div>:""}
        
                  </div>

                 

                </div>
                    
                  


                </div>
                
            </div>

          </div>
          <div className='row'>
            <div className='col-sm-6 col-md-4 col-lg-3 footer-links-wrapper'>
                <ul className='footer-links-container'>
                  <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-header-link text-upper'>about nom-nom</Link></li>
                  <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Who We Are</Link></li>
                  <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Blog</Link></li>
                  <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Work With Us</Link></li>
                  <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Investor Relations</Link></li>
                  <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Report Fraud</Link></li>
                  <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Contact Us</Link></li>
                </ul>
              
            </div>

            <div className='col-sm-6 col-md-4 col-lg-2 footer-links-wrapper'>
                <ul className='footer-links-container'>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-header-link text-upper'>nomverse</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>NOM-NOM</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Feeding India</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Hyperpure</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Nomland</Link></li>
                </ul>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-2 footer-links-wrapper d-flex flex-column justify-content-between'>
                <ul className='footer-links-container'>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-header-link text-upper'>for restaurants</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Partner With Us</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Apps For You</Link></li>
                </ul>

                <ul className='footer-links-container'>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-header-link text-upper'>for enterprises</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>NOM-NOM For Work</Link></li>
                </ul>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-2 footer-links-wrapper'>
                <ul className='footer-links-container'>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-header-link text-upper'>learn more</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Privacy</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Security</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Terms</Link></li>
                    <li className='footer-link-item'><Link to="/" className='poppins-font-regular footer-link'>Sitemap</Link></li>
                </ul>
            </div>

            <div className='col-sm-6 col-md-4 col-lg-3 footer-links-wrapper'>
                <ul className='footer-links-container'>
                    <li><Link to="/" className='poppins-font-regular footer-header-link text-upper'>social links</Link></li>

                    <ul className='footer-icons-container d-flex'>
                      <li className='footer-icon-item'><Link to="/" className='footer-icon'><FaLinkedinIn/></Link></li>
                      <li className='footer-icon-item'><Link to="/" className='footer-icon'><FaInstagram/></Link></li>
                      <li className='footer-icon-item'><Link to="/" className='footer-icon'><FaTwitter/></Link></li>
                      <li className='footer-icon-item'><Link to="/" className='footer-icon'><FaYoutube/></Link></li>
                      <li className='footer-icon-item'><Link to="/" className='footer-icon'><FaFacebookF/></Link></li>
                    </ul>
                    <li className='mt-4'><Link to="/"><img src="./assets/google-play.png" alt="play store"/></Link></li>
                    <li className='mt-3'><Link to="/"><img src="./assets/apple-store.png" alt="apple store"/></Link></li>
                </ul>
            </div>
          </div>
      </div>
    </div>
   
  
  </>
  )
}
