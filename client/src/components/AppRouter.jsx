import React from "react";
import Switch from "react-switch";
import { AuthContext } from "../context";
import Home from "../package/Home";
import Signin from "../package/Signin";
import SignUp from "../package/SignUp";
import UserPage from "../package/UserPage";
import { useContext, useState, useEffect } from "react";
// import { useMatch, Link, Route } from 'react-router-dom';
import { matchRoutes, Route, Routes, useLocation } from "react-router-dom"

// import { useRoute } from '@react-navigation/native';



const AppRouter = () => {
	const { isAuth, isAuthAdmin, isLoading } = useContext(AuthContext);
	const [verify, setVerify] = useState(false);
	const [reset, setReset] = useState(false);
	const [signin, setSignin] = useState(false)
	const [success, setSuccess] = useState(false)
	const [formCheck, setFormCheck] = useState(false)
	const location = useLocation()
	const [pathName, setPathName] = useState()

console.log('Test')
	useEffect(() => {
		setPathName(location.pathname)
		// if (localStorage.getItem('verify')) { setVerify(true) } else { setVerify(false) }
		// if (localStorage.getItem('reset')) { setReset(true) } else { setReset(false) }
		if (localStorage.getItem('signin')) { setSignin(true) } else { setSignin(false) }
		// if (localStorage.getItem('success')) { setSuccess(true) } else { setSuccess(false) }
	}, [])
	console.log(pathName,88);
	return (<>
		{/* <Routes>
						<Route path='/' element={<Home />} />
					</Routes> */}
					
		{isAuth ?
			pathName === '/' || pathName === undefined ?
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes> :
				pathName === '/signin' ?
					<Routes>
						<Route path='/signin' element={<Signin />} />
					</Routes> :
					pathName === '/signup' ?
						<Routes>
							<Route path='/signup' element={<SignUp />} />
						</Routes> :
						pathName === '/usepage' ?
							<Routes>
								<Route path='/userpage' element={<UserPage />} />
							</Routes> : null
			: null
		}
		{/* <Signin
							path={'/signin'}
							element={<Signin />}
							exact={true}
						/>
						<SignUp
							path={'/signup'}
							element={<SignUp />}
							exact={true}
						/>
							<Home
							path={'*'}
							element={<Home />}
							exact={true}
						/>
						<UserPage
							path={'/userpage'}
							element={<UserPage />}
							exact={true}
						/> */}
		{/* <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<Home />} />
      <Route path='/userpage' element={<UserPage />} />
    </Routes> */}
	</>);


}



export default AppRouter