import React, { useEffect, useState } from 'react'
import Bubbles from '../../organisms/bubbles'
import CSSConfigurator from '../../organisms/css_configurator'
import TutorialButton from '../../organisms/routes/molecules/tutorial_button'
import Title from '../../organisms/title'
import Toolbar from '../../organisms/toolbar'
import { ContainerStyle } from './style.module.css'
import jsonData from '../../../components/files/bubbles.json';
import oracleBadge from '../../../components/files/awsAssociateDeveloper.png'; 
/**
 * Template app editor
 * @returns 
 */
export default function TemplateEditor()
{
	/**
	 * Data for configuring app the user defined theme
	 */
	const [theme, setTheme] = useState({
		primary: '#ffffff', 
		accent: '#212529',
		isPrinting: false})
	/**
	 * Stores bubbles data
	 */
	const [bubbles, setBubbles] = useState([])

	function handleFileOpened(content) {
		// const obj = JSON.parse(content)
		const obj = content; 
		if (obj.theme && obj.bubbles) {
			setTheme(obj.theme)
			setBubbles(obj.bubbles)
		}
		else
			alert('Incompatible or corrupted file!')
	}

	const randomJson = {
		"theme": {
			"primary": "#ffffff",
			"accent": "#212529",
			"isPrinting": false
		},
		"bubbles": [
			{
				"identifier": 1709398823431,
				"title": "2024",
				"isImage": true,
				"comment": oracleBadge
			},
			{
				"identifier": 1709398825832,
				"title": "2025",
				"isImage": false,
				"comment": "super"
			},
			{
				"identifier": 1709398833832,
				"title": "2026",
				"isImage": false,
				"comment": "Rangag"
			}
		]
	}
	
	useEffect(() => {
		handleFileOpened(randomJson); 
		}, [bubbles]); 

	return (<main id="toPrint" className={ContainerStyle}>
				<CSSConfigurator theme={theme}></CSSConfigurator>
				<Title isAnimated={true}></Title>
				<Bubbles bubbles={bubbles} setBubbles={setBubbles}></Bubbles>
				<Toolbar bubbles={bubbles} setBubbles={setBubbles}
					theme={theme} setTheme={setTheme}></Toolbar>
				<TutorialButton></TutorialButton>
			</main>)
}