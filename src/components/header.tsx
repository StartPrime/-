import classes from './header.module.scss'
import { translations } from '../utils/translations'

interface Props {
	language: 'ru' | 'en'
	onChangeLanguage: (lang: 'ru' | 'en') => void
}

export default function Header({ language, onChangeLanguage }: Props) {
	const toggleLanguage = () => {
		const newLanguage = language === 'ru' ? 'en' : 'ru'
		onChangeLanguage(newLanguage)
	}

	return (
		<header className={classes.header}>
			<h1>{translations[language].header.name}</h1>
			<button onClick={toggleLanguage}>
				{translations[language].header.languageButton}
			</button>
		</header>
	)
}
