import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className='border-b text-center'>20% off for 3 days</div>
			{children}
		</>
	); 
};

export default layout;
