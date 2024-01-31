import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSignUpMutation } from "../../features/slices/usersApiSlice";
import { setCredentials } from "../../features/slices/authSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import AppLoader from "../../utils/AppLoader";
import { AppError } from "../../utils/AppError";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};
const SignUpOne = () => {
  const [userData, setUserData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signUp, { isLoading }] = useSignUpMutation();

  //  Handle input
  const handleInputChange = (e) => {
    setUserData((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleHomeNavigation = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email || !userData.password) {
      return toast.error("All fields are required");
    }
    if (userData.password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }
    if (userData.password !== userData.password2) {
      return toast.error("Passwords do not match");
    }

    const userInfo = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
    setLoading(true);

    try {
      const res = await signUp(userInfo).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
      toast.success("Signup is successful");
    } catch (err) {
      setLoading(false);
      toast.error(err?.data?.message || err.error?.message);
    }
  };
  return (
    <div className="flex w-full bg-white">
      {/* left side */}
      <div className="hidden relative sm:flex justify-center items-center flex-1 w-full bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/bg3.jpg")', position: 'relative' }}>
  {/* Glass-like overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  <div className="text-center relative z-10">
    <img src='https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/Black_and_Orange_Illustration_Company_Logo__2_-fotor-20240129151630-removebg-preview.png' alt="logo" />
  </div>
</div>



      <div className="flex flex-col h-[100vh] justify-between w-full flex-1">
        <div className="flex justify-end p-4">
          <div
            className="text-[#2A6476] cursor-pointer"
            onClick={handleHomeNavigation}
          >
            Exit
          </div>
        </div>

        <div className="justify-center flex gap-2 flex-col text-center items-center">
          <p className="font-fira text-medium text-4xl text-[var(--secondary)]">
            Create Account
          </p>
          <p className=" text-[#3F3F3F] mb-2">Unlock amazing travel experiences</p>
        </div>

        {<AppError />}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <div>
            <p className="text-[#2A6476] font-inter mb-[4px]">Full Name</p>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-[312px] text-black placeholder-[#A6A6A6] border border-[#A6A6A6] focus:outline-none h-[41px]"
              style={{
                borderRadius: "8px",
                paddingLeft: "8px",
              }}
              placeholder="Name"
              required
            />
          </div>

          <div>
            <p className="text-[#2A6476] font-inter mb-[4px]">Email Address</p>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-[312px] text-black placeholder-[#A6A6A6] border border-[#A6A6A6] focus:outline-none h-[41px]"
              style={{
                borderRadius: "8px",
                paddingLeft: "8px",
              }}
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div>
            <p className="text-[#2A6476] font-inter mb-[4px]">
              Set a new password
            </p>
            <div style={{ position: "relative" }}>
              <input
                type={visible ? "text" : "password"}
                name="password"
                value={userData.password}
                className="w-[312px] text-black placeholder-[#A6A6A6] border border-[#A6A6A6] focus:outline-none h-[41px] relative pl-[40px] pr-[30px]"
                onChange={handleInputChange}
                style={{
                  borderRadius: "8px",
                  paddingLeft: "8px",
                }}
                placeholder="Password"
                required
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
          </div>

          <div>
            <p className="text-[#2A6476] font-inter mb-[4px]">
              Confirm password
            </p>
            <div style={{ position: "relative" }}>
              <input
                type={visible ? "text" : "password"}
                name="password2"
                value={userData.password2}
                className="w-[312px] text-black placeholder-[#A6A6A6] border border-[#A6A6A6] focus:outline-none h-[41px] relative pl-[40px] pr-[30px]"
                onChange={handleInputChange}
                style={{
                  borderRadius: "8px",
                  paddingLeft: "8px",
                }}
                placeholder="Confirm Password"
                required
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
          </div>

          <div className="justify-center pb-12 flex gap-4 flex-col text-center items-center">
            <button
              className="w-[312px] h-[41px] text-white bg-[#2A6476]"
              style={{
                borderRadius: "8px",
              }}
              type="submit"
            >
              {isLoading && loading ? <AppLoader /> : "Sign Up"}
            </button>
          </div>
        </form>
        <p className=" text-center  mx-auto w-[305px] ">
          By continuing you accept our standard
          <span className="underline px-2 text-[var(--primary)]">
            terms and conditions
          </span>
          and our{" "}
          <span className=" px-2 underline text-[var(--primary)]">
            privacy policy.
          </span>
        </p>
        <p className="text-center flex justify-center pb-12 ">
          Already have an account?&nbsp;
          <Link to="/login" className="text-[var(--primary)]">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpOne;
