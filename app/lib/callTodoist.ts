import { v4 } from "https://deno.land/std@0.128.0/uuid/mod.ts";
import { format } from "https://deno.land/std@0.128.0/datetime/mod.ts";



export default async function callTodoist(content="",dueDate=new Date()) {

  const auth="7fd3b706e0f0f12f1043d353e90fa8e08ff7df7f";

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

  console.log(content);
  console.log(dueDate);
  console.log(auth);

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