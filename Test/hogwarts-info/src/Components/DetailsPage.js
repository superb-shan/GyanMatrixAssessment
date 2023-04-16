import React from 'react';
import { useLocation } from 'react-router-dom';
import SlytherinShield from '../Images/SlytherinShield.png';
import GryffindorShield from '../Images/GryffindorShield.png';
import HufflepuffShield from '../Images/HufflepuffShield.png';
import RavenclawShield from '../Images/RavenclawShield.png';
import Logo from './logoBlack';

export default function DetailsPage() {
    const location = useLocation();
    const data = location.state;
    console.log(data.house);

    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
        }).join(' ');
    }      

      // console.log(outer);
    // render the person details
    return (
      <>
      
        <div className={data.house === 'Gryffindor'? 'bg-[#ffece8] h-screen w-full font-pirata text-[#DCDCDC] p-[50px]':
                        data.house === 'Slytherin'? 'bg-[#d9f7f7] h-screen font-pirata text-[#DCDCDC] p-[50px]' :
                        data.house === 'Hufflepuff'? 'bg-[#ffffdf] h-screen font-pirata text-[#DCDCDC] p-[50px]' :
                        data.house === 'Ravenclaw'? 'bg-[#defafa] h-screen font-pirata text-[#DCDCDC] p-[50px]' :
                        ''}>
            <Logo />
          <div className='flex justify-center items-center'>

            <div className={data.house === 'Gryffindor'? 'relative w-[1050px] h-[600px] bg-[#FFB6A9] blur-[41.5px] mt-[100px]' :
                            data.house === 'Slytherin'? 'relative w-[1050px] h-[600px] bg-[#ade5d0] blur-[41.5px] mt-[100px]' :
                            data.house === 'Hufflepuff'? 'relative w-[1050px] h-[600px] bg-[#fde196] blur-[41.5px] mt-[100px]' :
                            data.house === 'Ravenclaw'? 'relative w-[1050px] h-[600px] bg-[#a3e8fa] blur-[41.5px] mt-[100px]' :
                            ''}></div>
            <div className='absolute bg-cover bg-center h-[250px] w-[200px] [@media(max-width:1279px)]:h-[120px] [@media(max-width:1279px)]:w-[100px] z-50 -mt-[500px]' 
            style={{backgroundImage: `url(${data.house === 'Slytherin'? SlytherinShield :
                                            data.house === 'Gryffindor'? GryffindorShield :
                                            data.house === 'Hufflepuff'? HufflepuffShield :
                                            data.house === 'Ravenclaw'? RavenclawShield :
                                            ''})`}}></div>
            <div className='absolute w-[1010px] [@media(max-width:1279px)]:w-[340px] h-[560px] [@media(max-width:1279px)]:h-[600px] bg-black rounded-[29px] p-[20px] flex justify-center items-center mt-[100px]'>
                <div className={data.house === 'Gryffindor'? 'relative w-full h-full bg-[#9c1801] rounded-[29px] blur-[20px]':
                                data.house === 'Slytherin'? 'relative w-full h-full bg-[#148341] rounded-[29px] blur-[20px]':
                                data.house === 'Hufflepuff'? 'relative w-full h-full bg-[#e8af16] rounded-[29px] blur-[20px]':
                                data.house === 'Ravenclaw'? 'relative w-full h-full bg-[#3db2d3] rounded-[29px] blur-[20px]':
                                ''}></div>
                <div className='absolute h-full w-full flex [@media(max-width:1279px)]:flex-col-reverse justify-center items-center'>
                    <div className='w-[55%] [@media(max-width:1279px)]:w-[90%] mt-[50px] [@media(max-width:1279px)]:m-0 [@media(max-width:1279px)]:ml-[5px]'>
                        <div className='flex justify-center text-[50px] [@media(max-width:1279px)]:text-[36px] mb-[20px]  [@media(max-width:1279px)]:mt-[20px] [@media(max-width:1279px)]:m-0'>{data.hogwartsStaff ? data.name.split(" ")[1] : data.name}</div>
                        <div className='flex flex-col justify-evenly text-[24px] [@media(max-width:1279px)]:text-[16px]'>
                            <div className='flex w-full justify-between pl-[110px] pr-[90px] [@media(max-width:1279px)]:px-[30px]'>
                                <div>Species</div>
                                <div>{data.species ? toTitleCase(data.species) : 'Null'}</div>
                            </div>
                            <div className='flex w-full justify-between pl-[110px] pr-[90px] [@media(max-width:1279px)]:px-[30px]'>
                                <div>Gender</div>
                                <div>{data.gender ? toTitleCase(data.gender) : 'Null'}</div>
                            </div>
                            <div className='flex w-full justify-between pl-[110px] pr-[90px] [@media(max-width:1279px)]:px-[30px]'>
                                <div>House</div>
                                <div>{data.house ? toTitleCase(data.house) : 'Null'}</div>
                            </div>
                            <div className='flex w-full justify-between pl-[110px] pr-[90px] [@media(max-width:1279px)]:px-[30px]'>
                                <div>DOB</div>
                                <div>{data.dateOfBirth ? toTitleCase(data.dateOfBirth) : 'Null'}</div>
                            </div>
                            <div className='flex w-full justify-between pl-[110px] pr-[90px] [@media(max-width:1279px)]:px-[30px]'>
                                <div>Ancestry</div>
                                <div>{data.ancestry ? toTitleCase(data.ancestry) : 'Null'}</div>
                            </div>
                            <div className='flex w-full justify-between pl-[110px] pr-[90px] [@media(max-width:1279px)]:px-[30px]'>
                                <div>Eye colour</div>
                                <div>{data.eyeColour ? toTitleCase(data.eyeColour) : 'Null'}</div>
                            </div>
                            <div className='flex w-full justify-between pl-[110px] pr-[90px] [@media(max-width:1279px)]:px-[30px]'>
                                <div>Hair colour</div>
                                <div>{data.hairColour ? toTitleCase(data.hairColour) : 'Null'}</div>
                            </div>
                            <div className='flex w-full justify-between pl-[110px] pr-[90px] [@media(max-width:1279px)]:px-[30px]'> 
                                <div>Wand</div> 
                                <div>{`${data.wand.core && toTitleCase(data.wand.core)} ${(data.wand.core && data.wand.wood && toTitleCase(data.wand.wood)) || "Null"}`}</div> 
                            </div>
                            <div className='flex w-full justify-between pl-[110px] pr-[90px] [@media(max-width:1279px)]:px-[30px]'>
                                <div>Patronus</div>
                                <div>{data.patronus ? toTitleCase(data.patronus) : 'Null'}</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] [@media(max-width:1279px)]:w-[100%] flex justify-center items-center [@media(max-width:1279px)]:px-[30px] '>
                        <div className="bg-cover h-[350px] w-[350px] [@media(max-width:1279px)]:h-[200px]  [@media(max-width:1279px)]:w-[150px] rounded-[30px] mr-[100px] [@media(max-width:1279px)]:mr-0 [@media(max-width:1279px)]:mt-[30px] shadow-black shadow-lg " style={{ backgroundImage: `url(${data.image})`}}></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

