import { useDeno } from "aleph/react";
import React, { useEffect, useState } from "react";
// import Logo from '~/components/logo.tsx'
import AddTask from "~/components/AddTask.tsx";
import Login from "~/components/Login.tsx";


import {getApiToken} from "~/lib/localStrage.ts"

export default function Home() {
  var pageContent;

  
  var apiToken =getApiToken();
  console.log(apiToken);
  if(apiToken!=null&&apiToken!=""){
    pageContent=AddTask()
  }else{
    pageContent=Login()
  }

  return (
    <div className="page">
      <head>
        <title>easy-todoist</title>
      </head>
      <body className="bg-right">
        {pageContent}
      </body>
    </div>
  );
}
