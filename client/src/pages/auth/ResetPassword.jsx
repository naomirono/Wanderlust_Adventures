import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import AppLoader from "../../utils/AppLoader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useResetPasswordMutation } from "../../features/slices/usersApiSlice";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const [reset, { isLoading }] = useResetPasswordMutation();

  const navigate = useNavigate();

  const { resetToken } = useParams();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      return toast.error("All fields are required");
    }
    // Data validation
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    if (password !== confirmPassword) {
      return toast.error("Password do not match");
    }
    const userData = {
      password,
      resetToken,
    };

    try {
      const res = await reset(userData).unwrap();
      console.log(res?.message);
      toast.success(res?.data?.message || res?.message);
      navigate("/login");
    } catch (err) {
      toast.error(err?.data?.message || err.error?.message);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left side */}
      <div className="hidden relative sm:flex justify-center items-center flex-1 w-full bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/bg3.jpg")', position: 'relative' }}>
  {/* Glass-like overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  <div className="text-center relative z-10">
    <img src='https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/Black_and_Orange_Illustration_Company_Logo__2_-fotor-20240129151630-removebg-preview.png' alt="logo" />
  </div>
</div>

      {/* Right side */}
      <div className="w-full sm:w-1/2 flex justify-center items-center">
        <div className="sm:w-96 p-5">
          <div className="text-center">
            <h2 className="font-fira text-medium text-4xl text-[var(--secondary)]">
              Welcome Again
            </h2>
            <h2 className="mt-3 mb-10 text-[var(--secondary)]">
            Unlock amazing travel experiences
            </h2>
          </div>
          <form onSubmit={submitHandler}>
            <label
              htmlFor="password"
              className="text-[14px] font-inter text-[var(--primary)] mt-10"
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={visible ? "text" : "password"}
                id="password"
                value={password}
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                required
                className="w-full rounded-lg placeholder-[var(--tertiary)] border border-[#94a3b8] px-[12px] py-[8px] pr-[40px] mt-2 mb-4"
              />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={() => setVisible(!visible)}
              >
                {visible ? (
                  <AiOutlineEye size={25} />
                ) : (
                  <AiOutlineEyeInvisible size={25} />
                )}
              </span>
            </div>
            <label
              htmlFor="password"
              className="text-[14px] font-inter text-[var(--primary)]"
            >
              Confirm Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={visible ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                name="Confirm Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                placeholder="Confirm Password"
                required
                className="w-full rounded-lg placeholder-[var(--tertiary)] border border-[#94a3b8] px-[12px] py-[8px] pr-[40px] mt-2"
              />
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={() => setVisible(!visible)}
              >
                {visible ? (
                  <AiOutlineEye size={25} />
                ) : (
                  <AiOutlineEyeInvisible size={25} />
                )}
              </span>
            </div>

            <button
              type="submit"
              className="bg-[var(--primary)] text-white rounded-lg py-2 px-4 w-full mt-12"
              disabled={isLoading}
            >
              {isLoading ? <AppLoader /> : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
