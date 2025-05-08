import classes from './aside.module.scss'
import { translations } from '../utils/translations'

interface Props {
	language: 'ru' | 'en'
}

export default function Aside({ language }: Props) {
	return (
		<aside className={classes.aside}>
			<div className={classes.tags}>
				{translations[language].aside.tags.map((tag, index) => (
					<p key={index}>{tag}</p>
				))}
			</div>
			<div className={classes.banners}>
				{translations[language].aside.banners.map((banner, index) => (
					<p key={index}>{banner}</p>
				))}
			</div>
		</aside>
	)
}
