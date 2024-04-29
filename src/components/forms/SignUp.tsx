
import { useState } from 'react';
import { useForm, Controller, RegisterOptions } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 
import Input from './Input';
import './SignUp.css';
import InputForm from './InputForm';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const { control, handleSubmit } = useForm<{
    name:string,
    email:string,
    password:string
  }>();


  const navigate = useNavigate(); 
  const onSubmit = (data: any) => {
    console.log('Form submitted', data);
    navigate('/login'); 
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const commonRules = {

    name:{
     required:{
      value:true,
      message:'enter the username'
     }
    },
    
    email: {
      required:{
        value:true,
        message:'enter the email'
       },
      pattern:{
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'please enter the valid email'
      }
    },
    password:{
      required:{
        value:true,
        message:'enter the password'
       },
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters'
      }
    }
  } satisfies Record<string,RegisterOptions>;
  

  return (
    <div className="form-container">
      <h1 className="form-title">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Create Component, InputForm, SelectForm */}
        

      <InputForm  control={control} name={'name'}  rules={commonRules.name}/>

        <InputForm control={control} name={'email'}  rules={{
          required:{
            value:true,
            message: 'email is required'
          }
        }}/>

      <InputForm control={control} name={'password'} rules={commonRules.password}/>

    
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;









  {/* <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          }}
          render={({ field }) => (
            <Input
              htmlFor="email"
              labelText="E-mail"
              inputType="email"
              inputClassName="form-input"
              error={errors.email?.message}
              onChange={(value) => {
                field.onChange(value);
                handleInputChange('email', value);
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
            <Input
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
          )} */}
        {/* /> */}


{/* <Controller
          name="userName"
          control={control}
          rules={{ required: 'Username is required' }}
          render={({ field }) => (
            <Input 
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
        /> */}



