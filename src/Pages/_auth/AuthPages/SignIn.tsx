import AppleLogo from "@/components/Icons/AppleLogo";
import CloseIcon from "@/components/Icons/CloseIcon";
import GoogleLogo from "@/components/Icons/GoogleLogo";
import KarbonLogo from "@/components/Icons/KarbonLogo"
import { Separator } from "@/components/ui/separator";
import { useState } from "react"

const SignIn = () => {
    const [chanceInfo, setChannceInfo]  = useState(true);
  return (
    <div className="p-[60px]">
        <div>
            <KarbonLogo/>
        </div>

        <div className="flex items-center justify-center w-full flex-col">
            {chanceInfo && (
                <div className="flex absolute top-20 flex-row space-x-3 items-center justify-between pl-5 rounded-[8px] border-[1px] border-[#282828] w-[421px] h-[52px] bg-black">
                    <div onClick={() => setChannceInfo(false)}>
                        <CloseIcon/>
                    </div>
                    <div>
                        <p className="text-white text-[10px]">A chance to buy Karbon tokens at half of the launch price.</p>
                    </div>
                    <div>
                        <img
                        src="./assets/halfPriceNotification.svg"
                        />
                    </div>
                </div>

            )}

            <div className="flex flex-col items-center justify-center pt-[7rem] " >
                <div className="w-[450px] h-[456px] bg-[#101010] border-[#2D2D2D] border-[1px] rounded-[8px]">

                    <div className="py-5 px-8 flex flex-col justify-between h-full">
                        <p className="text-white text-[20px] font-semibold">Sign In</p>

                        <div className="flex flex-col space-y-2">
                            <div className=" flex flex-row w-[389px] h-[56px] bg-[#1C1C1C]">
                                <div className="px-5 absolute py-3 flex items-center">
                                    <GoogleLogo/>
                                </div>
                                <div className=" flex-1 flex items-center justify-center">
                                    <p className="text-white text-[14px]">Sign in with Google</p>

                                </div>

                            </div>

                            <div className=" flex flex-row w-[389px] h-[56px] bg-[#1C1C1C]">
                                <div className="px-7 absolute py-5 flex items-center">
                                    <AppleLogo/>
                                </div>
                                <div className=" flex-1 flex items-center justify-center">
                                    <p className="text-white text-[14px]">Sign in with Apple ID</p>

                                </div>

                            </div>

                        </div>

                        <div className="flex flex-row space-x-4 items-center justify-center">
                            <Separator orientation="horizontal" className="max-w-[29%]"/>
                            <p className="text-white text-[14px]">or sign in with email</p>
                            <Separator orientation="horizontal" className="max-w-[29%]"/>
                        </div>

                        <div className="flex flex-col space-y-5">
                            <input className="w-full bg-black border-[0.5px] border-[#FFFFFF] text-white text-[12px] rounded-[4px] h-[56px] px-4" type="email" placeholder="Enter Email"/>
                            <div>
                                <div className="flex items-center justify-center bg-[#08E04A] w-full h-[48px] rounded-[4px] hover:bg-[#3aac5c] transition ease-in-out cursor-pointer">
                                    <p className="font-bold text-[14px] shadow-sm">
                                        Sign In
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row space-x-2 items-center justify-center">
                            <p className="text-white text-[14px]">Don't have an account?</p>
                            <a className="text-[14px] text-[#08E04A] font-semibold">Sign Up</a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        
    </div>
  )
}

export default SignIn