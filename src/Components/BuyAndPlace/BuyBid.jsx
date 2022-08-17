import React from 'react';
import './BuyBid.css';

const BuyBid = () => {
	return (
	<div>
		<div className='pt-20'>
			<div className='grid grid-cols-1 md:grid-cols-2 px-6 max-w-3xl gap-4 rounded-xl shadow-xl py-4'>
				{/* column-1 */}

				<div>
					<div className=''>
						<img src='/images/buyMonkey.svg' alt='' className='w-72 h-72' />
					</div>

					<div className='flex gap-3 mt-6 items-center neueHaasGrotesk'>
						<div>
							<img src='/images/ellipse.svg' alt='' />
						</div>
						<div>
							<div className='text-xs text-[#6549F6]'>COLLECTION</div>
							<div className='text-base font-medium'>Lorem Collection</div>
						</div>
					</div>

					<div className='flex gap-3 mt-6 items-center neueHaasGrotesk'>
						<div>
							<img src='/images/ellipse.svg' alt='' />
						</div>
						<div>
							<div className='text-xs text-[#6549F6]'>OWNER</div>
							<div className='text-base font-medium'>0x0084...8230X</div>
						</div>
					</div>

					<div className='flex gap-3 mt-6 items-center neueHaasGrotesk'>
						<div>
							<img src='/images/ellipse.svg' alt='' />
						</div>
						<div>
							<div className='text-xs text-[#6549F6]'>CREATOR</div>
							<div className='text-base font-medium'>0x0084...8230X</div>
						</div>
					</div>
				</div>

				{/* column-2 */}
				<div>
					<div>
						<div className='flex justify-center gap-8'>
							<div className='text-[#6549F6] font-medium'>Details</div>
							<div>Traits</div>
						</div>
						<div className='border-t-2' />
					</div>

					<div className='mt-6'>
						<div className='font-bold text-xl'>Lorem Collection #8391</div>
						<div className='mt-3'>
							The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can
							only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or
							by minting a Mutant Ape in the public sale.
						</div>

						<div className='gradient-back mt-8 flex px-2 md:px-4 py-2 rounded-xl justify-start relative'>
							<div className='text-white'>
								<div className='font-medium text-sm '>Purchase Price</div>
								<div className='flex gap-1 items-center pt-2'>
									<div>
										<img src='/images/whiteEthereum.svg' alt='' />
									</div>
									<div className='font-medium text-3xl'>70</div>
									<div className='text-base'>ETH</div>
								</div>
								<div className='text-sm pt-2'>($189,000.56 USD)</div>
								<div className='font-medium text-xs pt-2'>Date: 07/20/22</div>
							</div>
							<div className='absolute -top-12 md:-top-16 right-0 '>
								<img src='/images/offMarket.svg' alt='' className='h-44' />
							</div>
						</div>

						<div className='grid grid-cols-2 gap-2 mt-8 '>
							<div className='gradient-back rounded-3xl flex items-center py-3'>
								<div className='mx-auto text-white font-medium'>Make Offer</div>
							</div>
							<div className='rounded-3xl flex items-center homebuttonborder'>
								<div className='mx-auto bidButton'>Message Owner</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
};

export default BuyBid;
