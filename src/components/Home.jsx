import { useDispatch, useSelector } from "react-redux";
import PopUpModel from "./popupmodel";
import { useEffect, useState } from "react";
import { deleteUser } from "../features/slices/UsersSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Home() {
    const users = useSelector((state) => state.users.users);
    const searchquery = useSelector((state) => state.users.searchQuery);
    const dispatch = useDispatch();
    const [showmodel, setshowmodel] = useState(false);
    const [userid, setuserid] = useState(0);

    return (
        <>
            <h1 className="text-white text-4xl mt-10 font-bold ">People Post</h1>
            {
                showmodel &&
                <PopUpModel userid={userid} setshowmodel={setshowmodel} />
            }

            <div className=" w-full mx-auto flex flex-wrap items-center justify-center  ">
                {
                    (users) ? (

                        <div className=" w-[70%] flex flex-wrap  gap-10  justify-center  items-center ">
                            {

                                users.filter((user) => {
                                    if (searchquery.length == 1) {
                                        return users
                                    }
                                    else {
                                        return user.name.toLowerCase().includes(searchquery.toLowerCase())
                                    }
                                })

                                    .map((user) => (

                                        <div key={user.id} className="flex flex-col gap-3 rounded-md bg-gray-900 py-10 shadow-lg w-[50%] mt-5">
                                            <p className="text-white font-semibold text-lg">{user.name}</p>
                                            <p className="text-white text-md">{user.gender}</p>
                                            <div className=" gap-3 font-mono bg-gray-900">
                                                <div className="text-xs">
                                                    <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 text-md py-2 m-2 transition duration-500 ease select-none hover:bg-gray-400 hover:text-black focus:outline-none focus:shadow-outline" onClick={() => { setuserid(user.id); setshowmodel(true) }}>View</button>
                                                    <Link to={`/edit/${user.id}`}>
                                                        <button type="button" className="border border-gray-400 text-gray-400 font-semibold text-md rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-400 hover:text-black focus:outline-none focus:shadow-outline" >Edit</button>
                                                    </Link>
                                                    <button type="button" className="border border-gray-400 text-gray-400 rounded-md text-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-400 hover:text-black focus:outline-none focus:shadow-outline" onClick={() => { dispatch(deleteUser(user.id)); toast.error("Post Deleted"); }}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                    ) : (
                        <div className="text-white"> user not found</div>
                    )
                }
            </div>
        </>
    )
}

export default Home;