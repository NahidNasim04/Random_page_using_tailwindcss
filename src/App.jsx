function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">TaskFlow</h1>

          <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
            <li className="hover:text-indigo-600 cursor-pointer">Features</li>
            <li className="hover:text-indigo-600 cursor-pointer">Pricing</li>
            <li className="hover:text-indigo-600 cursor-pointer">About</li>
            <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
          </ul>

          <button className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center px-6 py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Organize Your Work. Boost Your Productivity 🚀
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            TaskFlow helps teams manage tasks, track progress, and collaborate
            seamlessly — all in one simple and powerful platform.
          </p>

          <div className="space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition">
              Get Started Free
            </button>

            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl hover:bg-indigo-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">
            Powerful Features
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 shadow-md rounded-xl hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-4 text-indigo-600">
                Smart Task Management
              </h4>
              <p className="text-gray-600">
                Create, assign and track tasks easily with real-time updates.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-4 text-indigo-600">
                Team Collaboration
              </h4>
              <p className="text-gray-600">
                Collaborate with your team using comments, mentions and shared boards.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl hover:shadow-xl transition">
              <h4 className="text-xl font-semibold mb-4 text-indigo-600">
                Analytics & Insights
              </h4>
              <p className="text-gray-600">
                Track productivity with advanced reports and performance insights.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call To Action */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">
          Ready to improve your workflow?
        </h3>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          Start Your Free Trial
        </button>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-xl font-semibold mb-4">TaskFlow</h4>
          <p className="text-sm mb-4">
            Simplifying teamwork and productivity worldwide.
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
