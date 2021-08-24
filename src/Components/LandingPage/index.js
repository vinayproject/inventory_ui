import { Button, message } from 'antd';
import React, { Component } from 'react';
//import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from '../../Shared/Utilities/Interceptor/axiosinterceptor';

import './style.scss';

class Landingpage extends Component {
	// componentDidMount() {
	// 	let token = localStorage.getItem('usr');
	// 	token && this.props.history.push('/dashboard/home');
	// }

	handleSubmit = (data, type) => {
		let reqObj = {};
		if (type === 'FACEBOOK') {
			reqObj.oAuthuser_name = data.name;
			reqObj.oAuth_user_id = data.id;
			reqObj.oAuth_type = type;
			reqObj.oAuth_profile_pic = data.picture.data.url;
		}
		axios
			.post('/auth/signup', reqObj)
			.then((res) => {
				if (res.data.status === 'OK') {
					localStorage.setItem('usr', res.data.payLoad);

					axios
						.get('/dashboard/getgenehmigung')
						.then((res) => {
							if (res.data.status === 'OK') {
								localStorage.setItem('permitted', res.data.payLoad);
								this.props.history.push('/dashboard/home');
							} else {
								message.error(res.data.errorMessage && res.data.errorMessage);
							}
						})
						.catch((rej) => {
							message.error('something went wrong in permission');
						});
				} else {
					message.error(res.data.errorMessage && res.data.errorMessage);
				}
			})
			.catch((rej) => {
				message.error('something went wrong in signup');
			});
	};

	customLogin = () => {
		// localStorage.setItem('usr', 'ekjvnejnvjefvjkfebvhevhfbvh');
		// this.props.history.push('/dashboard/home');
		axios
			.post('/auth/login', { user_id: 'U2FsdGVkX1/OrRc322CVDS3av/xNeJtN/cfEtmKt50I=' })
			.then((res) => {
				localStorage.setItem('usr', 'U2FsdGVkX1/OrRc322CVDS3av/xNeJtN/cfEtmKt50I=');
				localStorage.setItem('usr_profile', JSON.stringify(res.data.payLoad));
				axios
					.get('/dashboard/getgenehmigung')
					.then((res) => {
						console.log(res.data);
						if (res.data.status === 'OK') {
							localStorage.setItem('permitted', JSON.stringify(res.data.payLoad));
							this.props.history.push('/dashboard/home');
						} else {
							message.error(res.data.errorMessage && res.data.errorMessage);
						}
					})
					.catch((rej) => {
						message.error('something went wrong in permission');
					});
			})
			.catch((rej) => {
				message.error('something went wrong in signup');
			});
	};

	render() {
		return (
			<div className='landing-page-wrapper'>
				<div className='content'>
					{/* <GoogleLogin
						clientId='ontent.com'
						buttonText='LOGIN WITH GOOGLE'
						onSuccess={this.handleSubmit}
						onFailure={this.onOauthFailed}
						cookiePolicy={'single_host_origin'}
					/> */}
					{/* <FacebookLogin
						fields='name,email,picture'
						callback={(Data) => this.handleSubmit(Data, 'FACEBOOK')}
						//scope='user_birthday'
					/> */}

					<Button size='large' type='primary' onClick={() => this.customLogin()}>
						Test Login
					</Button>
				</div>
			</div>
		);
	}
}

export default Landingpage;
