import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

function Exams() {
  const navigate = useNavigate()

  const [courses, setCourses] = useState([])

  useEffect(() =>{
    axios.get(`${process.env.REACT_APP_API_URL}/getcourse`)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className="exam " data-aos="zoom-in" data-aos-duration="3000">
      <div className="container-xl  ">
        <div className="row g-2 gap-3">
          {courses?.map((course) =>(
            <Link to={`/dashboard/exam?id=${course?.id}&title=${course?.title}`} className='col-md-3 fw-bold  nav-link card p-md-5'>
              <p>{course.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Exams