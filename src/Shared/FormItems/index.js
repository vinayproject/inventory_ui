import React from 'react';
import { Form, Select, Radio, Input, InputNumber, DatePicker } from 'antd';
import moment from 'moment';

const Option = Select.Option;
const Format = 'MM/DD/YYYY';
const { TextArea } = Input;

const GetTextInput = (props) => (
	<Form.Item label={props.label} hasFeedback validateStatus={props.validating}>
		{console.log(props)}
		{props.getFieldDecorator('km', {
			initialValue: props.defaultValue,
			rules: props.rules,
		})(<Input type={'text'} min={0} placeholder={props.label} />)}
	</Form.Item>
);

const GetDatePicker = (props) => (
	<Form.Item className='label' colon={false} label={props.label} hasFeedback>
		{props.getFieldDecorator(props.key, {
			initialValue: props.default_value ? moment(props.default_value).format(Format) : moment().format(Format),
			rules: props.rules,
		})(
			<DatePicker
				format={Format}
				name={props.key}
				style={{
					width: '100%',
				}}
			/>
		)}
	</Form.Item>
);

const GetDropDown = (props) => (
	<Form.Item label={props.label} hasFeedback validateStatus={props.validating}>
		{props.getFieldDecorator(props.key, {
			initialValue: props.defaultValue,
			rules: props.rules,
		})(
			<Select
				name={props.key}
				style={{
					width: '100%',
				}}
				loading={props.isLoading && props.isLoading}
				onChange={(value) => props.OnDropdownChange(value, props.key, 'dropdown')}
			>
				{props.option.map((item, index) => {
					return (
						<Option key={index} value={item.value}>
							{item.name}
						</Option>
					);
				})}
			</Select>
		)}
	</Form.Item>
);

const GetDropDownMultiSelect = (props) => (
	<Form.Item label={props.label} hasFeedback validateStatus={props.validating}>
		{props.getFieldDecorator(props.key, {
			initialValue: props.defaultValue,
			rules: props.rules,
		})(
			<Select
				mode={'multiple'}
				name={props.key}
				style={{
					width: '100%',
				}}
				loading={props.isLoading && props.isLoading}
				onChange={(value) => props.OnDropdownChange(value, props.key, 'dropdown')}
			>
				{props.option.map((item, index) => {
					return (
						<Option key={index} value={item.value}>
							{item.name}
						</Option>
					);
				})}
			</Select>
		)}
	</Form.Item>
);

const GetInputNumber = (props) => (
	<Form.Item label={props.label} hasFeedback validateStatus={props.validating}>
		{props.getFieldDecorator(props.key, {
			getValueFromEvent: (e) => {
				if (e !== undefined) {
					const convertedValue = Number(e);
					if (isNaN(convertedValue)) {
						return Number(props.form.getFieldValue(props.key));
					} else {
						return convertedValue;
					}
				}
			},
			initialValue: props.defaultValue,
			rules: props.rules,
		})(<InputNumber style={{ width: '100%' }} type='number' name={props.key} placeholder={props.label} />)}
	</Form.Item>
);

const GetInputPassword = (props) => (
	<Form.Item label={props.label} hasFeedback validateStatus={props.validating}>
		{props.getFieldDecorator(props.key, {
			initialValue: props.defaultValue,
			rules: props.rules,
		})(<Input.Password name={props.key} placeholder={props.label} />)}
	</Form.Item>
);

const GetRadioButtons = (props) => (
	<Form.Item label={props.label} hasFeedback validateStatus={props.validating}>
		{props.getFieldDecorator(props.key, {
			initialValue: props.default_value,
			rules: props.rules,
		})(
			<Radio.Group buttonStyle='solid' name={props.key}>
				{props.option.map((item, index) => (
					<Radio key={index} value={item.value}>
						{item.value}
					</Radio>
				))}
			</Radio.Group>
		)}
	</Form.Item>
);

const GetTextArea = (props) => (
	<Form.Item label={props.label} hasFeedback validateStatus={props.validating}>
		{props.getFieldDecorator(props.key, {
			initialValue: props.defaultValue,
			rules: props.rules,
		})(<TextArea style={{ width: '100%' }} name={props.key} placeholder={props.label} />)}
	</Form.Item>
);

export {
	GetTextInput,
	GetDatePicker,
	GetRadioButtons,
	GetDropDownMultiSelect,
	GetDropDown,
	GetInputNumber,
	GetInputPassword,
	GetTextArea,
};
