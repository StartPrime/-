import classes from './productAndServices.module.scss'
import { translations } from '../utils/translations'

interface Props {
	language: 'ru' | 'en'
}

export default function ProductsAndServices({ language }: Props) {
	return (
		<div className={classes.container}>
			<h1>{translations[language].pages.productsTitle}</h1>
			<table>
				<thead>
					<tr>
						<th>{translations[language].pages.productsName}</th>
						<th>{translations[language].pages.productsPrice}</th>
					</tr>
				</thead>
				<tbody>
					{translations[language].pages.products.map((product, index) => (
						<tr key={index}>
							<td>{product.name}</td>
							<td>{product.price}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
