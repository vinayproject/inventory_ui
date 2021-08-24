import React, { Component } from 'react';
import { Row, Col, Tooltip } from 'antd';
import { Route, Switch, NavLink } from 'react-router-dom';
import ItemList from './ItemList';
import Profile from './Profile';
import Privacy from './Privacy';
import CreateForm from './CreateForm';

import './style.scss';

class Dashboard extends Component {
	render() {
		let profile = JSON.parse(localStorage.getItem('usr_profile'));
		return (
			<div className='dashboard-wrapper'>
				<Row className='header'>
					<Col offset={12} className='header-navs' span={12}>
						<NavLink to='/dashboard/home' activeClassName='selected' className='default-style'>
							Home
						</NavLink>
						{/* <NavLink to='/dashboard/report-loss' activeClassName='selected' className='default-style'>
							REPORT LOSS
						</NavLink>

						<NavLink to='/dashboard/backups' activeClassName='selected' className='default-style'>
							BACKUPS
						</NavLink>

						 */}
						<NavLink to='/dashboard/privacy' activeClassName='selected' className='default-style'>
							PRIVACY
						</NavLink>
						<NavLink to='/dashboard/profile' activeClassName='selected' className='default-style'>
							PROFILE
						</NavLink>
						<NavLink to='/dashboard/create-form' activeClassName='selected' className='default-style'>
							Create
						</NavLink>
						<Tooltip title={profile.user_name}>
							<img
								//src={profile.profile_pic}
								src='https://economictimes.indiatimes.com/thumb/msid-69381991,width-1200,height-900,resizemode-4,imgsize-594328/hacker-1.jpg?from=mdr'
								alt='profile pic'
								style={{ borderRadius: '50%', cursor: 'pointer', height: '5.5rem', width: '5.5rem' }}
								onClick={() => this.props.history.push('/dashboard/profile')}
							/>
						</Tooltip>
					</Col>
				</Row>
				<div style={{ height: '80%' }}>
					<Switch>
						<Route path='/dashboard/home' component={ItemList} />
						<Route path='/dashboard/profile' component={Profile} />
						<Route path='/dashboard/privacy' component={Privacy} />
						<Route path='/dashboard/create-form' component={CreateForm} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default Dashboard;
