import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../features/slices/usersApiSlice";
import { clearCredentials } from "../../features/slices/authSlice";
import { FiSearch, FiCheck } from 'react-icons/fi';

const Navbar = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const [isTyping, setIsTyping] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const [logout] = useLogoutMutation();
  
    const handleLogin = () => {
      navigate("/login"); // Navigate to '/login'
    };
  
    const logoutHandler = async () => {
      try {
        await logout().unwrap();
        dispatch(clearCredentials());
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleSignUp = () => {
      navigate("/register");
    };

    const getProfileInitials = (name) => {
        if (!name) return "";
        const initials = name.split(" ").map((word) => word[0]).join("").toUpperCase();
        return initials;
      };

      const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  const handleTyping = (e) => {
    setIsTyping(e.target.value !== ''); 
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src='https://mywanderlustbucket.s3.eu-north-1.amazonaws.com/W_logo.png' alt="Logo" className="h-16" />
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-5">
            <li><a href="#" className="text-white text-md uppercase font-sans font-regular">Home</a></li>
            <li><a href="#" className="text-white text-md uppercase font-sans font-regular">Top Deals</a></li>
            <li><a href="#" className="text-white text-md uppercase font-sans font-regular">Destinations</a></li>
            <li><a href="#" className="text-white text-md uppercase font-sans font-regular">Contacts</a></li>
            <li><a href="#" className="text-white text-md uppercase font-sans font-regular">Blog</a></li>
          </ul>
        </div>
        <div className="relative flex items-center">
        <div className="hidden md:block">
            <div className="absolute left-0 pl-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <div className={isTyping ? 'bg-orange-500 text-white p-1 rounded-full text-xl' : ''}>
                {isTyping ? <FiCheck /> : <FiSearch />}
              </div>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="text-gray-500 p-2 pl-10 rounded-3xl w-40 md:w-80 mr-6 font-inter text-md"
              onChange={handleTyping}
            />
          </div>


                <div className="flex items-center space-x-4">
                     <div>
                        {userInfo ? (
                            <>
                             <div
                               className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer"
                             >
                               <span className="text-lg font-semibold text-white">
                                 {getProfileInitials(userInfo.name)}
                               </span>
                             </div>
                        
                           </>
                        ) : (
                            
                            <button 
                            onClick={handleLogin} 
                            className="border-2 border-orange-500 text-white px-4 py-1.5 rounded-full focus:outline-none">
                            
                                Login
                            </button>
                        )}
                    </div>
                    <div>
                       {userInfo ? (
                            <button
                                onClick={logoutHandler}
                                className="text-white hover:text-orange-500"
                            >
                              Sign Out
                            </button>
                        ) : (
                            <a href="#" onClick={handleSignUp} className="bg-orange-500 text-white border-orange-600 px-4 py-2 rounded-full focus:outline-none">
                            
                                <span>Join Us</span>
                            </a>
                        )}
                    </div>
                 </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
