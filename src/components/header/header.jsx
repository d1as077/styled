import { Container } from '../../index'
import { HeaderStyle } from './headerStyle'

const Header = () => {
	return (
		<HeaderStyle>
			<Container>
				<div>
					<HeaderStyle.Links>Home</HeaderStyle.Links>
					<HeaderStyle.Links>Contact</HeaderStyle.Links>
					<HeaderStyle.Links>About</HeaderStyle.Links>
				</div>
			</Container>
		</HeaderStyle>
	)
}

export default Header
