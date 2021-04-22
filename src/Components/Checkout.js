function Checkout() {
	return (
		<section>
			<h2>Checkout</h2>
			<form className='TeacherEnrollment'>
				<label htmlFor='firstName'>First Name</label>
				<input type='text' />

				<label htmlFor='lastName'>Last Name</label>
				<input type='text' />

				<label htmlFor='Email'>Email</label>
				<input type='text' />

				<label htmlFor='creditCard'>Credit Card</label>
				<input type='text' />

				<label htmlFor='zipCode'>Zip Code</label>
				<input type='text' />

				<button>Buy Now</button>
			</form>
		</section>
	)
}

export default Checkout
