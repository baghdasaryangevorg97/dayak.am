import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';	
// import {
// 	// getUserInfo,
// } from '../features/dataApi';

const initialState = {
	userInfo: {},
	userInfoLoading: {},
	
}

// export const getUserInfo = createAsyncThunk(
// 	'/api/getinInfo',
// 	async () => {
// 		const response = await getAdminInfo()
// 		return response.data
// 	}
// )


export const dataSlice = createSlice({
	name: 'userReducer',
	initialState,
	reducers: {
		setUsers: (state, action) => {
			state.userInfo = action.payload
		},
       
		
	},
    extraReducers: (builder) => {
		// builder
			// .addCase(getSolvedCustomers.fulfilled, (state, action) => {
			// 	state.adminLoading = false
			// 	dataSlice.caseReducers.setSolvedCustomers(state, action)
			// })
			// .addCase(getSolvedCustomers.pending, (state, action) => {
			// 	state.adminLoading = true
			// })
	},
});

export const { setUsers } = dataSlice.actions;

export const getUserData = (state) => state.userReducer.userInfo;

export default dataSlice.reducer;