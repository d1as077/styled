import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-family: Arial, Helvetica, sans-serif;
  }
  a{
    text-decoration: none;
  }

  ul>li{
    list-style: none;
  }
  img{
    width: 100%;
    height: auto;
  }
`
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1440px;
	width: 80%;
	margin: 0 auto;
`
