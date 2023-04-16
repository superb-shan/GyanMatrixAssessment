import logoText from '../Images/logoTextWhite.png';
import logoWand from '../Images/logoWand.png';

export default function Logo(){
    return (
        <>
        <div className="bg-cover bg-center h-[25px] w-[200px] [@media(max-width:1279px)]:w-[150px] [@media(max-width:1279px)]:h-[15px] relative " style={{ backgroundImage: `url(${logoText})`}}></div>
        <div className="bg-cover bg-center h-[80px] w-[60px] absolute -mt-[65px] [@media(max-width:1279px)]:w-[40px] [@media(max-width:1279px)]:h-[50px] -ml-[5px] [@media(max-width:1279px)]:-mt-[46px] [@media(max-width:1279px)]:-ml-[4px]" style={{ backgroundImage: `url(${logoWand})`}}></div>
      </>
    );
}