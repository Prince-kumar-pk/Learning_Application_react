import React, { useState } from 'react'

const CreaterLoginSignUp = ({islogin}) => {


  const [registration, setRegistration] = useState(false);
if(registration){
  return(
    <div className="flex flex-col justify-center align-middle">

       <h1 className="tetx-4xl text-center">Login</h1>

        <form className=' ml-auto mr-auto mt-20'>
            <input type="text" name="user" id="user" className="p-3" placeholder='Name' /> <br />
            <input type="text" name="profile" id="profile" className="p-3" placeholder='profile link' /> <br />
            <input type="text" name="company" id="company" className="p-3" placeholder='company' /> <br />
            <input type="email" name="email" id="email" className="p-3" placeholder='Email id' /> <br />
            <input type="password" name="pass" id="pass" className="p-3 mt-2" placeholder='Password' /> <br />
            <button type="submit" className='p-2 border-2 w-28 mt-6 ml-5
             bg-blue-400' onClick={()=>{setRegistration(false)}}>Register</button>
        </form>
    </div>
  )
}
else

  return (
    <div className="flex flex-col justify-center align-middle">

       <h1 className="tetx-4xl text-center">Login</h1>

        <form className=' ml-auto mr-auto mt-20'>
            <input type="text" name="user" id="user" className="p-3" placeholder='User Name' /> <br />
            <input type="password" name="pass" id="pass" className="p-3 mt-2" placeholder='Password' /> <br />
            <button type="submit" className='p-2 border-2 w-28 mt-6
             bg-blue-400' onClick={()=> islogin(true)
             }>Login</button>
            <button type="submit" className='p-2 border-2 w-28 mt-6 ml-5
             bg-blue-400' onClick={()=>{setRegistration(true)}}>Register</button>
        </form>
    </div>
  )
}


export default CreaterLoginSignUp