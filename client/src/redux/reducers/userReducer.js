import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';	
import { getUserGeneralInfo } from '../feautures/dataApi';


const initialState = {
	userInfo: {},
	userInfoLoading: {},
	userGeneralInfo: {},
	
}

// export const getUserInfo = createAsyncThunk(
// 	'/api/getinInfo',
// 	async () => {
// 		const response = await getAdminInfo()
// 		return response.data
// 	}
// )

export const getGeneralUserInfo = createAsyncThunk(
	'/api/getGeneralInfo',
	async () => {
		const response = await getUserGeneralInfo()
		return response.data
	}
)

export const dataSlice = createSlice({
	name: 'userReducer',
	initialState,
	reducers: {
		setUsers: (state, action) => {
			state.userInfo = action.payload
		},
		setGeneralUsers: (state, action) => {
			state.userGeneralInfo = action.payload
		},
       
		
	},
    extraReducers: (builder) => {
		builder
			.addCase(getGeneralUserInfo.fulfilled, (state, action) => {
				state.adminLoading = false
				dataSlice.caseReducers.setGeneralUsers(state, action)
			})
			.addCase(getGeneralUserInfo.pending, (state, action) => {
				state.adminLoading = true
			})
	},
});

export const { setUsers } = dataSlice.actions;

export const getUserData = (state) => state.userReducer.userInfo;
export const getUserGeneralData = (state) => state.userReducer.userGeneralInfo;

export default dataSlice.reducer;