import { f1, f2, f3, f4, f5, f6, logo } from "../assets/data";

export default function Footer() {
    return (
        <div className="py-20">
            <div className="flex justify-between gap-10 md:gap-20 flex-col md:flex-row">
                <div className="left md:w-3/5">
                    <a href="#"><img src={logo} alt="footer logo" /></a>

                    <div className="flex justify-between my-5">
                        <h3 className="font-bold text-base">Калорийность и состав</h3>
                        <h3 className="font-bold text-base">Правовая информация</h3>

                    </div>

                    <h3 className="font-bold text-base mb-3">Мы в соцсетях</h3>
                    <div className="flex justify-between font-semibold text-btn-gray-text mb-5">
                        <div className="flex flex-col gap-3">
                            <a href="#">YouTube</a>
                            <a href="#">Instagram</a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <a href="#">Facebook</a>
                            <a href="#">ВКонтакте</a>
                        </div>
                        <div></div>
                    </div>
                </div>

                <div className="right md:w-2/5">
                    <h3 className="font-bold text-base">Остались вопросы? А мы всегда на связи:</h3>
                    <div className="grid grid-cols-4 gap-5 my-5">
                        <a className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="#"><img className="mx-auto" src={f1} alt="foooter link image" /></a>
                        <a className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="#"><img className="mx-auto" src={f2} alt="foooter link image" /></a>
                        <a className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="#"><img className="mx-auto" src={f3} alt="foooter link image" /></a>
                        <a className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="#"><img className="mx-auto" src={f4} alt="foooter link image" /></a>
                        <a className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="#"><img className="mx-auto" src={f5} alt="foooter link image" /></a>
                        <a className="text-center border-2 border-[#E3ECF5] rounded-xl py-2" href="#"><img className="mx-auto" src={f6} alt="foooter link image" /></a>
                        <a className="text-center border-2 border-[#E3ECF5] rounded-xl py-2 col-span-2 font-semibold" href="#">Написать нам</a>

                    </div>
                    <a className='inline-block text-2xl font-bold text-yellow mb-5' href="#">
                        998 93 917 07 31
                    </a> <br />
                    <a href="#" className='btn-gray'>
                        Заказать звонок
                    </a>
                </div>

                <p className="text-sm font-semibold">YaBao Все праав защищены © 2021</p>
            </div>
        </div>
    )
}
