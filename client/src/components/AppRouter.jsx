import React from "react";
import { AuthContext } from "../context";
import Home from "../package/Home";
import Signin from "../package/Signin";
import SignUp from "../package/SignUp";
import { BrowserRouter as Router, Redirect, Switch, Route, useHistory } from "react-router-dom";
import UserPage from "../package/UserPage";
import { useContext, useState, useEffect } from "react";
// import { useMatch, Link, Route } from 'react-router-dom';
import { matchRoutes, useLocation } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../router";
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
    let history = useHistory();


	useEffect(() => {
		setPathName(location.pathname)
		if (localStorage.getItem('signin')) { setSignin(true) } else { setSignin(false) }
	}, [location])
	// useEffect(()=>{
	// 	if(isAuth === false) {
	// 		history.push('/signin') 
	// 	}
	// }, [])
	return (<>
		{
			pathName === undefined || pathName === "/" ?
				<Switch>
					{privateRoutes.map(route =>
						<Route
							key={route.path}
							component={route.component}
							path={route.path}
							exact={route.exact}
						/>
					)}
				</Switch> :
				pathName === "/signin" ?
					<Switch>
						{privateRoutes.map(route =>
							<Route
								key={route.path}
								component={route.component}
								path={route.path}
								exact={route.exact}
							/>
						)}
					</Switch> :
					pathName === "/signup" ?
						<Switch>
							{privateRoutes.map(route =>
								<Route
									key={route.path}
									component={route.component}
									path={route.path}
									exact={route.exact}
								/>
							)}
						</Switch> :
						pathName === "/userPage" ?
							<Switch>
								{privateRoutes.map(route =>
									<Route
										key={route.path}
										component={route.component}
										path={route.path}
										exact={route.exact}
									/>
								)}
							</Switch> : null
		

			// : navigate('/signin', {replace: true})
		}
		{/* {pathName === "/signin" ?
			<Switch>
				<Signin
					path={'/signin'}
					component={Signin}
					exact={true}
				/>
			</Switch > :
			pathName === "/signup" ?
				<Switch>
					<Signin
						path={'/signup'}
						component={SignUp}
						exact={true}
					/>
				</Switch >
				: null

		} */}
	</>);
}



export default AppRouter