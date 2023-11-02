import { useEffect, useState } from 'react'
import '../../style/CalcBtn.css'

const CalcBtn = props => {
	const [number, setNumber] = useState('')
	const handlerBtn = event => {
		setNumber(number + event.target.value)
	}

	const delHandler = () => {
		setNumber('')
	}

	const remHandler = () => {
		setNumber(number.slice(0, -1))
	}

	const resultHandler = () => {
		try {
			setNumber(eval(number))
		} catch {
			setNumber('Error')
		}
	}

	useEffect(() => {
		props.onSaveNumber(number)
	})

	return (
		<div className='btn-calc-main'>
			<ul className='main-btn'>
				<li>
					<button className='btn-calc turquoise' onClick={remHandler}>
						AC
					</button>
				</li>
				<li>
					<button className='btn-calc turquoise' onClick={delHandler}>
						DE
					</button>
				</li>
				<li>
					<button className='btn-calc turquoise' value='.' onClick={handlerBtn}>
						.
					</button>
				</li>
				<li>
					<button className='btn-calc turquoise' value='/' onClick={handlerBtn}>
						/
					</button>
				</li>
			</ul>

			<ul className='main-btn'>
				<li>
					<button value='7' className='btn-calc' onClick={handlerBtn}>
						7
					</button>
				</li>
				<li>
					<button value='8' className='btn-calc' onClick={handlerBtn}>
						8
					</button>
				</li>
				<li>
					<button value='9' className='btn-calc' onClick={handlerBtn}>
						9
					</button>
				</li>
				<li>
					<button className='btn-calc turquoise' value='*' onClick={handlerBtn}>
						*
					</button>
				</li>
			</ul>

			<ul className='main-btn'>
				<li>
					<button className='btn-calc' value='4' onClick={handlerBtn}>
						4
					</button>
				</li>
				<li>
					<button className='btn-calc' value='5' onClick={handlerBtn}>
						5
					</button>
				</li>
				<li>
					<button className='btn-calc' value='6' onClick={handlerBtn}>
						6
					</button>
				</li>
				<li>
					<button className='btn-calc turquoise' value='-' onClick={handlerBtn}>
						-
					</button>
				</li>
			</ul>

			<ul className='main-btn'>
				<li>
					<button className='btn-calc' value='1' onClick={handlerBtn}>
						1
					</button>
				</li>
				<li>
					<button className='btn-calc' value='2' onClick={handlerBtn}>
						2
					</button>
				</li>
				<li>
					<button className='btn-calc' value='3' onClick={handlerBtn}>
						3
					</button>
				</li>
				<li>
					<button className='btn-calc turquoise' value='+' onClick={handlerBtn}>
						+
					</button>
				</li>
			</ul>

			<ul className='main-btn'>
				<li>
					<button value='00' className='btn-calc' onClick={handlerBtn}>
						00
					</button>
				</li>
				<li>
					<button className='btn-calc' value='0' onClick={handlerBtn}>
						0
					</button>
				</li>
				<li>
					<button className='btn-calc turquoise' onClick={resultHandler}>
						=
					</button>
				</li>
			</ul>
		</div>
	)
}

export default CalcBtn
