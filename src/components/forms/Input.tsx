// import React from 'react';
// import './LabelInput.css'
// type LabelInputProps ={
//     htmlFor: string;
//     labelText: string;
//     inputType: string;
//     inputId: string;
//     inputClassName?: string;
//     register: any; 
//     error?: string;
//   }

// const LabelInputComponent = ({ htmlFor, labelText, inputType, inputId, inputClassName, register, error }:LabelInputProps) => {
//   return (
//     <div>
//       <label htmlFor={htmlFor}>{labelText}</label>
//       <input
//         type={inputType}
//         id={inputId}
//         className={inputClassName}
//         {...register(inputId, { required: `${labelText} is required` })}
//       />
//       <p className="error-message">{error}</p>
//     </div>
//   );
// };

// export default LabelInputComponent;


import  { forwardRef, ChangeEvent } from 'react';
import './Input.css';

type LabelInputProps ={
    htmlFor: string;
    labelText: string;
    inputType: string;
    inputClassName?: string;
    error?: any;
    onChange: (value: string) => void; 
}

const Input = forwardRef<HTMLInputElement, LabelInputProps>(({ htmlFor, labelText, inputType, inputClassName, error, onChange }, ref) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value); 
    };

    return (
        <div>
            <label htmlFor={htmlFor}>{labelText}</label>
            <input
                ref={ref}
                type={inputType}
                className={inputClassName}
                onChange={handleChange} 
            />
            {error && <p className="error-message">{error}</p>}
        </div>
    );
});

export default Input;
