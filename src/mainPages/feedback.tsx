import { translations } from '../utils/translations'

interface Props {
	language: 'ru' | 'en'
}

export default function Feedback({ language }: Props) {
	return (
		<div>
			<p>{translations[language].pages.feedback}</p>
		</div>
	)
}
