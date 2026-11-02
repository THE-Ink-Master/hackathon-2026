"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const suggestions = [
  "Find a mentor",
  "Explore career options",
  "Improve my knowledge",
  "Discover industry events",
];

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [error, setError] = useState("");

  const navigate = useRouter();
  function addSuggestion(suggestion: string) {
    setPurpose((current) => {
      if (current.includes(suggestion)) return current;

      return current.trim()
        ? `${current.trim()} ${suggestion}.`
        : `${suggestion}.`;
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!purpose.trim()) {
      setError("Please tell us what brings you to Pathly.");
      return;
    }

    const studentProfile = {
      name: name.trim(),
      email: email.trim(),
      purpose: purpose.trim(),
    };

    navigate.push("/dashboard");
    // TODO: Connect registration to your team's auth backend.
    // Save studentProfile after successful account creation.
    // Do not send passwords to an AI model.

    // alert(
    //   "Your registration form is valid! Account creation will be available once authentication is connected.",
    // );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Pathly Branding */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-teal-700">Pathly</h1>
          <p className="mt-2 text-slate-500">Learn. Connect. Grow.</p>
        </div>

        <h2 className="mb-2 text-2xl font-semibold text-slate-900">
          Create your account
        </h2>

        <p className="mb-6 text-sm text-slate-500">
          Start building your future with Pathly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Full name
            </label>

            <input
              id="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-teal-600"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
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

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-teal-600"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Confirm password
            </label>

            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-teal-600"
            />
          </div>

          {/* Show Password */}
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="accent-teal-700"
            />
            Show passwords
          </label>

          {/* What Brings You Here */}
          <div>
            <label
              htmlFor="purpose"
              className="mb-2 block text-base font-semibold text-slate-900"
            >
              What brings you here?
            </label>

            <p className="mb-3 text-sm text-slate-500">
              Tell us about your study interests, career goals, or what you
              would like Pathly to help you achieve.
            </p>

            <textarea
              id="purpose"
              name="purpose"
              rows={4}
              required
              maxLength={1000}
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="I'm studying IT and interested in cybersecurity. I want to improve my skills, connect with professionals, and discover career opportunities."
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-teal-600"
            />

            <p className="mt-1 text-right text-xs text-slate-400">
              {purpose.length}/1000 characters
            </p>

            {/* Quick Suggestions */}
            <p className="mt-3 mb-2 text-xs font-medium text-slate-500">
              Need inspiration? Select a suggestion:
            </p>

            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => addSuggestion(suggestion)}
                  className="rounded-full border border-teal-200 bg-teal-50 px-3 py-2 text-xs font-medium text-teal-800 transition hover:bg-teal-100"
                >
                  + {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Validation Error */}
          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          {/* Create Account */}
          <button
            type="submit"
            className="w-full rounded-lg bg-teal-700 py-3 font-semibold text-white transition hover:bg-teal-800"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-teal-700 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
