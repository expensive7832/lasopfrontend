import React from 'react'
import Navbar from './../navbarfiles/Navbar'
import Footer from './../footerfiles/Footer'
import "./calendar.css"
import { centercodes } from '../../fakedb/courseData'
import { Link } from 'react-router-dom'
function Calendar() {
    return (
        <>
        <Navbar/>
        
        <div className="calendar">

<div className="calendarhero ">

    <div className="container p-5">
        <div className="row align-items-center">
            <div className='col-md-6 col-12'>
                <h2 className="h2"> Academic Calendar </h2>
                <p className='p'>This calendar is updated every month to keep you well informed and ahead.
                    Last updated: July 8th, 2022.</p>
                <div className='info-btn container-fluid'>
                    <p>Center Codes:</p>
                    <div className="row align-items-center">
                        {centercodes?.map((name) => (
                            name !== "" && <small className='text-center p-1 col-4 mx-1 '> {name}</small>
                        ))}

                    </div>
                </div>
            </div>


        </div>

    </div>


</div>

{/* <div className="container calendar-tabs my-5">
    <button className='active'>Frontend</button>
    <button>Backend</button>
    <button>Fullstack</button>
    <button>UI/UX</button>
    <button>App Dev</button>
    <button>Data & AI</button>

</div> */}

<div className="calendar-table table-responsive-md container">
    <table class="table text-center">
        <thead>
            <tr>
                <th scope="col">MONTH</th>
                <th scope="col">Code</th>
                <th scope="col">Start</th>
                <th scope="col">end</th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td scope="row">SEPTEMBER</td>
                <td>SEPT OL</td>
                <td>SEPT 04</td>
                <td>MAR 03</td>
                <button className="btn">
                    <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
            <tr >
                <td scope="row">OCTOBER</td>
                <td>OCT OL</td>
                <td>OCT 07</td>
                <td>APR 06</td>
                <button className="btn">
                <Link className='nav-link text-white ' to="/courses">Apply</Link>
                </button>
               
            </tr>
          
            
           
        </tbody>
    </table>
</div>


</div>

        <Footer/>
        </>

    )
}

export default Calendar