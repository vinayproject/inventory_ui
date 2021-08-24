import React from 'react';
import { Result, Button } from 'antd';

export default function index() {
	return (
		<div style={{ paddingTop: '10rem' }}>
			<Result
				status='warning'
				title='Development is in progress..'
				extra={
					<Button type='primary' key='console'>
						Contact Us
					</Button>
				}
			/>
		</div>
	);
}
