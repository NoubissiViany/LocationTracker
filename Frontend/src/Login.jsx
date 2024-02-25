function Login() {
  return (
    <>
      
      <div className="min-h-screen py-40 flex items-center justify-center bg-gradient-to-r from-blue-900">
        <div className="container mx-auto">        
          <div className="flex flex-col-reverse lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-xl overflow-hidden">
 {/* registration form code */}
 <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Login</h2>
              <p className="mb-4">Tracking made easy!</p>
              <form action="#">
               
                <div className="mt-5">
                  <input type="email" placeholder="Email Address" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                
               

                <div className="mt-5">
                  <button className="w-full bg-blue-500 py-3 text-center text-white font-semibold text-xl lg:text-sm">Login</button>
                </div>

                <div className="mt-5 text-center">
                  <span>
                    Don't have an account? <a href="#" className="text-blue-900 font-semibold">Register now</a>
                  </span>
                </div>
              </form>
            </div>
            {/*   Background image and header code */}
            <div className="sm:w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-[url('./images/location2.jpg')] bg-no-repeat bg-cover bg-center shadow-xl">
              <h1 className="text-white text-3xl mb-3">Location Tracker App</h1>
              <div>
                <p className="text-white">
                  Technology meets Destination
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;