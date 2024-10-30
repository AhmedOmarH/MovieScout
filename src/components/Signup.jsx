import axios from 'axios';
import{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const nevigate=useNavigate();
    const [Inputvalue,setIputvalue]=useState({
        name:'',
        email:'',
        password:''
    })


  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
            
            <form  onSubmit={(e)=>{
                e.preventDefault();
                console.log(Inputvalue);
                axios.post('http://localhost:3001/register',{Inputvalue})
                .then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
                nevigate('/login')}}action="#" method="POST" className="space-y-4">
                {/* <!-- Full Name --> */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Username</label>
                    <input type="text" id="name" name="name" required 
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" onChange={(e)=>{
                            setIputvalue({...Inputvalue,name:e.target.value})
                        }}/>
                </div>

                {/* <!-- Email Address --> */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" required 
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={(e)=>{
                            setIputvalue({...Inputvalue,email:e.target.value})
                        }}
                        />
                </div>

                {/* <!-- Password --> */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" required onChange={(e)=>{
                            setIputvalue({...Inputvalue,password:e.target.value})
                        }}
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                {/* <!-- Confirm Password --> */}
                <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required 
                        className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                {/* <!-- Sign Up Button --> */}
                <div>
                    <button type="submit" 
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium">
                        Sign Up
                    </button>
                </div>

                {/* <!-- Already have an account --> */}
                <p className="text-center text-sm text-gray-600">Already have an account? 
                    <Link  to="/login" className="text-indigo-600 hover:text-indigo-500">Log In</Link>
                </p>
            </form>
        </div>
    </div>
    </>
    
  )
}

export default Signup