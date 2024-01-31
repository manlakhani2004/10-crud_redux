import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateUser } from "../features/slices/UsersSlice";
import toast from "react-hot-toast";
import { RiUserHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";


function CreatePost() {

    const [userDetail, setuserDetail] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    });
    const dispatch = useDispatch();

    function inputhandler(e) {
        const { name, type, value } = e.target;

        setuserDetail((prev) => (
            {
                ...prev,
                [name]: value
            }
        ));
        console.log(userDetail);
    }

    function submitHandler(e) {
        e.preventDefault();
        dispatch(CreateUser(userDetail));
        setuserDetail({
            name: '',
            email: '',
            age: '',
            gender: ''
        });

        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-green-50 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                         <RiUserHeartFill className="text-4xl" />
                        </div>
                        <div className="ml-3 flex-1">
                            <p className="text-gray-900 font-bold text-md">
                                {userDetail.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                Thank You!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                   <Link to={'/'}><button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Close
                    </button>
                    </Link> 
                </div>
            </div>
        ))

    }



    return (
        <div className=" h-screen bg-slate-800">
            <h1 className=" text-white font-bold text-3xl text-center pt-10">Create Your Posts</h1>
            <form className="max-w-sm mx-auto mt-14" onSubmit={submitHandler} >
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2  font-medium text-left text-base text-gray-900 dark:text-white">Your Name</label>
                    <input type="text" id="text" value={userDetail.name} name="name" onChange={inputhandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-left text-base font-medium text-gray-900 dark:text-white">Your Email</label>
                    <input type="email" value={userDetail.email} id="password" name="email" onChange={inputhandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-left text-base font-medium text-gray-900 dark:text-white">Enter Your Age</label>
                    <input type="text" name="age" value={userDetail.age} id="repeat-password" onChange={inputhandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required placeholder="Enter Your Age" />
                </div>
                <div className="flex items-center mb-4 justify-around">
                    <div className="flex gap-1 items-center">
                        <input id="country-option-1" value="male" name="gender" onClick={inputhandler} type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                            Male
                        </label>
                    </div>
                    <div className="flex gap-1 items-center">
                        <input id="country-option-2" value="female" name="gender" onClick={inputhandler} type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="country-option-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                            Female
                        </label>
                    </div>
                </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
            </form>
        </div>

    )
}

export default CreatePost;