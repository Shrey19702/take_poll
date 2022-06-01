export default function Findpoll() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2> */}
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to send money
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                    </p>
                </div>

                <div className='flex flex-wrap lg:justify-center sm:mt-6 sm:justify-start justify-center items-center'>
                    <input 
                        type="text" 
                        placeholder='Enter the web link or polling id'
                        className=" transition rounded-md border-gray-300 shadow-sm w-full my-4 mr-4 py-3.5
                                    sm:w-8/12 
                                    placeholder:text-slate-400 
                                    focus:border-blue-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:drop-shadow-md
                                    invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    />
                    <button className="transition px-8 py-3 h-fit border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 md:text-lg">Search</button>
                </div>
                
            </div>
        </div>
    )
  }