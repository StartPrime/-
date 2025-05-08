import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Aside from './components/aside'
import Footer from './components/footer'
import Header from './components/header'
import Section from './components/section'
import AboutAuthor from './mainPages/aboutAuthor'
import Feedback from './mainPages/feedback'
import News from './mainPages/news'
import ProductsAndServices from './mainPages/ProductsAndServices'
import classes from './App.module.scss'
import ErrorPage from './components/errorPage'

export default function App() {
	const [language, setLanguage] = useState<'ru' | 'en'>(
		(localStorage.getItem('language') as 'ru' | 'en') || 'ru'
	)

	const changeLanguage = (lng: 'ru' | 'en') => {
		setLanguage(lng)
		localStorage.setItem('language', lng)
	}

	return (
		<BrowserRouter>
			<Header language={language} onChangeLanguage={changeLanguage} />
			<div className={classes.container}>
				<Section language={language} />
				<main className={classes.main}>
					<Routes>
						<Route
							path='/aboutAuthor'
							element={<AboutAuthor language={language} />}
						/>
						<Route
							path='/feedback'
							element={<Feedback language={language} />}
						/>
						<Route path='/' element={<News language={language} />} />
						<Route
							path='/productsAndServices'
							element={<ProductsAndServices language={language} />}
						/>
						<Route path='*' element={<ErrorPage language={language} />} />
					</Routes>
				</main>
				<Aside language={language} />
			</div>
			<Footer language={language} />
		</BrowserRouter>
	)
}
