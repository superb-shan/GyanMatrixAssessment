import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import hexagon from'../Images/HPHexagon.png';
import arch from '../Images/HPArch.png';
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import Logo from "./logoBlack.js";
import StudentTileImage from '../Images/StudentTileImage.png';
import StaffTileImage from '../Images/StaffTileImage.png';

export default function DisplayPage() {
    const navigate = useNavigate();
    const isVertical = useMediaQuery({ query: '(orientation: portrait)' });
    const columns = isVertical ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)';
    const rows = isVertical ? 'repeat(6, 1fr)' : 'repeat(2, 1fr)';
    const items = [];

    const [isStaff, setIsStaff] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [isStaff]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(isStaff? "https://hp-api.onrender.com/api/characters/staff": "https://hp-api.onrender.com/api/characters/students");
        //   console.log(response.data[0].image);
            setData(response.data);

        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
    
    function handlePersonClick(index){
        console.log(!isLoading ? data[index] : 'Loading...');
        navigate('/details', {state:{...data[index]}});
    }

    for (let i = 0; i <= 5; i++) {
        items.push(

        <button key={i} className='flex justify-center items-center' onClick={() => handlePersonClick(i)}>
            <div className='relative bg-cover h-[262px] w-[270px]' style={{ backgroundImage: `url(${hexagon})`}}> </div>
            <div className='absolute bg-cover h-[200px] w-[140px] mt-2' style={{ backgroundImage: `url(${arch})`}}></div> 
            <div className='absolute bg-cover bg-center h-[165px] w-[110px] mt-[65px]' style={{ backgroundImage: `url(${!isLoading ? data[i].image : 'https://img.icons8.com/pastel-glyph/256/person-male--v3.png'})`}}></div>
            <div className='absolute mt-[232px] bg-[#E0C667] w-[150px] h-[30px] flex justify-center items-center'>{!isLoading ? isStaff? data[i].name.split(' ')[1]: data[i].name : 'Loading...'}</div>
        </button>
        
        );
    }


    return (
        <div className="bg-fixed bg-cover bg-[#f4ddfe] bg-center h-screen [@media(max-width:1279px)]:h-[2000px] w-screen relative p-[30px] [@media(max-width:1279px)]:p-[20px] [@media(max-width:1279px)]:pr-[30px] font-pirata overflow-clip">
            <div className='h-[50px] flex justify-between pr-[35px] [@media(max-width:1279px)]:pr-0 mt-[20px]'>
                <span>
                    <Logo />
                </span>
                <div className='flex flex-row gap-[50px] [@media(max-width:1279px)]:-mt-[10px] [@media(max-width:1279px)]:gap-[15px] text-[24px] [@media(max-width:1279px)]:text-[16px]'>
                    <button className= {`relative bg-black [@media(max-width:1279px)]:${isStaff? 'bg-transparent' : 'bg-black'} ${!isStaff?'text-white' : 'text-gray-500'} [@media(max-width:1279px)]:${isStaff? 'text-black': ''} px-[36px] [@media(max-width:1279px)]:p-[0px] h-[39px] rounded-[13px] [@media(max-width:1279px)]:rounded-[8px] [@media(max-width:1279px)]:w-[70px] [@media(max-width:1279px)]:h-[30px]`} onClick={() => setIsStaff(false)} >Student</button>
                    <div className="bg-cover bg-center h-[90px] w-[70px]  absolute -ml-[40px] -mt-[35px] [@media(max-width:1279px)]:hidden" style={{ backgroundImage: `url(${StudentTileImage})`}}></div>
                    <button className={`relative bg-black [@media(max-width:1279px)]:${!isStaff? 'bg-transparent' : 'bg-black'} ${isStaff?'text-white' : 'text-gray-500'} [@media(max-width:1279px)]:${!isStaff? 'text-black': ''} px-[36px] [@media(max-width:1279px)]:p-[0px] h-[39px] rounded-[13px] [@media(max-width:1279px)]:w-[70px] [@media(max-width:1279px)]:rounded-[8px] [@media(max-width:1279px)]:h-[30px]`} onClick={() => setIsStaff(true)} >Staff</button>
                    <div className="bg-cover bg-center h-[90px] w-[70px] absolute ml-[150px] -mt-[35px] [@media(max-width:1279px)]:hidden" style={{ backgroundImage: `url(${StaffTileImage})`}}></div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: columns,
                        gridTemplateRows: rows,
                        columnGap: isVertical ? '0px' : '150px',
                        rowGap: isVertical ? '50px' : '80px',
                        paddingTop: '40px',
                    }}


                >
                    {items}
                </div>
            </div>
            
        </div>
    );
}
