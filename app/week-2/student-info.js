import Link from 'next/link';

export default function StudentInfo() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-10">
        <div className="shadow-lg border border-blue-300 p-6 rounded-lg w-full bg-white">
            <p className="text-xl font-bold text-black">Preetinder Singh</p>
            <p className="text-md text-black mt-2">
                GitHub : 
                <Link href="https://github.com/Preetinder325" className="text-blue-400 hover:text-blue-600 transition duration-200">Preetinder325
                </Link>
            </p>
        </div>
      </main>
    );
}