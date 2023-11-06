import { useState } from 'react'
import '../../style/Questions.css'

const Questions = props => {
	const [lenQuest, setLenQuest] = useState(1)
	const [numQuest, setNumQuest] = useState(0)
	const [isOpen, setIsOpen] = useState(true)
	const [numCorrect, setNumCorrect] = useState(0)
	const nextQuestHandler = event => {
		setLenQuest(lenQuest + 1)
		setNumQuest(numQuest + 1)
		if (numQuest === props.data.results.length - 1) {
			setIsOpen(false)
		}

		if (props.data.results[numQuest].correct_answer === event.target.value) {
			setNumCorrect(numCorrect + 1)
		} else {
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
				<div>
					<h1>Вопросы закончились</h1>
					<p>
						Правильных ответов: {numCorrect} из {props.data.results.length}
					</p>
					<button onClick={handlerBack}>Назад</button>
				</div>
			)}
		</div>
	)
}
export default Questions
