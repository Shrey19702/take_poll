export default function Signin() {
    return (
        <div className="py-12 bg-slate-100">
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

                <div className="flex flex-wrap justify-evenly py-8 lg:divide-x-4 divide-blue-500 ">
                    <div className="mt-4">
                        <ul className="px-4 pb-8 md:py-2 list-disc text-sm lg:text-base  space-y-2">
                            <li className="text-gray-400">
                                <span className="text-gray-600">consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in</span>
                            </li>
                            <li className="text-gray-400">
                                <span className="text-gray-600">consect adipisicing elit. tum cupiditate veritatis in</span>
                            </li>
                            <li className="text-gray-400">
                                <span className="text-gray-600">consect adipisicing elit. Possimus magnam voluptat veritatis in</span>
                            </li>
                            <li className="text-gray-400">
                                <span className="text-gray-600">consect adipisicing elit. Possimus m</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-4/12 flex flex-wrap justify-evenly content-around grow lg:grow-0 ">
                        <button className=" mx-4 my-4 w-full sm:w-fit transition px-8 py-3 h-fit border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 md:text-lg">Sign in with Google</button>
                        <button className=" mx-4 my-4 w-full sm:w-fit transition px-8 py-3 h-fit border border-transparent text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 md:text-lg">Sign up with Google</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }