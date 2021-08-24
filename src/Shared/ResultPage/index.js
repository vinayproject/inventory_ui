import React from 'react';
import { Result, Button } from 'antd';

export const INPROGRESS = (props) => (
	<Result
		status='warning'
		title='DASHBOARD WORK IN PROGRESS.'
		extra={
			<Button onClick={() => props.history.push('/')} type='primary' key='console'>
				Go TO LOGIN
			</Button>
		}
	/>
);
