'use client';
import React from 'react';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
    const handleClick = () => {
        signOut();
    }

    return (
        <button
            onClick={handleClick}
            className="bg-black text-white px-10 py-2 font-light text-xl rounded-lg"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
