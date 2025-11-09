export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-20">
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-4">염채은</h1>
        <p className="text-xl text-gray-600">개발자</p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-gray-700 leading-relaxed">
          안녕하세요. 개발자 염채은입니다.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <div className="flex gap-4">
          <a href="https://github.com/YeomChaeeun" className="text-blue-600 hover:underline">
            GitHub
          </a>
          <a href="mailto:yce0222@gmail.com" className="text-blue-600 hover:underline">
            Email
          </a>
        </div>
      </section>
    </main>
  )
}