import { v4 } from "https://deno.land/std@0.128.0/uuid/mod.ts";
import { format } from "https://deno.land/std@0.128.0/datetime/mod.ts";
import { parse } from "https://deno.land/std@0.128.0/datetime/mod.ts";

// import {auth} from '~/lib/authToken.ts'

// const auth=localStorage.getItem("apiToken");

export default async function callTodoist(content="",dueDateString="",auth="") {
  console.log(auth);

  const dueDate=parse(dueDateString,"yyyy/MM/dd")
  const baseUrl:string="https://api.todoist.com/rest/v1/tasks";
  let postBody={
    "content":content,
    "due_string":format(dueDate,"yyyy-MM-dd"),
  }

  const uuid=globalThis.crypto.randomUUID();

  let postHeader={
    "Content-Type":"application/json",
    "X-Request-Id":uuid,
    "Authorization": "Bearer "+auth,
  }


  const res =await fetch(baseUrl,{
    method:"POST",
    headers:postHeader,
    body:JSON.stringify(postBody)
  })
  // then((response)=>{
  //   const responseJson=response.json();
  //   console.log(responseJson);
  // });
  console.log(res);
  return res;
}

declare global{
  interface Crypto{
    randomUUID:()=>string;
  }
}