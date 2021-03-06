import { useDeno } from "aleph/react";
import React, { useEffect, useState,useRef ,useCallback } from "react";
import { useRouter } from 'https://deno.land/x/aleph/framework/react/mod.ts'
// import Logo from '~/components/logo.tsx'
import AddTask from "~/components/AddTask.tsx";
import Login from "~/components/Login.tsx";

export default function Home() {

  return (
    <div className="page">
      <head>
        <title>easy-todoist</title>
      </head>
      <body className="bg-right">
        <Login/>
      </body>
    </div>
  );
}