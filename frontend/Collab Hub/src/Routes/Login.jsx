import React from 'react'

function callReturn()
{
  window.location.href = "http://localhost:4040"
}
function Login() {
  return (
    <>
    <Header />
     <h2 onClick={()=>callReturn()}>hi login</h2>
    </>
  )
}

export default Login