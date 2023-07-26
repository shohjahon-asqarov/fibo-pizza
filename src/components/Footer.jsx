import { NavLink } from "react-router-dom";
import { f1, f2, f3, f4, f5, f6, logo } from "../assets/data";

export default function Footer() {
    return (
        <section className="py-20">
            <div data-aos="fade-up" className="flex justify-between gap-10 md:gap-20 flex-col md:flex-row mb-10">

                <div className="left md:w-3/5">
                    <NavLink to="/"><img src={logo} alt="footer logo" /></NavLink>

                    <div className="flex flex-col md:flex-row justify-between my-5">
                        <h3 className="font-bold text-base mb-4">Calorie content and composition</h3>
                        <h3 className="font-bold text-base">Legal information</h3>

                    </div>

                    <h3 className="font-bold text-base mb-3">We are in social networks</h3>
                    <div className="flex justify-between font-semibold text-btn-gray-text mb-5">
                        <div className="flex flex-col">
                            <a className="mb-3" target="_blank" rel="noreferrer" href="https://t.me/dev_off">YouTube</a>
                            <a target="_blank" rel="noreferrer" href="https://t.me/dev_off">Instagram</a>
                        </div>

                        <div className="flex flex-col">
                            <a className="mb-3" target="_blank" rel="noreferrer" href="https://t.me/dev_off">Facebook</a>
                            <a target="_blank" rel="noreferrer" href="https://t.me/dev_off">ВКонтакте</a>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className="right md:w-2/5">
                    <h3 className="font-bold text-base">Do you have any questions?</h3>
                    <div className="grid grid-cols-4 gap-5 my-5">
                        <a target="_blank" rel="noreferrer" className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="https://t.me/dev_off"><img className="mx-auto" src={f1} alt="foooter link" /></a>
                        <a target="_blank" rel="noreferrer" className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="https://t.me/dev_off"><img className="mx-auto" src={f2} alt="foooter link" /></a>
                        <a target="_blank" rel="noreferrer" className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="https://t.me/dev_off"><img className="mx-auto" src={f3} alt="foooter link" /></a>
                        <a target="_blank" rel="noreferrer" className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="https://t.me/dev_off"><img className="mx-auto" src={f4} alt="foooter link" /></a>
                        <a target="_blank" rel="noreferrer" className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="https://t.me/dev_off"><img className="mx-auto" src={f5} alt="foooter link" /></a>
                        <a target="_blank" rel="noreferrer" className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="https://t.me/dev_off"><img className="mx-auto" src={f6} alt="foooter link" /></a>
                        <a target="_blank" rel="noreferrer" className="text-center border-2 border-[#E3ECF5] rounded-xl py-2 col-span-2 font-semibold" href="https://t.me/dev_off">Write to us</a>

                    </div>
                    <span className='inline-block text-2xl font-bold text-yellow mb-5'>
                        998 93 917 07 31
                    </span> <br />
                    <a target="_blank" rel="noreferrer" href="https://t.me/dev_off" className='btn-gray'>
                        Request a call
                    </a>
                </div>

            </div>
            <p className="text-sm font-semibold">YaBao All rights reserved. © 2021</p>
        </section>
    )
}
