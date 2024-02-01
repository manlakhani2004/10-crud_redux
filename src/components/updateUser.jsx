import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { EditUser } from "../features/slices/UsersSlice";
import toast from "react-hot-toast";
function UpdateUser()
{
    const[user,setuser]= useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams();
    const alluser = useSelector((state)=> state.users.users);

    useEffect(()=>{
        const singleuser = alluser.filter((user)=>(user.id === id));
        setuser(singleuser[0]);
        console.log(singleuser);
    },[id])

    function inputhandler(e)
    {
        const{name,value} = e.target;
        setuser((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        })
        console.log(user);
    }

    function submitEditHandler(e)
    {
        e.preventDefault();
        if(user)
        {
            dispatch(EditUser(user));
            console.log("updated",user);
        }
        navigate('/');
        toast.success("POST UPDATED");
    }


    return(
        <div className=" h-screen bg-slate-800">
            <form className="max-w-sm mx-auto mt-14" onSubmit={submitEditHandler}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2  font-medium text-left text-base text-gray-900 dark:text-white">Your Name</label>
                    <input type="text" id="text" name="name" value={user.name && user.name} onChange={inputhandler}  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Name" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-left text-base font-medium text-gray-900 dark:text-white">Your Email</label>
                    <input type="email" id="password" value={user.email &&  user.email}  onChange={inputhandler} name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your Email" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-left text-base font-medium text-gray-900 dark:text-white">Enter Your Age</label>
                    <input type="text" name="age" value={user.age && user.age}  onChange={inputhandler} id="repeat-password"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required placeholder="Enter Your Age" />
                </div>
                <div className="flex items-center mb-4 justify-around">
                    <div className="flex gap-1 items-center">
                        <input id="country-option-1" value="male" name="gender" onClick={inputhandler}  checked = {user && (user.gender === "male")} type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                            Male
                        </label>
                    </div>
                    <div className="flex gap-1 items-center">
                        <input id="country-option-2" value="female" name="gender" onClick={inputhandler} checked = {user && (user.gender === "female")} type="radio" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
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

export default UpdateUser;