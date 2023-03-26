import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const removeUser = createAsyncThunk('users/remove', async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`);

    return user;
})

export { removeUser };