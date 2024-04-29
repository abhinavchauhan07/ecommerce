import React from 'react'
import { Control, Controller, FieldValue, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import Input from './Input';

type InputFormProps<IType extends FieldValues> = {
    control: Control< IType>,
    rules: RegisterOptions<IType>,
    name: Path<IType>
}


const InputForm = <IType extends FieldValues>({control,rules,name}:InputFormProps<IType>)=> {
    

//    you can get error using getErorr methoid of controller
    return (
    <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field,fieldState:{error} }) => (
            <Input
              htmlFor={name}
              labelText={name}
              inputType="text"
              inputClassName="form-input"
              error={error?.message}
              onChange={(value) => {
              field.onChange(value);
              }}
            />
          )}
        />
  )
}

export default InputForm
