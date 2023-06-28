'use client'; // Error components must be Client components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="mx-auto max-w-lg py-1 px-4 min-h-screen my-20">
            <h2 className="my-4 text-2xl font-bold">Có lỗi, xin thử lại sau!</h2>
            <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Thử lại
            </button>
            <p className="text-xl">
                Hoặc quay lại trang chủ <Link href="/" className="underline">Home 🏠</Link>
            </p>
        </main>
    );
}