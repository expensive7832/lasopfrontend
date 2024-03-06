import React from 'react'
import Frontend from './toolsforexam/Frontend'
import DataAnalytics from "./toolsforexam/DataAnalytics"

function ExamByDpt({id, title}) {



  return (
    <div className='exambydpt'>

        <h3 className='text-capitalize my-4'>{title}</h3>

        {title === "frontend" && <Frontend/>}
        {title === "data-analytics" && <DataAnalytics/>}

    </div>
  )
}
export default ExamByDpt