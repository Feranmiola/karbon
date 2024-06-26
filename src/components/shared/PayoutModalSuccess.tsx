import {
    Dialog,
    DialogContent,
  } from "@/components/ui/dialog"
import DialogClose from "../Icons/DialogClose"
import SucccessIconSmall from "../Icons/SucccessIconSmall"


const PayoutModalSuccess = (props : any) => {
  return (
    <div>
        <Dialog open={props.isDialogOpen} onOpenChange={props.setIsDialogOpen}>
            <DialogContent className='bg-[#101010] border-[1px] border-[#282828] p-10 flex flex-col w-[380px] max-sm:w-[300px] items-center justify-center rounded-[16px] outline-none'>
                <div className='w-full flex flex-row items-center justify-between'>
                    <p className="text-white font-semibold text-[16px]">Payout</p>
                    <div onClick={() => props.setIsDialogOpen(false)} className='cursor-pointer '>
                        <DialogClose/>
                    </div>
                </div>      

                <div className="w-full py-5 flex flex-col space-y-5 items-center justify-center">
                    <SucccessIconSmall/>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex flex-row space-x-2">
                            <p className="text-[#08E04A] font-medium text-[32px]">345</p>
                            <p className="text-[#08E04A] text-[32px] opacity-50">USDT</p>

                        </div>
                        <p className="text-[14px] text-white opacity-70">is being processed</p>
                    </div>
                    <p className="text-center text-white w-[251px] text-[14px] leading-6 tracking-normal">Your payout request has been received and it is being processed. You will receive it in your registered wallet within the next 24 hours.</p>

                    <div onClick={() => props.setIsDialogOpen(false)} className="bg-transparent py-2 px-10 cursor-pointer hover:border-[#08E04A] transition ease-in-out text-white text-[14px] hover:text-[#08E04A] rounded-full border-[1px] border-white">
                        Close
                    </div>
                </div>
            </DialogContent>
          </Dialog>
    </div>
  )
}

export default PayoutModalSuccess