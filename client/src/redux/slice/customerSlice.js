import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCustomers = createAsyncThunk("fetchCustomers", async () => {
  const response = await fetch("http://localhost:8080/api/v1/bank/users");
  return response.json();
});

// export const fetchCustomerDetail = createAsyncThunk(
//   "fetchCustomerDetail",
//   async (userId) => {
//     const response = await fetch(
//       `http://localhost:8080/api/v1/bank/user/${userId}`
//     );
//     return response.json();
//   }
// );

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
    user: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.users;
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      console.log("Error: ", action.payload);
      state.isError = true;
    });
  },
});

export default customerSlice.reducer;
