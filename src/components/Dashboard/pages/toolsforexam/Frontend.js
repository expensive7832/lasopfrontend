import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Spinner } from "reactstrap"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


function Frontend() {


  const [mode, setMode] = useState(false)
  const [data, setData] = useState({language: "", files: null})

  window.onmessage = function (e) {
    if (e?.data && e?.data?.language) {
        setData({language: e?.data?.language, files: e?.data?.files})
        // handle the e.data which contains the code object
    }
};



const saveCode = () =>{
  const { language, files } = data
  
  var iFrame = document.getElementById('oc-editor'); // add an ID for the <iframe tag
 iFrame.contentWindow.postMessage({
     eventType: 'populateCode',
     language: language,
     files: files
 }, "*");

} 


  return (
    <div className='frontend'>

      <div className='d-flex justify-content-around mb-4  align-items-center '>

        <CountdownCircleTimer
        size={100}
          isPlaying
          duration={10}
          colors={['#00ff00', '#150d00', '#ff0000']}
          colorsTime={[100, 50, 20]}
          // onComplete={() => window.location.reload()}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>

        <Form>
          <FormGroup switch className='d-flex align-items-center '>
            <Input className='fs-3' onChange={(e) => setMode((prev) => !prev)} type="switch" role="switch" />
            <Label check>Mode</Label>
          </FormGroup>
        </Form>


      </div>

      <div className="row">
        <div className="">
          {mode ?
            <>
              <iframe

                frameBorder="0"
                height="450px"
                src="https://onecompiler.com/embed/?theme=dark&codeChangeEvent=true&hideStdin=true"
                width="100%"
              ></iframe>
            </>
            :
            <>
              <iframe

                frameBorder="0"
                height="450px"
                src="https://onecompiler.com/embed/?codeChangeEvent=true&hideStdin=true"
                width="100%"
              ></iframe>
            </>
          }

          <button className='btn btn-md btn-dark' onClick={saveCode}>Submit</button>

        </div>

      </div>


      <iframe
      id="oc-editor"

frameBorder="0"
height="450px"
src="https://onecompiler.com/embed/?theme=dark&codeChangeEvent=true&hideStdin=true&listenToEvents=true"
width="100%"
></iframe>

      
    </div>


  )
}

export default Frontend