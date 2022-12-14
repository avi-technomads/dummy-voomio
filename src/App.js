import { Routes, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Aggregator from './Components/Aggregator/Aggregator';
import NftGenerator from './Components/NftGenerator/NftGenerator';
import UploadNft from './Components/UploadNft/UploadNft';
import Preview from './Components/UploadNft/Preview';
import Generate from './Components/UploadNft/Generate';
import BuyBid from './Components/BuyAndPlace/BuyBid';

function App() {
	return (
		<>
			<Header />
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/aggregator' element={<Aggregator />} />
				<Route exact path='/nftgenerator' element={<NftGenerator />} />
				<Route exact path='/upload-nft' element={<UploadNft />} />
				<Route exact path='/preview' element={<Preview />}></Route>
				<Route exact path='/generate' element={<Generate />}></Route>
				<Route exact path='/buy-bid' element={<BuyBid />}></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
