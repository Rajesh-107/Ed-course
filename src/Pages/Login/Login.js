import '../Login/Login.css';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { useRef } from 'react';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';

const Login = () => {
  const location = useLocation(); 
  let from = location.state?.from?.pathname || '/'
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate()

	let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
	  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    

	if(user){
        navigate(from, {replace: true});
    }
    const handleSubmit =  e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
	

    const navigateRegister = e =>{
        navigate('/register');
    }
    
	if (error) {
        errorElement =  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
    
      }
	//   if(loading){
	// 	return <Loading></Loading>
	// }

	  const resetPassword = async() =>{
		const email = emailRef.current.value;
		if(email){
			await sendPasswordResetEmail(email);
		toast('Please Check your Email and also spam folder');
		}
		else{
			toast('Please enter your email');
		}
	  }

    return (
        <section class="h-screen">
        <div class="container px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="w-full"
                alt="Phoneimage"
              />
            </div>
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleSubmit}>
               
                <div class="mb-6">
                  <input
                  ref={emailRef}
                  name="username"
                    type="email"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>
      
                
                <div class="mb-6">
                  <input
                  ref={passwordRef} type="password" required name="password"
                    
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
      
                <div class="flex justify-between items-center mb-6">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      
                    />
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                      >Remember me</label
                    >
                  </div>
                  <button
                  onClick={resetPassword}
                    href="#!"
                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >Forgot password?
                    </button>
                  
                </div>
      
               
                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
                <p class="inline-block px-7 py-3 mt-8 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">Don't have an account? <Link to='/register' onClick={navigateRegister} className='text-decoration-none pe-auto px-16 text-White-700 text-danger'>Register Here</Link></p>
      
                <div
                  class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                  <p class="text-center font-semibold mx-4 mb-0">OR</p>
                  
                </div>
               
                <SocialLogin></SocialLogin>
              
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Login;

