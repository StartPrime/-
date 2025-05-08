import classes from './footer.module.scss'
import { translations } from '../utils/translations'

interface Props {
	language: 'ru' | 'en'
}

export default function Footer({ language }: Props) {
	return (
		<footer className={classes.footer}>
			<h1>{translations[language].footer.text}</h1>
		</footer>
	)
}
