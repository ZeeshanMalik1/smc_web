import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DepartmentsHero from '../components/DepartmentsHero';
import DepartmentsList from '../components/DepartmentsList';
import DepartmentsList2 from '../components/DepartmentsList2';

function Departments() {
  return (
    <>
      <Helmet>
        <title>Departments - SMC</title>
      </Helmet>
      <Header />
      <DepartmentsHero />
      <DepartmentsList />
      <DepartmentsList2 />
      <Footer />
    </>
  );
}

export default Departments;
