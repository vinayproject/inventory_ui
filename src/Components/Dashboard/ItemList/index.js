import React, { Component } from 'react';
import { Button, Card, Col, message, Row } from 'antd';

import './style.scss';
import axios from '../../../Shared/Utilities/Interceptor/axiosinterceptor';
import LottieLoading from './../../../Constants/LottieJsons/7861-loading-animation.json';
import LotteNodata from './../../../Constants/LottieJsons/5081-empty-box.json';
import Lottie from 'lottie-react-web';

class ItemList extends Component {
	state = {
		itemList: null,
	};

	componentDidMount() {
		axios.get('/dashboard/getList').then((res) => {
			if (res.data.statusCode === 200) {
				this.setState({
					itemList: res.data.payLoad,
				});
			} else {
				message.error(res.data.msg);
			}
		});
	}

	onDelete = (i) => {
		axios.delete(`/dashboard/delete-item/${i.item_list_id}`).then((res) => {
			if (res.data.statusCode === 200) {
				let itemList = [...this.state.itemList];
				let index = itemList.findIndex((item) => i.item_list_id === item.item_list_id);
				if (index !== -1) {
					itemList.splice(index, 1);
					message.success(res.data.msg);
					this.setState({ itemList });
				}
			} else {
				message.error(res.data.msg);
			}
		});
	};

	render() {
		let { itemList } = this.state;
		return (
			<div className='item-list-wrapper'>
				{itemList === null ? (
					<Lottie
						options={{
							animationData: LottieLoading,
						}}
						width='30%'
						height='30%'
					/>
				) : itemList.length !== 0 ? (
					<Row style={{ marginTop: '5rem' }} justify='center' gutter={[24, 32]}>
						{itemList.map((i, key) => (
							<Col key={key} span={8}>
								<Card title={`Item No : ${i.item_list_id}`} bordered={false}>
									<Row type='flex' justify='space-between'>
										<Col>
											<strong>Name </strong>
											{i.item_name}
										</Col>
										<Col>
											<Button onClick={() => this.onDelete(i)} type='danger'>
												Delete
											</Button>
											<Button style={{ marginLeft: '0.7rem' }} type='primary'>
												Edit
											</Button>
										</Col>
									</Row>
								</Card>
							</Col>
						))}
					</Row>
				) : (
					<>
						<Lottie
							options={{
								animationData: LotteNodata,
							}}
							width='30%'
							height='30%'
						/>
						<div style={{ textAlign: 'center' }}>
							<h1>
								Item List <span style={{ color: 'red' }}>EMPTY</span>
							</h1>
						</div>
					</>
				)}
			</div>
		);
	}
}

export default ItemList;
