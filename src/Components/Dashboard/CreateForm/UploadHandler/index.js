import React, { Component } from 'react';
import { Upload, Icon } from 'antd';
import { URL } from '../../../../Shared/Utilities/Interceptor/axiosinterceptor';

import './style.scss';

class UploadHandler extends Component {
	state = {
		previewVisible: [],
		previewImage: [],
		fileList: [],
	};

	handleCancel = () => this.setState({ previewVisible: false });
	handleChange = ({ fileList }) => {
		this.setState({ fileList });
		this.props.addDocuments({ fileList });
	};
	render() {
		const { fileList } = this.state;
		const uploadButton = (
			<div>
				<Icon style={{ fontSize: '2.5rem' }} type='upload' />
				<div className='ant-upload-text'>Documents</div>
			</div>
		);
		return (
			<div className='upload-wrapper'>
				<Upload
					action={`${URL}/dashboard/upload`}
					headers={{ Authorization: `Bearer ${localStorage.getItem('usr')}` }}
					listType='picture-card'
					fileList={fileList}
					onChange={this.handleChange}
				>
					{fileList.length >= 8 ? null : uploadButton}
				</Upload>
			</div>
		);
	}
}

export default UploadHandler;
