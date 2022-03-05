import React,{useState} from 'react'

//https://www.npmjs.com/package/react-datepicker
// import DatePicker  from "https://esm.sh/react-datepicker@4.7.0"


import "../style/react-datepicker.css"

import CT from "~/lib/callTodoist.ts"

export default function AddTask({ size = 75 }: { size?: number }) {

  
  const [startDate, setStartDate] = useState(new Date());
  const [auth, setAuth] = useState("7fd3b706e0f0f12f1043d353e90fa8e08ff7df7f");

  const [content, setContent] = useState("");

  // const content=TextBox({label:"content",});

  function send(){
    console.log(content)
    CT(content,startDate,auth);
  }

  return (
    <body className="bg-right">
      <div className="container">
        <h4 className="mb-3">add task</h4>
        <div className="col-md-8 order-md-1">
          {/* {content} */}
          <TextBox label="content" value={content} setValue={setContent}/>
          <div className="col-md-6 mb-3">
            <label>due-date</label>
            {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}  */}
            {/* dateFormat="yyyy-MM-dd" */}
            {/* /> */}
          </div>

          <LabelAndText label="auth token" text={auth}/>

          <button className="btn btn-primary" onClick={send} >send</button>

        </div>
      </div>
    </body>

  )
}

function TextBox({label="",value="",setValue=null}:{label:string,value:string,setValue:any}) {


  // const [value, setValue] = useState("");


  return (
    <div className="col-md-6 mb-3">
    <label htmlFor="firstName">{label}</label>
    <input type="text" className="form-control" id="firstName" value={value} onChange={(e)=>setValue(e.target.value)} />
  </div>
  )
}


function LabelAndText({label="",text="" }: { label:string,text:string }) {
  return (
    <div className="col-md-6 mb-4">
    <label htmlFor="firstName">{label} : {text}</label>
  </div>
  )
}




