import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-navy-light rounded-2xl p-8 shadow-card"
      >
        <h1 className="text-2xl font-bold text-navy dark:text-cream mb-6 text-center">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-softblue dark:bg-navy outline-none text-navy dark:text-cream"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-softblue dark:bg-navy outline-none text-navy dark:text-cream"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-softblue dark:bg-navy outline-none text-navy dark:text-cream"
          />
          <button className="w-full bg-orange text-white py-3 rounded-xl font-semibold">
            Sign Up (+50 Reward Points)
          </button>
        </form>
        <p className="text-center text-sm text-navy/60 dark:text-cream/60 mt-6">
          Already have an account? <Link to="/login" className="text-orange font-medium">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}

