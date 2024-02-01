import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


const Api_url = "https://658d51e77c48dce94738e8f7.mockapi.io/crud";

//create Action   API_POST
export const CreateUser = createAsyncThunk('createUser', async(data, { rejectWithValue }) => {
    const response = await fetch(Api_url,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

    try {
        let result = await response.json();
        return result;
    }

    catch (error) {
        return rejectWithValue(error);
    }

})


//API_Get

export const FetchUserList = createAsyncThunk('FetchUserList', async () => {
    const response = await fetch(Api_url);
    try{
    let result = await response.json();
    return result;
    }
    catch(error)
    {
        return error
    }

})


// API_DELETE 

export const deleteUser = createAsyncThunk('deleteUser',async(id,{rejectWithValue})=>{
    let response = await fetch(`${Api_url}/${id}`,{
        method:"DELETE"
    })
    //delete in api but not delete in users[] array
    try
    {
        return response.json();
    }
    catch(error)
    {
        return rejectWithValue(error);
    }
})

//PUT API , update the api
export const EditUser = createAsyncThunk('EditUser',async(EditedUser,{rejectWithValue})=>{
    let response = await fetch(`${Api_url}/${EditedUser.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(EditedUser)
    });

    try{
        return response.json();
    }
    catch(error)
    {
        return rejectWithValue(error);
    }
})


//initialstate

const initialState = {
    users: [{name:"man",email:"manblakhani@gmail.com",age:"19",gender:"",id:"6"}],
    loading: false,
    status:'idle',
    error: null,
    searchQuery:'',
}
// create slice
export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        searchUser:(state,action)=>{
            // console.log(action.payload);
            state.searchQuery = action.payload;
        }
    },
        

    extraReducers:( builder)=>{
        builder        
        //API POST and push into users state
        .addCase(CreateUser.pending,(state)=>{
            state.loading = true;
            state.status = "loading"
        })

        .addCase(CreateUser.fulfilled,(state,action)=>{
            state.users.push(action.payload);
            state.status = "success";
        })

        .addCase(CreateUser.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error;
        })

        //FETCH API and add into users state

        .addCase(FetchUserList.pending,(state)=>{
            state.loading = true;
            state.status = "loading"
        })

        .addCase(FetchUserList.fulfilled,(state,action)=>
        {
            state.users = action.payload;
            state.status = "success";
        })

        .addCase(FetchUserList.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error;
        })

        //DELETE API delete user
        .addCase(deleteUser.pending,(state,action)=>{
            state.status = "loading"
            state.loading = true
        })

        .addCase(deleteUser.fulfilled,(state,action)=>{

            //in api deleted , so now users state delete
            state.users = state.users.filter((user)=>{
                return user.id !== action.payload.id;
            });
            state.loading = false;
        })


        .addCase(deleteUser.rejected,(state,action)=>{
            state.error = action.payload;
            state.loading = false;
        })


        //PUT API edit the user
        .addCase(EditUser.pending,((state,action)=>{
            state.status = "loading";
            state.loading = true
        }))
        .addCase(EditUser.fulfilled,(state,action)=>{
           
            state.users = state.users.map((user)=>{
                return (user.id === action.payload.id)? action.payload:user
            })
            state.loading = false;
        })
        
        .addCase(EditUser.rejected,(state,action)=>{
            state.error = action.payload;
            state.loading = false;
        })
    },
});






export default UsersSlice.reducer;
export const{searchUser} = UsersSlice.actions;