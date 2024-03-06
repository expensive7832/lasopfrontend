import React from 'react'
import "./dashboardhome.css"

import message from "./../../../assets/message.png"
import dpt from "./../../../assets/bookmark-2.png"
import user from "./../../../assets/Notification.png"
import bkmark from "./../../../assets/bookmark-2.svg"
import thickcalender from "./../../../assets/thickcalender.png"
import share from "./../../../assets/share.png"
import profAdd from "./../../../assets/profile-3user.svg"
import house from "./../../../assets/house.svg"
import teacher from "./../../../assets/teacher2.svg"
import chrt from "./../../../assets/cohort.svg"
import comp from "./../../../assets/completed.svg"
import grad from "./../../../assets/graduate.svg"
import stud from "./../../../assets/student.svg"
import TopForm from './TopForm'

function Home() {

    const datas = [
        {title: "No Of Students", total: 120, icon: profAdd},
        {title: "No Of Staffs", total: 12, icon: teacher},
        {title: "No Of centers", total: 8, icon: house},
        {title: "No Of Courses", total: 12, icon: bkmark},
        {title: "Current Cohorts", total: 6, icon: chrt},
        {title: "Completed Cohorts", total: 20, icon: comp},
        {title: "New Applicant", total: 64, icon: stud},
        {title: "Graduates", total: 97, icon: grad},
        
    ]

    const recentpayment = [
        {pay: 40000, img: user, name: "Nathaniel Kingsley", dpt: "UI/UX", date: new Date().toLocaleDateString()},
        {pay: 40000, img: user, name: "Nathaniel Kingsley", dpt: "UI/UX", date: new Date().toLocaleDateString()},
        {pay: 40000, img: user, name: "Nathaniel Kingsley", dpt: "UI/UX",  date: new Date().toLocaleDateString()},
        {pay: 40000, img: user, name: "Nathaniel Kingsley", dpt: "UI/UX", date: new Date().toLocaleDateString()},
        
    ]
    const upcs = [
        { img: thickcalender, title: "Graduation and blah",  date: new Date().toLocaleDateString()},
        { img: thickcalender, title: "Graduation and blah",  date: new Date().toLocaleDateString()},
        { img: thickcalender, title: "Graduation and blah",   date: new Date().toLocaleDateString()},
        { img: thickcalender, title: "Graduation and blah",  date: new Date().toLocaleDateString()},
        
    ]

  return (
    <div className="dashboard-home">
      <TopForm title="Overview"/>

        <div className="container-fluid py-3">
            <div className="row g-2">
                {datas?.map((data, i) =>(
                    <div key={i} className="col-md-3 col-sm-6 col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-end">
                                <div className="left">
                                    <h6>{data?.title}</h6>
                                    <h2>{data?.total}</h2>
                                </div>
                                <img src={data?.icon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                )) }
            </div>
        </div>

        <div className="recent-activities">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="card">
                        <div className="card-body">
                            <p>Recent payment</p>
                            {recentpayment?.map((rp, i) =>(
                                <div className="d-flex first align-items-center flex-column flex-md-row justify-content-between">
                                    <div className="left w-100 d-flex align-items-center">
                                        <img src={rp?.img} alt="user" className=''/>
                                        <div >
                                            <p>{rp?.name}</p>
                                           <div className='d-flex'>
                                            <small>{rp?.dpt}</small>
                                            <small>{rp?.date}</small>
                                           </div>
                                        </div>
                                    </div>

                                    <div className="right">
                                        <p>₦{rp?.pay}</p>
                                    </div>
                                   
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="card">
                        <div className="card-body">
                           <div className="ind">
                           <p>Latest Applicants</p>
                            <small> see all</small>
                           </div>
                            {recentpayment?.map((rp, i) =>(
                                <div className="d-flex first align-items-center flex-column flex-md-row justify-content-between">
                                    <div className="left w-100 d-flex align-items-center">
                                        <img src={rp?.img} alt="user" className=''/>
                                        <div >
                                            <p>{rp?.name}</p>
                                           <div className='d-flex'>
                                            <small>{rp?.dpt}</small>
                                            <small>{rp?.date}</small>
                                           </div>
                                        </div>
                                    </div>

                                    <div className="right">
                                        <p>₦{rp?.pay}</p>
                                    </div>
                                   
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="card">
                        <div className="card-body">
                            <p>Upcoming Events</p>
                           
                            {upcs?.map((rp, i) =>(
                                <div className="d-flex first align-items-center flex-column flex-md-row justify-content-between">
                                    <div className="left w-100 d-flex align-items-center">
                                        <img src={rp?.img} alt="user" className=''/>
                                        <div >
                                            <p>{rp?.title}</p>
                                           
                                            <small>{rp?.date}</small>
                                        
                                        </div>
                                    </div>

                                    <div className="right justify-content-around d-flex align-items-center ">
                                        <img src={share} alt="" />
                                        <p className='share'>share</p>
                                    </div>
                                   
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Home