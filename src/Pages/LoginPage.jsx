import React from 'react'

export default function LoginPage() {
  return (
    <div  className=' bg-gradient-to-t from-[#8abdd8] via-purple-500 to-[#bfe9ff] flex justify-center items-center min-h-screen z-indexx'>
        <div className='shadow-2xl rounded-3xl aspect-video w-3/4 bg-[#313131] flex flex-col items-center justify-around'>
        <section style={{border:"0.1px solid #f1f1f1",borderRadius:"25px"}} className="   py-12 w-2/6 h-4/6 px-8 ">
            <div className="px-6 h-full text-gray-800">
                <div
                className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                    <form>
                   

                    
                    <div className="mb-6">
                        <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="User name"
                        />
                    </div>

                
                    <div className="mb-6">
                        <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Password"
                        />
                    </div>
{/* 
                    <div className="flex justify-end items-center mb-6">
                        <a href="#!" className="text-[#f1f1f1]">Forgot password?</a>
                    </div>
 */}
                    <div className="text-center lg:text-left w-full">
                        <button
                        type="button"
                        className="inline-block px-7 w-full py-3  bg-blue-600 text-[#f1f1f1] font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#a185e7] hover:shadow-lg focus:bg-[#a185e7] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#a185e7] active:shadow-lg transition duration-150 ease-in-out"
                        >
                        Login
                        </button>
                        <p className="text-sm text-[#f1f1f1] font-semibold mt-2 pt-1 mb-0">
                        Don't have an account?
                        <a
                            href="#!"
                            className="text-red-600 ml-1 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                            >Register</a
                        >
                        </p>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section>
        </div>

    </div>
  )
}