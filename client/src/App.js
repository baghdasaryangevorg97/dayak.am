import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './package/Home';
import SignUp from './package/SignUp';
import Signin from './package/Signin';
import './css/styles.css';
import './css/custom.css';
import NotFound from './package/NotFound';
import { getCookie, setCookie, eraseCookie } from "./cookie";
import UserPage from './package/UserPage';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { BrowserRouter } from 'react-router-dom';


function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isAuthAdmin, setIsAuthAdmin] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('auth') && localStorage.getItem('authUser')) {
			setIsAuth(true)
		} else {
			setIsAuth(false)
		}
	}, [])
  return (
    <div className="App">
		<AuthContext.Provider value={{
				isAuth,
				setIsAuth,
				isAuthAdmin,
				setIsAuthAdmin,
				isLoading
		}}>
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
		</AuthContext.Provider>
	</div>
  );
}

export default App;



