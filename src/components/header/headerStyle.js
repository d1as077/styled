import styled from 'styled-components'

export const HeaderStyle = styled.header`
	background-color: crimson;
	& > div > div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 30px;
	}
`

HeaderStyle.Links = styled.h3`
	color: dodgerblue;
`
