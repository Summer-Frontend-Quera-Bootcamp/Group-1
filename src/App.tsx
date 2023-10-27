import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Test from './pages/Test';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPage from './pages/ForgotPage';
import ResetLinkSentPage from './pages/ResetLinkSentPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import CalendarViewPage from './pages/CalendarViewPage';
import BoardListViewPage from './pages/BoardListViewPage';
import BoardViewPage from './pages/BoardViewPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import SettingsPage from './pages/SettingsPage';
import AccountInfoPage from './pages/AccountInfoPage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<SignInPage />}
					/>
					<Route
						path='/register'
						element={<SignUpPage />}
					/>
					<Route
						path='/forgot'
						element={<ForgotPage />}
					/>
					<Route
						path='sent-link'
						element={<ResetLinkSentPage />}
					/>
					<Route
						path='reset-password'
						element={<ResetPasswordPage />}
					/>
					<Route
						path='/test'
						element={<Test />}
					/>
					<Route
						path='/showlist'
						element={<BoardListViewPage />}
					/>
					<Route
						path='/showcol'
						element={<BoardViewPage />}
					/>
					<Route
						path='/calendar'
						element={<CalendarViewPage />}
					/>
					<Route
						path='/accountinfo'
						element={<AccountInfoPage />}
					/>
					<Route
						path='/setting'
						element={<SettingsPage />}
					/>
					<Route
						path='/personalinfo'
						element={<PersonalInfoPage />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
