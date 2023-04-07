import { configureStore } from "@reduxjs/toolkit";
import functionStorage from "../reducers";

const storage = configureStore({
    reducer : functionStorage
})

export default storage;