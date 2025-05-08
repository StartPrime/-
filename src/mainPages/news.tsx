import { translations } from '../utils/translations'

interface Props {
	language: 'ru' | 'en'
}

export default function News({ language }: Props) {
	return (
		<div>
			<h1>{translations[language].pages.newsTitle}</h1>
			<p>{translations[language].pages.newsText}</p>
		</div>
	)
}
