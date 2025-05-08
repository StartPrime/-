import classes from './section.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { translations } from '../utils/translations'

interface Props {
	language: 'ru' | 'en'
}

export default function Section({ language }: Props) {
	const location = useLocation()

	const isActive = (path: string) => {
		return location.pathname === path
	}

	return (
		<section className={classes.section}>
			<nav className={classes.nav}>
				<Link to='/' className={isActive('/') ? classes.activeLink : ''}>
					{translations[language].navigation.news}
				</Link>
				<Link
					to='/aboutAuthor'
					className={isActive('/aboutAuthor') ? classes.activeLink : ''}
				>
					{translations[language].navigation.about}
				</Link>
				<Link
					to='/feedback'
					className={isActive('/feedback') ? classes.activeLink : ''}
				>
					{translations[language].navigation.feedback}
				</Link>
				<Link
					to='/productsAndServices'
					className={isActive('/productsAndServices') ? classes.activeLink : ''}
				>
					{translations[language].navigation.products}
				</Link>
			</nav>
			<div className={classes.banners}>
				<p>{translations[language].banners.banner1}</p>
				<p>{translations[language].banners.banner2}</p>
			</div>
		</section>
	)
}
