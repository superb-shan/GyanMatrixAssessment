import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import axios from "axios";
import Logo from "./logoWhite";


export default function LoginCTA() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFilled, setIsNotFilled] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "userName") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    } 
    if (value === '')
      setIsNotFilled(true);
    else
      setIsNotFilled(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName !== '' && password !== '')
    {
      setIsNotFilled(false);
      navigate('/display');
    }
    else
      setIsNotFilled(true);
  };

  const generateRandomUser = (event) => {
    event.preventDefault();
    fetchData();
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api/");
      let { username, password } = response.data.results[0].login;
      setUserName(username);
      setPassword(password);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsNotFilled(false);
    }
  };
  
  let backgroundImage = "https://wallpaper.dog/large/38718.jpg";
  
  return (
    <>
      <div className="bg-fixed bg-cover bg-center h-screen relative p-[50px] [@media(max-width:1279px)]:pl-[30px]" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <Logo />
        <div className="[@media(max-width:1279px)]:pl-[30px] p-[20px]">
          <form>
            <div className=" h-[500px] w-[50%] [@media(max-width:1279px)]:w-[100%] text-center flex flex-col justify-evenly items-center">
              <h1 className=" text-[64px] font-medium text-white">Login</h1>
              <div className="flex flex-col gap-5 w-[100%] items-center">
                <input type="text" className="w-[50%] [@media(max-width:1279px)]:w-[100%] h-[40px] bg-transparent border-[2px] rounded-[50px] p-[20px] border-red-500 text-white font-medium" name="userName" value={userName} onChange={handleInputChange}/>
                <input type="text" className="w-[50%] [@media(max-width:1279px)]:w-[100%] h-[40px] bg-transparent border-[2px] rounded-[50px] p-[20px] border-orange-500 text-white font-medium" name="password" value={password} onChange={handleInputChange} />
              </div>
              <div className="flex flex-col gap-5 w-[100%] items-center">
                <button className="w-[50%] [@media(max-width:1279px)]:w-[100%] h-[40px] rounded-[50px] bg-[#ffab2d] font-semibold" onClick={generateRandomUser}>Generate Random User</button>
                <button type='submit' className="w-[50%] [@media(max-width:1279px)]:w-[100%] h-[40px] rounded-[50px] bg-[#ffcd2d] font-semibold" onClick={handleSubmit}>Login</button>
              </div>
              <div className="h-[10px] text-white"> 
                {(isLoading && <p>Loading...</p>) || (isNotFilled && <p className="text-red-500">Invalid Credentials</p>)}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
