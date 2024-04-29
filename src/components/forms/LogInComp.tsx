import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 
import LabelInputComponent from './Input';
import './Login.css';

const LoginComp = () => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      userName: '',
      password: ''
    }
  });

  const { errors } = formState;
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  const navigate = useNavigate(); 
  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const onSubmit = (data: any) => {
    console.log('Form submitted', data);
    navigate('/'); 
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="userName"
          control={control}
          rules={{ required: 'Username is required' }}
          render={({ field }) => (
            <LabelInputComponent
              htmlFor="userName"
              labelText="User Name"
              inputType="text"
              inputClassName="form-input"
              error={errors.userName?.message}
              onChange={(value) => {
                field.onChange(value);
                handleInputChange('userName', value);
              }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          }}
          render={({ field }) => (
            <LabelInputComponent
              htmlFor="password"
              labelText="Password"
              inputType="password"
              inputClassName="form-input"
              error={errors.password?.message}
              onChange={(value) => {
                field.onChange(value);
                handleInputChange('password', value);
              }}
            />
          )}
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginComp;
