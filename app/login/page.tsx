export default function Home() {
    
    return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-teal-700">
            Pathly
          </h1>
          <p className="mt-2 text-slate-500">
            Learn. Connect. Grow.
          </p>
        </div>

        <h2 className="mb-2 text-2xl font-semibold text-slate-900">
          Welcome back
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          Sign in to continue your journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-teal-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 pr-16 text-slate-900 outline-none focus:border-teal-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-teal-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-teal-700 py-3 font-semibold text-white transition hover:bg-teal-800"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          New to Pathly?{" "}
          <Link href="/register" className="font-semibold text-teal-700 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
