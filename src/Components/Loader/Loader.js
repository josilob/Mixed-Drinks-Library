import loader from '../../images/bwloader.gif';

const Loader = () => {
	return (
		<div className='loader'>
			<img src={loader} alt='Loading' className='fetch-loader' />
		</div>
	);
};

export default Loader;
