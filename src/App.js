import Calculator from './pages/calculator/Calculator'
import Quiz from './pages/quiz/Quiz'
import Timer from './pages/timer/Timer'
import Main from './pages/main/Main'
import Header from './header/Header'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/calculator' element={<Calculator />} />
					<Route path='/quiz' element={<Quiz />} />
					<Route path='/timer' element={<Timer />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
