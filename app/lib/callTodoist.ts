import { v4 } from "https://deno.land/std@0.128.0/uuid/mod.ts";
import { format } from "https://deno.land/std@0.128.0/datetime/mod.ts";



export default async function callTodoist(content="",dueDate=new Date(),auth="") {
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

  const response=await fetch(baseUrl,{
    method:"POST",
    headers:postHeader,
    body:JSON.stringify(postBody)
  });
  
  const responseJson=response.json();
  console.log(responseJson);
  
  

}

declare global{
  interface Crypto{
    randomUUID:()=>string;
  }
}