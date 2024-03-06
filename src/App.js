import React, { lazy, Suspense, useLayoutEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "aos/dist/aos.js"
import "aos/dist/aos.css"
import AOS from "aos"
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastContainer} from 'react-toastify';
import { useSelector } from 'react-redux';


const Home = lazy(() => import("./components/Pages/Home"))
const Course = lazy(() => import("./components/Pages/Course"))
const Onboard = lazy(() => import("./components/Pages/Onboard"))
const Login = lazy(() => import("./components/Pages/Login"))
const Hire = lazy(() => import("./components/Pages/Hire"))
const Calendar = lazy(() => import("./components/Pages/Calendar"))
const Faq = lazy(() => import("./components/Pages/FaqPage"))
const NotFound = lazy(() => import("./components/Pages/NotFound"))
const About = lazy(() => import("./components/Pages/About"))
const Contact = lazy(() => import("./components/Pages/Contact"))
const Courses = lazy(() => import("./components/Pages/Courses"))
const Blog = lazy(() => import("./components/Pages/Blog"))
const ForgetPassword = lazy(() => import("./components/Pages/ForgetPassword"))
const Blogdetails = lazy(() => import("./components/Pages/Blogdetails"))
const Dashboard = lazy(() => import("./components/Dashboard/Layout"))



function App() {
  
  useLayoutEffect(() =>{
    AOS.init({
      duration: 3000,
      easing: 'ease-in-out',
      delay: 100,
    })

   
  }, [])



  return (
    <Suspense fallback={
      <div className='anime position-absolute top-50 start-50  translate-middle '>
        <img style={{width: "5rem", objectFit: "contain"}} src="./../images/logo.png" alt="logo" />
      </div>
    }>
      <BrowserRouter>

       
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={ <NotFound/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/signup" element={ <Onboard/> }/>
          <Route path="/forgetpassword" element={ <ForgetPassword/> }/>
          <Route path="/hire" element={ <Hire/> }/>
          <Route path="/courses" element={ <Courses/> }/>
          <Route path="/calendar" element={ <Calendar/> }/>
          <Route path="/faq" element={ <Faq/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/blog" element={ <Blog /> }/>
          <Route path="/blog/:id" element={<Blogdetails/>}/>
          <Route path="/course/:id" element={<Course/>}/>
          <Route path="/dashboard/:text/?" element={<Dashboard/>}/>
        </Routes>


      
        
      
      </BrowserRouter>
      <ToastContainer
      position='top-center'
      />
    </Suspense>
  );
}

export default App;
