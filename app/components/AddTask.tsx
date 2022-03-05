import React,{useState} from 'react'

//https://www.npmjs.com/package/react-datepicker
//https://reactdatepicker.com/#example-custom-date-format
import DatePicker  from "https://esm.sh/react-datepicker@4.7.0"


import "../style/react-datepicker.css"

export default function AddTask({ size = 75 }: { size?: number }) {

  
  const [startDate, setStartDate] = useState(new Date());

  return (
    <body className="bg-right">
      <div className="container">
        <h4 className="mb-3">add task</h4>
        <div className="col-md-8 order-md-1">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">text</label>
            <input type="text" className="form-control" id="firstName"/>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input type="text" className="form-control" id="firstName"/>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">date</label>
            <DatePicker 
              selected={startDate} 
              onChange={(date:Date) => setStartDate(date)} 
              dateFormat="yyyy/MM/dd"
            />
          </div>
          
          

        </div>
      </div>
    </body>

  )
}

