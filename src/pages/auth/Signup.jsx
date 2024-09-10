import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { apiConst } from '../../constants/api.constants';
import { FcGoogle } from "react-icons/fc";
const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup.string().required('Phone Number is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  dateOfBirth: yup.date().required('Date of Birth is required'),
  roles: yup.string().required('Role is required'),
});

const SignupForm = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };




  const navigate = useNavigate();
  const onLogin = () => {

    navigate(apiConst.Login.replace(':page', 'login'))
  }
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-4/12 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl text-gray-800 font-bold">Sign up</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl md:text-3xl hover:text-gray-700">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            {...register('fullName')}
            placeholder='Full Name'
            className={`w-full p-2 border rounded mt-1 mb-4 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.fullName && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.fullName.message}
            </p>
          )}

          <input
            type='email'
            placeholder='Email Address'
            {...register('email')}
            className={`w-full p-2 border rounded mt-1 mb-4 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.email.message}
            </p>
          )}

          <div className="flex items-start mt-5 mb-4">
            <input
              type="checkbox"
              className="mr-2 mt-1"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="text-xs text-gray-500">
              I agree to Zomato's{' '}
              <a href="#" className="text-red-500 hover:underline">
                Terms of Service
              </a>,{' '}
              <a href="#" className="text-red-500 hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="text-red-500 hover:underline">
                Content Policies
              </a>
            </label>
          </div>

          <div className='mb-4'>
            <button
              type='submit'
              className={`w-full py-2 rounded-lg ${isChecked ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              Create Account
            </button>
          </div>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>

          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            <span className="mr-2">
              <   FcGoogle className="w-5 h-5" />
            </span>
            Sign in with Google
          </button>
          <div className="mt-4 text-center text-gray-500 text-sm">
            Already have an account?{' '}
            <a href="" className="text-red-500 hover:underline" onClick={onLogin}>
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>

  );
};

export default SignupForm;
