import { useState } from 'react'

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
	return (
		<div className='question-container'>
			{isOpen ? (
				<div>
					<h1>{props.data.results[numQuest].question}</h1>
					<button onClick={nextQuestHandler} value={'True'}>
						True
					</button>
					<button onClick={nextQuestHandler} value={'False'}>
						False
					</button>
					<span>
						Вопрос {lenQuest} из {props.data.results.length}
					</span>
				</div>
			) : (
				<div>
					<h1>Вопросы закончились</h1>
					<p>
						Правильных ответов: {numCorrect} из {props.data.results.length}
					</p>
				</div>
			)}
		</div>
	)
}
export default Questions
