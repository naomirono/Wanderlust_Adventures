import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../../features/slices/authSlice";
import AppLoader from "../../utils/AppLoader";
import { validateEmail } from "../../utils/validateEmail";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useLoginMutation } from "../../features/slices/usersApiSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);

  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("All fields are required");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
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
              htmlFor="email"
              className="text-[14px] font-inter text-[var(--tertiary)]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              required
              className="w-full rounded-lg placeholder-[var(--primary)] mb-5 border border-[#94a3b8] px-[12px] py-[8px]"
            />
            <label
              htmlFor="password"
              className="text-[14px] font-inter text-[var(--tertiary)] mt-10"
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
                className="w-full rounded-lg placeholder-[var(--primary)] border border-[#94a3b8] px-[12px] py-[8px] pr-[40px]"
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

            <p className="text-sm text-[var(--primary)] text-right mt-3">
              <Link to="/forgotpassword">Forgot Password</Link>
            </p>
            <button
              type="submit"
              className="bg-[var(--primary)] text-white rounded-lg py-2 px-4 w-full mt-12"
              disabled={isLoading}
            >
              {isLoading ? <AppLoader /> : "Sign In"}
            </button>
          </form>

          <p className="font-medium text-sm text-center mt-5 text-[var(--tertiary-dark)]">
            Already have an account?{" "}
            <Link to="/register" className="text-[var(--primary)]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
