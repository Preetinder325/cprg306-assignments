import StudentInfo from './student-info.js'; 

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <div className="bg-blue-300 p-6 rounded-lg w-full text-center">
        <h1 className="text-3xl font-mono font-bold text-black mb-4">Shopping List</h1>
        <StudentInfo />
      </div>
    </main>
  );
}