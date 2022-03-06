import { useDeno } from "aleph/react";
import React, { useEffect, useState,useRef ,useCallback } from "react";
import { useRouter } from 'https://deno.land/x/aleph/framework/react/mod.ts'
// import Logo from '~/components/logo.tsx'
import AddTask from "~/components/AddTask.tsx";
import Login from "~/components/Login.tsx";


import { redirect } from 'https://deno.land/x/aleph/framework/core/mod.ts'

export default function Home() {

  console.log("render");
  const {
    query,         // URLSearchParams, `query.get('theme')` should be 'dark'
  } = useRouter()

  return (
    <div className="page">
      <head>
        <title>easy-todoist</title>
      </head>
      <body className="bg-right">
        <AddTask token={query.get("token")}/>
      </body>
    </div>
  );
}