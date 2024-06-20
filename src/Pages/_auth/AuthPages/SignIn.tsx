import AppleLogo from "@/components/Icons/AppleLogo";
import BackArrow from "@/components/Icons/BackArrow";
import CloseIcon from "@/components/Icons/CloseIcon";
import GoogleLogo from "@/components/Icons/GoogleLogo";
import KarbonLogo from "@/components/Icons/KarbonLogo"
import PasswordLogo from "@/components/Icons/PasswordLogo";
import { Separator } from "@/components/ui/separator";
import { useState } from "react"

const SignIn = () => {
    const [chanceInfo, setChannceInfo]  = useState(true);
    const [step, setStep] = useState(1);
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

            {step === 1 &&(
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
                                    <div onClick={() => setStep(2)} className="flex items-center justify-center bg-[#08E04A] w-full h-[48px] rounded-[4px] hover:bg-[#3aac5c] transition ease-in-out cursor-pointer">
                                        <p className="font-bold text-[14px] shadow-sm">
                                            Sign In
                                        </p>
    
                                    </div>
                                </div>
                            </div>
    
                            <div className="flex flex-row space-x-2 items-center justify-center">
                                <p className="text-white text-[14px]">Don't have an account?</p>
                                <a href="/sign-up" className="text-[14px] text-[#08E04A] font-semibold">Sign Up</a>
                            </div>
                        </div>
    
                    </div>
    
                </div>

            )}

            {step ===2 && (
                 <div className="flex flex-col items-center justify-center pt-[7rem] " >
                 <div className="w-[450px] h-[346px] bg-[#101010] border-[#2D2D2D] border-[1px] rounded-[8px]">
 
                     <div className="py-5 px-8 flex flex-col justify-between h-full">
                        <div className="flex flex-row space-x-2 items-center">
                            <PasswordLogo/>
                            <p className="text-white text-[20px] font-semibold">Enter Password</p>
                        </div>
                        <div className="flex flex-row space-x-1 items-center">
                            <p className="text-white opacity-80 text-[14px]">Welcome</p>
                            <p className="text-white text-[14px]">you@gmail.com</p>

                        </div>

 
                         <div className="flex flex-col space-y-5">
                            <div className="flex flex-col space-y-2">
                                <p className="text-white text-[14px]">Password</p>
                                <input className="w-full bg-black border-[0.5px] border-[#FFFFFF] text-white text-[12px] rounded-[4px] h-[56px] px-4" type="password"/>
                            </div>
                             <div>
                                 <div className="flex items-center justify-center bg-[#08E04A] w-full h-[48px] rounded-[4px] hover:bg-[#3aac5c] transition ease-in-out cursor-pointer">
                                     <p className="font-bold text-[14px] shadow-sm">
                                        Proceed
                                     </p>
 
                                 </div>
                             </div>
                         </div>
 
                         <div onClick={() => setStep(1)} className="flex flex-row space-x-2 items-center justify-center cursor-pointer">
                            <div className="flex items-center justify-center">
                                <BackArrow/>
                            </div>
                             <p className="text-white text-[14px]">Back</p>
                         </div>
                     </div>
 
                 </div>
 
             </div>
            )}

        </div>
        <div className=" absolute bottom-10 left-[43.5%]">
            <p className="text-white text-[10px] opacity-50">Copyright © 2024 Karbon. All rights reserved.</p>
        </div>
        
        
    </div>
  )
}

export default SignIn