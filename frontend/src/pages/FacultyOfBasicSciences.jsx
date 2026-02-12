import React from 'react'
import Header from "../components/Header";

import Footer from '../components/Footer';
import BasicSciencesList from './BasicSciencesList';
const FacultyOfBasicSciences = () => {
  return (
    <div>
       <Header />
     
      <BasicSciencesList/>
       <Footer/>
    </div>
  )
}

export default FacultyOfBasicSciences
