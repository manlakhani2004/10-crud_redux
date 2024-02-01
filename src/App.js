import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { FetchUserList } from './features/slices/UsersSlice';
import UpdateUser from './components/updateUser';

function App() {
  const dispatch = useDispatch();


  useEffect(()=>
  {
      dispatch(FetchUserList());    
  },[]);


  return (
    <div className="App bg-slate-800  min-h-screen max-h-max">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/edit/:id' element={<UpdateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
