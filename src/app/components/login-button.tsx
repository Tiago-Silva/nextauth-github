'use client';
import React from 'react';
import {FaGithub} from "react-icons/fa";

const LoginButton = () => {
    return (
        <button
            className="mt-24 bg-black text-white px-6 py-3 flex items-center gap-3 rounded-lg mx-auto"
        >
            <FaGithub />
            Login com Github
        </button>
    );
};

export default LoginButton;
