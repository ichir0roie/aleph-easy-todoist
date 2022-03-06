import React, { useState } from "react";

//https://www.npmjs.com/package/react-datepicker
// import DatePicker  from "https://esm.sh/react-datepicker@4.7.0"

import { format } from "https://deno.land/std@0.128.0/datetime/mod.ts";

// import "../style/react-datepicker.css"

import CT from "~/lib/callTodoist.ts";

export default function AddTask(props: any) {
  const token = props.token;
  console.log(token);

  const [startDate, setStartDate] = useState(format(new Date(), "yyyy/MM/dd"));
  const [content, setContent] = useState("");
  const [resView, setResView] = useState("");

  // const content=TextBox({label:"content",});

  function send() {
    console.log(content);
    console.log(startDate);
    console.log(token);
    CT(content, startDate, token).then(async (res) => {
      console.log("return add task?.")
      if (res == null) return;
      res.json().then((text)=>{
          setResView(JSON.stringify(text));
      })
    });
  }

  return (
    <body className="bg-right">
      <div className="container">
        <h4 className="mb-3">add task</h4>
        <div className="col-md-8 order-md-1">
          {/* {content} */}
          <TextBox label="content" value={content} setValue={setContent} />
          <button className="btn btn-primary" onClick={send}>send</button>
          <div className="col-md-6 mb-3">
            {/* <label>due-date</label> */}
            {/* <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} dateFormat="yyyy-MM-dd"/> */}
          </div>
          <TextBox label="due date" value={startDate} setValue={setStartDate} />

          <div className="col-md-6 mb-3">
            <label />
          </div>

          <div className="col-md-6 mb-3">
            <label>result</label>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{resView}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label>api token</label>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{token}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

function TextBox(
  { label = "", value = "", setValue = null }: {
    label: string;
    value: string;
    setValue: any;
  },
) {
  return (
    <div className="col-md-6 mb-3">
      <label>{label}</label>
      <input
        type="text"
        className="form-control"
        id="firstName"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
