import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { apiConst } from '../../constants/api.constants';
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup.string().required('Phone Number is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  roles: yup.string().required('Role is required'),
});

const SignInPage = ({ isOpen, onClose }) => {
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
  const navigate = useNavigate();
  const onSignup = () => {

    navigate(apiConst.Signup.replace(':page', 'signup'))
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold">Login</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl md:text-3xl hover:text-gray-700">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
            <span className="px-3 py-2 bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                alt="India flag"
                className="w-5 h-5"
              />
            </span>
            <select className="flex text-xs md:text-sm text-gray-700 focus:outline-none px-2 py-2 border-l">
              <option value="+91">+91 </option>
              <option value="+1">+1 </option>
              <option value="+44">+44 </option>
              <option value="+61">+61 </option>
              <option value="+81">+81 </option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type='text'
              {...register('phone')}
              className={`w-full p-2 border rounded mt-1 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.phone && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.phone.message}
              </p>
            )}
          </div>

          <button className="bg-red-500 text-white py-2 rounded-lg w-full mb-4 hover:bg-red-600"
            type='submit'>
            Send One Time Password
          </button>

          {/* OR Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs md:text-sm">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>

          {/* Continue with Email */}
          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg mb-4 hover:bg-gray-100">
            <span className="text-red-500 mr-2 text-xl md:text-2xl">
              <MdEmail />
            </span>
            Continue with Email
          </button>

          {/* Sign in with Google */}
          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            <span className="mr-2 text-xl md:text-2xl">
              <FcGoogle />
            </span>
            Sign in with Google
          </button>

          {/* Create Account Link */}
          <div className="mt-4 text-center text-gray-500 text-xs md:text-sm">
            New to Zomato?{' '}
            <a href="#" className="text-red-500 hover:underline" onClick={onSignup}>
              Create account
            </a>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignInPage;
