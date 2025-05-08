import { translations } from '../utils/translations'

interface Props {
	language: 'ru' | 'en'
}

export default function ErrorPage({ language }: Props) {
	return (
		<div>
			<p>{translations[language].error}</p>
		</div>
	)
}
