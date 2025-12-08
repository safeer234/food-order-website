import React, { useState } from 'react';

function ChangePassword() {
  const [inputs, setInputs] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { newPassword, confirmPassword } = inputs;

    // 1️⃣ Check match
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // 2️⃣ Get logged-in user
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (!currentUser) {
      alert("No logged-in user found.");
      return;
    }

    // 3️⃣ Get all users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 4️⃣ Find the user in users array
    const updatedUsers = users.map((u) => {
      if (u.email === currentUser.email) {
        return { ...u, password: newPassword };  // update password
      }
      return u;
    });

    // 5️⃣ Save updated users back to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // 6️⃣ Update current user data
    currentUser.password = newPassword;
    localStorage.setItem("user", JSON.stringify(currentUser));

    alert("Password updated successfully!");
    window.location.href = "/profile"; // redirect after change
  };

  return (
    <div className="py-9">

      <p className="px-6 font-bold text-3xl text-[#57534e]">
        Change <span className="text-[#ef4444]">Password</span>
      </p>

      <div className="px-6 py-4">
        <p className="text-[#57534e]">
          Enter your new password and confirm password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="py-20 flex justify-center">
        <div>
          {/* NEW PASSWORD */}
          <input
            type="password"
            name="newPassword"
            value={inputs.newPassword}
            onChange={handleChange}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,16}$"



            placeholder="Enter new password"
            className="border-2 border-gray-300 w-70 md:w-150 lg:w-170 h-9 rounded-md p-2"
            required
          />
          <br />
          <span className='lgin text-red-600 text-[12px] px-2'>Password must have minimum 8-16 characters and <br /> include atleast an uppercase, digit and special <br /> characters </span>

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={handleChange}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,16}$"
            placeholder="Confirm password"
            className="border-2 border-gray-300 w-70 md:w-150 lg:w-170 h-9 rounded-md p-2 mt-5"
            required
          />
          <br />
          <span className='lgin text-red-600 text-[12px] px-2'>Password must have minimum 8-16 characters and <br /> include atleast an uppercase, digit and special <br /> characters </span>

          {error && (
            <p className="text-red-600 text-sm mt-2 px-2">{error}</p>
          )}

          <button
            type="submit"
            className="mt-6 bg-[#ef4444] text-white py-2 w-full rounded-lg hover:bg-red-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
