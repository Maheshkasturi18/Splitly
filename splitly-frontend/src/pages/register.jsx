import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/pages/login.css";
import { auth, googleProvider, signInWithPopup } from "../services/firebase";
import { useNavigate } from "react-router";

function GoogleIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 262"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      <path
        fill="#4285F4"
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      />
      <path
        fill="#34A853"
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      />
      <path
        fill="#FBBC05"
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      />
      <path
        fill="#EB4335"
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      />
    </svg>
  );
}

export default function RegisterForm() {
  const [type, setType] = useState("register");
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    // terms: false,
  });
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!/^[A-Za-z\s]+$/.test(form.name))
      newErrors.name = "Name should only contain letters";
    if (!/^\S+@\S+$/.test(form.email)) newErrors.email = "Invalid email";
    if (form.password.length <= 6)
      newErrors.password = "Password should include at least 6 characters";
    // if (!form.terms) newErrors.terms = "You must accept terms and conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { email, displayName } = result.user;

      // Send to your backend to create or login user
      await axios.post(
        "http://localhost:5000/google-login",
        {
          email,
          name: displayName,
        },
        {
          withCredentials: true,
        }
      );

      alert("Login successfull");
      navigate("/dashboard");
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        form,
        { withCredentials: true }
      );

      console.log(response.data);
      alert("Registeration successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Failed to register user!");
    }
  };

  return (
    <div className="mx-auto p-4 md:p-6 custom-login">
      <div className="w-full md:w-md bg-white shadow rounded-lg p-6">
        <h2 className="text-md md:text-lg font-medium mb-4">
          Welcome to Splitly, {type} with
        </h2>

        {/* Social buttons */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-4 px-4 py-2 border rounded-full w-screen cursor-pointer"
          >
            <GoogleIcon /> Google
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">
            Or continue with email
          </span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full border p-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="hello@example.com"
              className="w-full border p-2 rounded"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Your password"
              className="w-full border p-2 rounded"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* <div className="flex items-center">
            <input
              type="checkbox"
              checked={form.terms}
              onChange={(e) => setForm({ ...form, terms: e.target.checked })}
              className="mr-2 cursor-pointer"
            />
            <label>I accept terms and conditions</label>
            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms}</p>
            )}
          </div> */}

          <div className="flex justify-between items-center">
            <Link
              to="/login"
              type="button"
              onClick={() => setType("register")}
              className="text-violet-600 text-sm cursor-pointer"
            >
              Already have an account? Login
            </Link>
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-full cursor-pointer"
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
