function Register() {
  return (
    <>
      {/*   Background image and header code */}
      <div className="min-h-screen py-40 flex items-center justify-center bg-gradient-to-r from-blue-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-xl overflow-hidden">
            <div className="sm:w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-[url('./images/location.jpg')] bg-no-repeat bg-cover bg-center shadow-xl">
              <h1 className="text-white text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-white">
                  to Location Tracker App
                </p>
              </div>
            </div>
            {/* registration form code */}
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Register</h2>
              <p className="mb-4">Create an account. It's free and only take a minute</p>
              <form action="#">
                <div class="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2" />
                  <input type="text" placeholder="Lastname" className="border border-gray-400 py-1 px-2" />
                </div>
                <div className="mt-5">
                  <input type="email" placeholder="Email Address" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400" />
                  <span>
                    I accept the <a href="#" className="text-blue-900 font-semibold">Terms of use</a> & <a href="#" class="text-blue-900 font-semibold">Privacy Policy</a>.
                  </span>
                </div>

                <div className="mt-5">
                  <button className="w-full bg-blue-500 py-3 text-center text-white">Register Now</button>
                </div>

                <div className="mt-5 text-center">
                  <span>
                    Already have an account? <a href="#" className="text-blue-900 font-semibold">Login now</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;