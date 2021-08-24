import { Col, Divider, Row } from 'antd';
import React from 'react';
import './style.scss';

const pStyle = {
	fontSize: 16,
	color: 'rgba(0,0,0,0.85)',
	lineHeight: '24px',
	display: 'block',
	marginBottom: 16,
};

const DescriptionItem = ({ title, content }) => (
	<div
		style={{
			fontSize: 14,
			lineHeight: '22px',
			marginBottom: 7,
			color: 'rgba(0,0,0,0.65)',
		}}
	>
		<p
			style={{
				marginRight: 8,
				display: 'inline-block',
				color: 'rgba(0,0,0,0.85)',
			}}
		>
			{title}:
		</p>
		{content}
	</div>
);

export default class Profile extends React.Component {
	render() {
		return (
			<Row className='profile-wrapper'>
				<p style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
				<p style={pStyle}>Personal</p>
				<Row>
					<Col span={12}>
						<DescriptionItem title='Full Name' content='Lily' />
					</Col>
					<Col span={12}>
						<DescriptionItem title='Account' content='pavantech@example.com' />
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<DescriptionItem title='City' content='HangZhou' />
					</Col>
					<Col span={12}>
						<DescriptionItem title='Country' content='China🇨🇳' />
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<DescriptionItem title='Birthday' content='February 2,1900' />
					</Col>
					<Col span={12}>
						<DescriptionItem title='Website' content='-' />
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<DescriptionItem title='Message' content='Make things as simple as possible but no simpler.' />
					</Col>
				</Row>
				<Divider />

				<p style={pStyle}>Contacts</p>
				<Row>
					<Col span={12}>
						<DescriptionItem title='Email' content='pavantech@pavan.com' />
					</Col>
					<Col span={12}>
						<DescriptionItem title='Phone Number' content='+86 181 0000 0000' />
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<DescriptionItem title='Github' content={'pavan tech'} />
					</Col>
				</Row>
			</Row>
		);
	}
}
