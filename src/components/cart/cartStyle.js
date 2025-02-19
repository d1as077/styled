import styled from 'styled-components'

const Flex = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	gap: 30px;
`
const StateFlex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
`

const H3 = styled.h3`
	font-size: 30px;
	font-weight: 700;
`

const Title = styled.p`
	max-width: 500px;
	color: gray;
	font-size: 15px;
`

const Button = styled.button`
	background-color: transparent;
	font-size: 24px;
	border: none;
	cursor: pointer;
	padding: 0 7px;
`

const AddButton = styled.button`
	background-color: #a9358d;
	font-size: 18px;
	border: none;
	cursor: pointer;
	padding: 7px 7px;
	color: white;
	width: 100%;
	margin-top: 10px;
	border-radius: 8px;
`

const ButtonHome = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	width: 500px;
	height: auto;
	background-color: #a9358d;
	border-radius: 10px;
	color: white;
	padding: 15px 60px;
	border: none;
	cursor: pointer;
	margin-bottom: 30px;
`
const InputStyle = styled.input`
	background-color: white;
	color: #a9358d;
	width: 100%;
	border-radius: 8px;
	outline: none;
	&::placeholder {
		color: #a9358d;
	}
`

const Flex2 = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: start;
	gap: 20px;
`
const Flex3 = styled.div`
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	justify-content: space-between;
`

export {
	InputStyle,
	Flex,
	H3,
	Title,
	Button,
	AddButton,
	ButtonHome,
	Grid,
	StateFlex,
	Flex2,
	Flex3,
}
