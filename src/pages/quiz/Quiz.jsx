import { useEffect, useState } from 'react'
import Questions from './Questions'

const Quiz = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [data, setData] = useState([])

	useEffect(() => {
		fetch(
			'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=boolean'
		)
			.then(res => res.json())
			.then(result => setData(result))
	}, [])
	const quizStartHandler = () => {
		setIsOpen(true)
	}
	return (
		<div className='main-quiz'>
			<h1>Вопросики</h1>
			{isOpen ? (
				<Questions data={data} />
			) : (
				<button type='submit' onClick={quizStartHandler}>
					Начать тестирование
				</button>
			)}
		</div>
	)
}

export default Quiz
