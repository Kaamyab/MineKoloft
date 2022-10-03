import { useStore } from "../hooks/useStore"

export const Menu = () => {
	const [resetWorld] = useStore((state) => [state.resetWorld])

	return (<div className="menu absolute">
		<button
		style={{
			border: 'none',
			padding: '1rem',
			borderRadius: '0.5rem',
			color: 'white',
			background: 'rgba(0,0,0, 0.6)',
			cursor: 'pointer'

		}}
			onClick={() => resetWorld()}
		>Reset</button>
		<div style={{
			fontSize: '0.75rem',
			display: 'inline-block',
			marginLeft: '1rem',
			backgroundColor: 'white',
			padding: '1rem',
			mixBlendMode: 'difference',
			borderRadius: '0.5rem',
			opacity: '0.6'
			
		}}>Press ESC To FocusOut The Game..!</div>
	</div>)
}