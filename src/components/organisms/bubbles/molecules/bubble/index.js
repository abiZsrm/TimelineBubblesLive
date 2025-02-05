import { useEffect, useRef, useState } from 'react'
import { ContainerStyle } from './style.module.css'

/**
 * A bubble is a circular object displayed with a text in it
 * @param {Object} props
 * @param {String} props.title - the state is gonna set the value of a bubble
 * @param {Function(key: int)} props.addBubble - will be called whenever the user 
 * press the return key
 * @param {Function(key: int)} props.removeBubble - will be called whenever the user
 * press backspace with the empty input field to a bubble the moment it is created
 * @param {Function(identifier: int, data: Object)} props.updateBubble - will be called
 * whenever the user updates the content of a comment of a bubble
 * @param {Int} props.identifier - key of a bubble in the bubbles array
 * @returns 
 */
export default function Bubble(props) {

	const [lastKey, setLastKey] = useState(-1)

	/**
	 * Used to define the value of the textarea or image whenever the user opens a file
	 */
	const { title } = props
	const inputRef = useRef(undefined)
	useEffect(() => {
		const handleChange = () => {
			if(inputRef.current && title !== inputRef.current.innerHTML)
				inputRef.current.innerHTML = title
		}
		handleChange()
	}, [title])

	

	/**
	 * Updates the bubble content
	 * @param {Object} ev 
	 */
	function handleChange(ev)
	{
		if (ev.target.innerHTML !== "<div><br></div><div><br></div>")
			props.updateBubble(props.identifier, 
				{title: ev.target.innerHTML})
		else
			ev.target.innerHTML = ""
	}

	// Focus when a new bubble is created
	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<div ref={inputRef} 
			className={'disable-anim ' + ContainerStyle}
			data-testid="bubble"
			contentEditable={false}
			onInput={handleChange}
			spellCheck={false}></div>)
}