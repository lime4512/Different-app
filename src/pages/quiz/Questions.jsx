import { useState } from 'react'
import '../../style/Questions.css'

const Questions = props => {
	const [lenQuest, setLenQuest] = useState(1)
	const [numQuest, setNumQuest] = useState(0)
	const [isOpen, setIsOpen] = useState(true)
	const [numCorrect, setNumCorrect] = useState(0)

	const [colorState, setColorState] = useState(false)
	const nextQuestHandler = event => {
		setLenQuest(lenQuest + 1)
		setNumQuest(numQuest + 1)
		if (numQuest === props.data.results.length - 1) {
			setIsOpen(false)
		}

		if (props.data.results[numQuest].correct_answer === event.target.value) {
			setNumCorrect(numCorrect + 1)
		}
		if (numCorrect >= 5) {
			setColorState(true)
		}
	}

	const handlerBack = () => {
		props.back(false)
	}
	return (
		<div className='question-container'>
			{isOpen ? (
				<div className='question-content'>
					<div className='question-block-title'>
						<p className='question-subTitle'>
							Вопрос {lenQuest} из {props.data.results.length}
						</p>
						<h1>
							{props.data.results[numQuest].question
								.replace(/&#039;/g, "'")
								.replace(/&quot;/g, '"')}
						</h1>
					</div>
					<div className='question-block-btn'>
						<button
							onClick={nextQuestHandler}
							value={'True'}
							className='question-btn'
						>
							True
						</button>

						<button
							onClick={nextQuestHandler}
							value={'False'}
							className='question-btn'
						>
							False
						</button>
					</div>
				</div>
			) : (
				<div className='question-content-answer'>
					<div className='question-answer'>
						<h1>Вопросы закончились</h1>
						<p
							className='answer-text'
							style={{ color: colorState ? 'green' : 'red' }}
						>
							Правильных ответов: {numCorrect} из {props.data.results.length}
						</p>
						<div className='answer-back-btn'>
							<button onClick={handlerBack} className='question-btn'>
								Назад
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
export default Questions
