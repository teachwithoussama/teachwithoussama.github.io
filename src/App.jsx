export default function TailwindTest() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Tailwind Test</h1>
        <p className="text-gray-700">
          If you see blue background, white card, red text, and shadows -
          Tailwind is working!
        </p>
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
          Test Button
        </button>
      </div>
    </div>
  );
}
