import profileImage from '../../public/image-avatar.png'
import etheriumImage from '../../public/icon-ethereum.svg'
import clockIcon from '../../public/icon-clock.svg'

export default function Details() {
    return <>
        <div className="top mt-[25px]">
            <h2 className="text-2xl font-semibold"><span className="hover:text-[rgb(0,255,248)] cursor-pointer">Equilibrium #3429</span></h2>
            <p className="text-l font-normal text-[rgb(124,145,178)] mt-[14px]">our Equilibrium collection promotes balance and calm.</p>
            <div className="flex justify-between mt-[16px]">
                <span className="flex text-[rgb(0,255,248)]">
                    <img src={etheriumImage} alt="Ethereum Image" className="mr-2"/>
                    <p>0.041 ETH</p>
                </span>
                <span className="flex">
                    <img src={clockIcon} alt="Clcok Image" className="mr-2"/>
                    <p className="text-[rgb(124,145,178)]">3 days left</p>
                </span>
            </div>
        </div>
        <hr className="m-auto w-[100%] bg-[rgb(124,145,178)] mt-[16px] "/>
        <div className="bottom flex items-center justify-start font-semibold mt-[16px]">
            <div className="profileImageContainer h-[36px] w-[36px] rounded-[50%] border-[2px] mr-2">
                 <img src={profileImage} alt="Profile Iamge" className=""/>
            </div>
            <div className="profileName">
                <p><span className="text-[rgb(124,145,178)] text-l">Creation of</span> <span className="hover:text-[rgb(0,255,248)] cursor-pointer">Abhishek Singh</span></p>
            </div>
        </div>
    </>
}