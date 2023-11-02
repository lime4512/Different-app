import { useState } from 'react'
import '../../style/Calculator.css'
import CalcBtn from './CalcBtn'

const Calculator = () => {
	const [num, setNum] = useState('')

	const saveNumberHandler = e => {
		setNum(e)
	}

	return (
		<div className='main-calculator'>
			<div className='calc-content'>
				<input type='text' className='calc-inp' defaultValue={num} />
				<CalcBtn onSaveNumber={saveNumberHandler} />
			</div>
		</div>
	)
}
export default Calculator
