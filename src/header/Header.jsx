import { Link } from 'react-router-dom'
import '../style/Header.css'

const Header = () => {
	return (
		<header className='header-container'>
			<div className='header-content'>
				<h1 className='header-logo'>DIFFERENT</h1>
				<ul className='header-nav-list'>
					<li>
						<Link to='/'>Дом</Link>
					</li>
					<li>
						<Link to='/calculator'>Калькулятор</Link>
					</li>
					<li>
						<Link to='/quiz'>Вопросы</Link>
					</li>
					<li>
						<Link to='/timer'>Таймер</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
