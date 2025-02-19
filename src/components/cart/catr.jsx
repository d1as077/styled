import { Container } from '../../index'
import tick from '../../assets/tick.svg'
import {
	AddButton,
	Button,
	ButtonHome,
	Flex,
	Flex2,
	Flex3,
	Title,
} from './cartStyle'

import img1 from '../../assets/imgs/img1.png'
import img2 from '../../assets/imgs/img2.png'
import img3 from '../../assets/imgs/img3.png'
import { ColorPicker, Rate } from 'antd'
import { Link } from 'react-router-dom'

const Cart = () => {
	return (
		<div style={{ padding: '20px 0' }}>
			<Container>
				<Flex2>
					<div
						style={{ display: 'flex', flexDirection: 'column ', gap: '10px' }}
					>
						<div>
							<img style={{ width: '95%' }} src={img1} alt='img' />
						</div>
						<Flex style={{ width: '100%', justifyContent: 'space-between' }}>
							<img style={{ width: '150px' }} src={img2} alt='img' />
							<img style={{ width: '150px' }} src={img3} alt='img' />
							<img style={{ width: '150px' }} src={img2} alt='img' />
						</Flex>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<h1>Mens Regular T-shirt</h1>
						<Flex style={{ gap: '10px' }}>
							<Rate style={{ fontSize: '20px' }} />
							<p>5.00 Rating</p>
							<div style={{ display: 'flex', gap: '10px' }}>
								<img style={{ width: '10%' }} src={tick} alt='tick' />
								<p> In Stock</p>
							</div>
						</Flex>
						<Title style={{ fontSize: '18px' }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
							erat quam. Vestibulum aliquam nibh dui, et aliquet nibh euismod
							quis.
						</Title>
						<div>
							<Flex3 style={{ justifyContent: 'space-between' }}>
								<p>Quantity</p> <h3>$29.00</h3>
							</Flex3>
							<Flex3 style={{ justifyContent: 'space-between' }}>
								<Flex3
									style={{
										gap: '10px',
										padding: '5px',
										border: '1px solid gray',
										fontSize: '20px',
										borderRadius: '4px',
									}}
								>
									<Button>-</Button>
									<span>1</span>
									<Button>+</Button>
								</Flex3>
								<Title style={{ fontSize: '18px' }}>+12% VAT Added</Title>
							</Flex3>
							<AddButton>Add to Cart</AddButton>
						</div>
						<div>
							<h2>Product Details</h2>
							<Flex3
								style={{
									borderBottom: '1px solid black',
									justifyContent: 'space-between',
								}}
							>
								<p>Size</p>
								<p>Small, Medium, Large</p>
							</Flex3>
							<Flex3
								style={{
									borderBottom: '1px solid black',
									justifyContent: 'space-between',
								}}
							>
								<p>Color</p>
								<p>White, Black, Gray</p>
							</Flex3>
							<Flex3
								style={{
									borderBottom: '1px solid black',
									justifyContent: 'space-between',
								}}
							>
								<p>Brand</p>
								<p>Shirt Flex</p>
							</Flex3>
						</div>
						<div>
							<h2>Select Size</h2>
							<Flex3 style={{ gap: '30px' }}>
								<AddButton
									style={{
										backgroundColor: 'white',
										color: '#6d6d6c',
										border: '1px solid',
									}}
								>
									Small
								</AddButton>
								<AddButton
									style={{
										backgroundColor: 'white',
										background: '#A9358D',
										border: '1px solid',
									}}
								>
									Medium
								</AddButton>
								<AddButton
									style={{
										backgroundColor: 'white',
										color: '#6d6d6c',
										border: '1px solid',
									}}
								>
									Large
								</AddButton>
							</Flex3>
						</div>
						<div>
							<h2>Choose Color</h2>
							<Flex3
								style={{
									alignItems: 'center',
									display: 'flex',
									justifyItems: 'center',
								}}
							>
								<ColorPicker defaultValue='#6f7071' />
								<ColorPicker defaultValue='#bd1632' />
								<ColorPicker defaultValue='#082ab3' />
								<ColorPicker defaultValue='#149908' />
							</Flex3>
						</div>
					</div>
				</Flex2>
				<Link to={'/'}>
					<ButtonHome>Go To Home Page</ButtonHome>
				</Link>
			</Container>
		</div>
	)
}

export default Cart
