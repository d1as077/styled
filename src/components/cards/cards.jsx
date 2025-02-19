import { Container } from '../../index'
import cards from '../../server/server'
import { ButtonHome, Flex, StateFlex } from '../cart/cartStyle'
import { Link } from 'react-router-dom'
import star from '../../assets/star.svg'
const Cards = () => {
	return (
		<div style={{ padding: '20px 0' }}>
			<Container>
				<Flex>
					{cards.map(value => (
						<div key={value.id}>
							<div
								style={{
									border: '1px solid #f1f1f1',
									padding: '4px',
									width: '400px',
									height: '500px',
								}}
							>
								<div>
									<img src={value.img} alt={value.title} />
								</div>
								<div>
									<StateFlex>
										<h2 style={{ fontSize: '20px' }}>{value.title}</h2>
										<div>
											<h4>${value.price}</h4>
										</div>
										<StateFlex style={{ gap: '7px', color: 'gray' }}>
											<p>{value.views} previews</p>
											<div>
												<img src={star} alt='star' />
											</div>
										</StateFlex>
									</StateFlex>
								</div>
							</div>
						</div>
					))}
				</Flex>
				<Link to={'/cart'}>
					<ButtonHome>Go To Cart Page</ButtonHome>
				</Link>
			</Container>
		</div>
	)
}

export default Cards
