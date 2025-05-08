import { translations } from '../utils/translations'
import classes from './news.module.scss'

interface Props {
	language: 'ru' | 'en'
}

export default function News({ language }: Props) {
	const downloadNews = () => {
		const content = `${translations[language].pages.newsTitle}\n\n${translations[language].pages.newsText}`
		const blob = new Blob([content], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = `news_${language}.txt`
		document.body.appendChild(a)
		a.click()
		document.body.removeChild(a)
		URL.revokeObjectURL(url)
	}

	return (
		<div>
			<h1>{translations[language].pages.newsTitle}</h1>
			<p>{translations[language].pages.newsText}</p>
			<button onClick={downloadNews} className={classes.downloadButton}>
				{translations[language].buttons.downloadTxt || 'Download as TXT'}
			</button>
		</div>
	)
}
