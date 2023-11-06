import { useEffect, useState } from 'react'
import Questions from './Questions'
import '../../style/Quiz.css'

const Quiz = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [data, setData] = useState([])

	const [amount, setAmount] = useState('10')
	const [difficulty, setDifficulty] = useState('easy')
	const [category, setCategory] = useState('22')
	useEffect(() => {
		fetch(
			`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=boolean`
		)
			.then(res => res.json())
			.then(result => setData(result))
	}, [amount, difficulty, category])

	const quizStartHandler = () => {
		setIsOpen(true)
	}

	const handlerBack = bool => {
		setIsOpen(bool)
	}

	const amountHandler = event => {
		setAmount(event.target.value)
	}

	const difficultyHandler = event => {
		setDifficulty(event.target.value)
	}

	const categoryHandler = event => {
		setCategory(event.target.value)
	}
	return (
		<div className='main-quiz'>
			<div className='quiz-container'>
				{isOpen ? (
					<Questions data={data} back={handlerBack} />
				) : (
					<div className='quiz-content'>
						<h1 className='total-title-quiz'>Вопросы на знания всего</h1>
						<div className='select-block'>
							<div className='select-element'>
								<h3 className='subTitle-quiz'>Количество вопросов:</h3>
								<select className='quiz-select' onChange={amountHandler}>
									<option className='quiz-value' value='10'>
										10
									</option>
									<option className='quiz-value' value='15'>
										15
									</option>
									<option className='quiz-value' value='20'>
										20
									</option>
								</select>
							</div>

							<div className='select-element'>
								<h3 className='subTitle-quiz'>Сложность вопросов:</h3>
								<select className='quiz-select' onChange={difficultyHandler}>
									<option className='quiz-value' value='easy'>
										Легко
									</option>
									<option className='quiz-value' value='medium'>
										Нормально
									</option>
									<option className='quiz-value' value='hard'>
										Сложно
									</option>
								</select>
							</div>

							<div className='select-element'>
								<h3 className='subTitle-quiz'>Категория вопросов:</h3>
								<select className='quiz-select' onChange={categoryHandler}>
									<option className='quiz-value' value='22'>
										География
									</option>
									<option className='quiz-value' value='25'>
										Искусство
									</option>
									<option className='quiz-value' value='18'>
										Компьютер
									</option>
									<option className='quiz-value' value='15'>
										Видео игры
									</option>
									<option className='quiz-value' value='11'>
										Фильмы
									</option>
								</select>
							</div>

							<div className='select-element'>
								<h3 className='subTitle-quiz'>Тип вопросов 'Beta':</h3>
								<select className='quiz-select'>
									<option className='quiz-value' value='boolean'>
										Правда или ложь
									</option>
									<option className='quiz-value' value='multiple'>
										множество ответов
									</option>
								</select>
							</div>
						</div>
						<button
							type='submit'
							onClick={quizStartHandler}
							className='total-quiz-btn'
						>
							Начать тестирование
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Quiz
