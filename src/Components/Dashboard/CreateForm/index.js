import React, { Component } from 'react';
import { Form, Input, Row, Col, InputNumber, DatePicker, Button, Card, message } from 'antd';
import Uploader from './UploadHandler';

import axios from '../../../Shared/Utilities/Interceptor/axiosinterceptor';
import { CREATE_LIST_FORM } from './../../../Constants/jsonMockData';
import './style.scss';

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 12 },
		sm: { span: 16 },
	},
};

class CreateForm extends Component {
	state = {
		documents: null,
		loading: false,
	};

	getInputText = (item) => (
		<Col span={8} key={item.key}>
			<Form.Item label={item.label}>
				{this.props.form.getFieldDecorator(`${item.key}`, {
					rules: [...this.getRules(item)],
				})(<Input placeholder={item.label} />)}
			</Form.Item>
		</Col>
	);

	getInputNumber = (item) => (
		<Col span={8} key={item.key}>
			<Form.Item label={item.label}>
				{this.props.form.getFieldDecorator(`${item.key}`, {
					rules: [...this.getRules(item)],
				})(<InputNumber placeholder={item.label} />)}
			</Form.Item>
		</Col>
	);

	getDatePicker = (item) => (
		<Col span={8} key={item.key}>
			<Form.Item label={item.label}>
				{this.props.form.getFieldDecorator(`${item.key}`, {
					rules: [...this.getRules(item)],
				})(<DatePicker style={{ width: '100%' }} placeholder={item.label} />)}
			</Form.Item>
		</Col>
	);

	getRules = (item) => {
		let rules = [];
		if (item.mandatory) {
			rules.push({ required: true, message: `Please input your ${item.label}` });
		}
		return rules;
	};

	getFormFields = (item) => {
		if (item.type === 'input') {
			return this.getInputText(item);
		} else if (item.type === 'inputNumber') {
			return this.getInputNumber(item);
		} else if (item.type === 'inputDate') {
			return this.getDatePicker(item);
		}
	};

	addDocuments = (documents) => {
		this.setState({ documents });
	};

	onSubmitItem = () => {
		this.props.form.validateFields((err, val) => {
			if (!err) {
				this.setState({ loading: true });
				let doc = [];
				if (this.state.documents !== null) {
					if (this.state.documents.fileList.length !== 0) {
						this.state.documents.fileList.forEach((element) => {
							doc.push(element.response);
						});
					}
				}
				axios.post('/dashboard/add-item', { ...val, doc }).then((res) => {
					if (res.data.statusCode === 200) {
						this.setState({ loading: false });
						this.props.form.resetFields();
						message.success(res.data.msg);
						this.props.history.push('/dashboard/home');
					} else {
						this.setState({ loading: false });
						message.success(res.data.msg);
					}
				});
			}
		});
	};

	render() {
		let { loading } = this.state;
		return (
			<div className='create-form-wrapper'>
				<div style={{ marginTop: '8rem' }}>
					<h1 style={{ margin: '1.5rem', color: '#036D7A' }}>ADD ITEMS ( Fill the form to add items )</h1>
					<Card>
						<Form {...formItemLayout} onSubmit={this.handleSubmit} className='login-form'>
							<Row gutter={24}>{CREATE_LIST_FORM.map((item) => this.getFormFields(item))}</Row>
							<Uploader addDocuments={this.addDocuments} />
						</Form>
						<div style={{ float: 'right', marginTop: '2rem' }}>
							<Button loading={loading} type='primary' onClick={this.onSubmitItem}>
								SUBMIT
							</Button>
						</div>
					</Card>
				</div>
			</div>
		);
	}
}

export default Form.create({ name: 'create_form' })(CreateForm);
