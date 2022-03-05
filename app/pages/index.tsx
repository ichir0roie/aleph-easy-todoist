import { useDeno } from 'aleph/react'
import React from 'react'
// import Logo from '~/components/logo.tsx'
import AddTask from '~/components/AddTask.tsx'


export default function Home() {

  return (
    <div className="page">
      <head>
        <title>easy-todoist</title>
      </head>
      <AddTask/>   
    </div>
  )
}
