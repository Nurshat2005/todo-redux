import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
const Home = () => {
	const [ProductName, setProductName] = useState('')
	const [ProductPrice, setProductPrice] = useState('')
	const dispatch = useDispatch()
	const { Product, cash, expenses } = useSelector(p => p)

	function BuyProduct() {
		if (ProductName.trim() === '' || ProductPrice.trim() === '') {
			alert('Заполните поле!...')
		} else if (cash < ProductPrice || ProductPrice < 0) {
			alert('Увас не достoтoчно средств!')
		} else {
			let newarr = {
				id: Date.now(),
				title: ProductName,
				price: ProductPrice,
			}
			setProductName('')
			setProductPrice('')
			dispatch({ type: 'BUY', payload: newarr })
		}
	}

	return (
		<>
			<center>
				<div className=' flex justify-around  rounded-sm flex-col'>
					<div className='money flex justify-around'>
						<div className=' w-96 h-[300px]  bg-green-400 flex-col'>
							<h1 className='text-7xl '>Cash</h1>
							<h1>{cash}$</h1>
						</div>
						<div className='w-96 h-[300px] bg-slate-300 flex flex-col'>
							<h1 className='text-7xl'>Expenses</h1>
							<h1>{expenses ? `${expenses}$` : 'No costs'}</h1>
						</div>
					</div>
					<div className='input flex gap-5 flex-col my-4 justify-center'>
						<label className='relative block'>
							<span className='sr-only'>ProductName</span>
							<span className='absolute inset-y-0 left-0 flex items-center pl-2'>
								<svg
									className='h-5 w-5 fill-slate-300'
									viewBox='0 0 20 20'
								></svg>
							</span>
							<input
								className='placeholder:italic placeholder:text-slate-400 block bg-white w-[350px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
								placeholder='Product name...'
								name='search'
								onChange={e => setProductName(e.target.value)}
								value={ProductName}
								maxLength={10}
							/>
						</label>{' '}
						<label className='relative block'>
							<span className='sr-only'>ProductPrice</span>
							<span className='absolute inset-y-0 left-0 flex items-center pl-2'>
								<svg
									className='h-5 w-5 fill-slate-300'
									viewBox='0 0 20 20'
								></svg>
							</span>
							<input
								value={ProductPrice < 0 ? 0 : ProductPrice}
								className='placeholder:italic placeholder:text-slate-400 block bg-white w-[350px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
								placeholder='Product price'
								pattern='1-&'
								type='number'
								autoComplete='on'
								name='search'
								onChange={e => setProductPrice(e.target.value)}
							/>
							<button
								onClick={() => BuyProduct()}
								type='button'
								className='btn btn-outline-primary bg-orange-700 w-32   rounded h-12   flex justify-center my-3 items-center text-white'
							>
								Buy
							</button>
						</label>
					</div>
				</div>
				{Product.length ? (
					<div className='relative overflow-x-auto sm:rounded-lg w-[1000px]'>
						<table className='w-[1000px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
							<thead className='text-xs  uppercase bg-gray-50 dark:text-gray-400'>
								<tr>
									<th scope='col' className='px-6 py-3'>
										Product name
									</th>

									<th scope='col' className='px-6 py-3'>
										Price
									</th>
									<th scope='col' className='px-6 py-3'>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{Product.map(el => (
									<tr className='bg-white border-b'>
										<th
											scope='row'
											className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black'
										>
											<h5>{el.title}</h5>
										</th>

										<td className='px-6 py-4'>{el.price}$</td>

										<td className='px-6 py-4'>
											<a
												onClick={() =>
													dispatch({ type: 'DELETE', payload: el })
												}
												href='#'
												className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
											>
												Delete
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : null}
			</center>
		</>
	)
}

export default Home
