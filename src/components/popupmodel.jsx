import React from "react";
import { useSelector } from "react-redux";

function PopUpModel({ userid, setshowmodel }) {
    const alluser = useSelector((state) => (state.users.users));
    const user = alluser.filter((user) => {
        return user.id === userid
    })

    console.log(user);

    return (
        <div>
            <div id="YOUR_ID" className="fixed z-50 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                        role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                            <button onClick={() => setshowmodel(false)} type="button" data-behavior="cancel" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div>
                            <div class="p-5 border rounded text-center text-gray-500 max-w-sm">
                                {/* img */}
                                <div class="text-sm mt-5">
                                    <a href="#"
                                        class="font-medium leading-none text-gray-900l text-xl text-black uppercase  hover:text-indigo-600 transition duration-500 ease-in-out">{user[0].name}
                                    </a>
                                    <p className=" font-semibold text-slate-900 text-base pt-2">{user[0].gender}</p>
                                </div>

                                <p class="mt-2 text-gray-900  text-lg font-semibold">{user[0].email}</p>
                                <p className=" text-lg text-slate-900">Age:{user[0].age}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default PopUpModel;