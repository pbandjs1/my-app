export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        🚀 Welcome to My First Next.js + Tailwind Page!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Edit this text in <code>pages/index.js</code> to make it yours.
      </p>
      <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
        Clicking this button does nothing.
      </button>
      <p className="text-lg text-gray-700 mb-6">
        My name is Nick and I threw the first pitch at a Seattle Mariners Game when I was 8.
      </p>
      <img src="C:\Projects\my-app\src\app\images\mariners.jpg" className="h-auto" />
    </main>
  )
}