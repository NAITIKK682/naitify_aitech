import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import SignupForm from '../../components/auth/SignupForm';

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md p-8 mx-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Sign Up
        </h2>

        <SignupForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default SignupModal;
