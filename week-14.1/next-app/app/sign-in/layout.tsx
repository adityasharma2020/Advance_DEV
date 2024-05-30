import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='border-b text-center'>
			<div>50% off for 3 days</div>
			{children}
		</div>
	);
};

export default layout;
