"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image'; // If using Next.js

const Page: React.FC = () => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!amount) {
            setError('Please enter an amount');
            return;
        }

        try {
            // Prepare the payment data
            const paymentData = {
                amt: amount,
                psc: 0, // optional: payment service charge
                txAmt: amount,
                productName: 'Your Product Name',
                // Add more fields as necessary
            };

            // Send request to your backend to initiate the payment
            const response = await axios.post('/api/esewa/initiate-payment', paymentData);

            // Redirect to eSewa for payment
            if (response.data.success) {
                window.location.href = response.data.paymentUrl; // Redirect to eSewa
            } else {
                setError('Payment initiation failed');
            }
        } catch (err) {
            setError('An error occurred while processing your request');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-10 rounded-lg shadow-lg w-96 transition-transform duration-300 hover:scale-105">
                <div className="text-center mb-6">
                    <Image src="/path/to/esewa-logo.png" alt="eSewa Logo" width={150} height={50} />
                    <h2 className="text-3xl font-bold text-green-800 mt-2 animate-pulse">eSewa Payment</h2>
                </div>

                {error && <div className="text-red-500 mb-4">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-gray-700" htmlFor="amount">
                            Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            placeholder="Enter amount"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-200 transform hover:translate-y-1"
                    >
                        Pay Now
                    </button>
                </form>

                <div className="mt-4 text-center text-gray-600">
                    <p>Secure payments powered by eSewa</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
