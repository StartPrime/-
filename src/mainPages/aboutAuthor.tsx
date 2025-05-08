import { translations } from '../utils/translations'

interface Props {
	language: 'ru' | 'en'
}

export default function AboutAuthor({ language }: Props) {
	return (
		<div>
			<h1>{translations[language].pages.aboutAuthor}</h1>
		</div>
	)
}
