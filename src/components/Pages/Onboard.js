import React, { useCallback } from 'react'
import First from '../SignupFIles/First'
import Second from '../SignupFIles/Second'
import Third from '../SignupFIles/Third'
import { useDispatch, useSelector } from 'react-redux'
import classroom from "./../../assets/classroom.png"
import { Stepper } from 'react-form-stepper';
import "./onboard.css"
import Navbar from './../navbarfiles/Navbar'
import Footer from './../footerfiles/Footer'

function Onboard() {



  const page = useSelector((state) => state?.onboard?.page)

  const Other = () => page === 2 ? <Second /> : <Third />




  return (
    <>
    <Navbar/>
    <div className="onboard container-fluid">


      <div className="row">

        <div className="col-lg-6">

          <Stepper
            className=''
            steps={[{ label: 'Step 1', className: `${page === 1 ? "bg-primary" : ""}` }, { label: 'Step 2', className: `${page === 2 ? "stepActive" : ""}` }, { label: 'Step 3', className: `${page === 3 ? "stepActive" : ""}`  }]}
            activeStep={page}
            bgColor="#000"
          />

          {
            page === 1 ?
              <First />
              :
              <Other />
          }


        </div>
        <div className="col-md-6 d-none d-lg-block">
          <img src={classroom} alt="classroom" className='img-fluid' />

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Onboard