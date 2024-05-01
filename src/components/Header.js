import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe will be called when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSigOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
    navigate("/");
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="netflixlogo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 py-2 mx-4 my-2 rounded-lg bg-slate-700 text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT search"}
          </button>
          <img
            className="p-2 h-14 w-14 rounded-lg"
            src={user?.photoURL}
            alt="user-icon"
          />
          <button onClick={handleSigOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
