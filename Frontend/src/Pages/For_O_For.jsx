import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const For_O_For = () => {

    const Forwared = () => {
        return <Navigate to="http://192.168.1.1"/>
    }

    useEffect(() => {
        // setInterval(() => {
            Forwared()
        // }, 1000)
    },[Forwared])
  return (
    <>
    <center>
        <h1>Page Not Found</h1>
    </center>
    </>
  )
}

export default For_O_For