import { useDispatch, useSelector } from "react-redux"
import { deleteKorzina, minusCount, updateCount } from "../store/slices/Korzina";




export default function Korzinka() {

    const products = useSelector((state) => state.korzina);
    const dispatch = useDispatch();


    // calculate all korzinka sum 
    let sum = 0
    products.data.forEach(i => {
        if (i.count > 1) {
            sum += i.price * i.count
        } else {
            sum += i.price
        }
    })

    return (
        <div className="flex flex-col rounded-lg bg-white  border border-gray h-screen !overflow-y-scroll k-scroll">
            <div className="pb-16">
                {products.data.length >= 1 ? products.data.map((i, index) => {
                    return (
                        <div key={index} className="bg-white relative news-card flex px-2 py-3 rounded-md gap-3 items-center mb-4">
                            <img className="w-20 h-20" src={i.img} alt="order img" />
                            <div className="pr-6">
                                <h3 className="text-sm font-bold mb-2">{i.title}</h3>

                                <div className="bg-[#F3F3F7] flex items-center justify-between w-[93px] rounded-lg text-btn-gray-text py-2">

                                    <button onClick={() => dispatch(updateCount(i))} className="py-1 px-3 ">
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.85714 3.53571C7.85714 3.23996 7.61719 3 7.32143 3H5V0.678571C5 0.382812 4.76004 0.142857 4.46429 0.142857H3.39286C3.0971 0.142857 2.85714 0.382812 2.85714 0.678571V3H0.535714C0.239955 3 0 3.23996 0 3.53571V4.60714C0 4.9029 0.239955 5.14286 0.535714 5.14286H2.85714V7.46429C2.85714 7.76004 3.0971 8 3.39286 8H4.46429C4.76004 8 5 7.76004 5 7.46429V5.14286H7.32143C7.61719 5.14286 7.85714 4.9029 7.85714 4.60714V3.53571Z" fill="#696F7A" />
                                        </svg>
                                    </button>

                                    <span className="text-sm font-bold">{i.count}</span>

                                    <button disabled={i.count === 1} onClick={() => dispatch(minusCount(i))} className="py-1 px-3 ">
                                        <svg width="8" height="3" viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.85714 0.535714C7.85714 0.239955 7.61719 0 7.32143 0H0.535714C0.239955 0 0 0.239955 0 0.535714V1.60714C0 1.9029 0.239955 2.14286 0.535714 2.14286H7.32143C7.61719 2.14286 7.85714 1.9029 7.85714 1.60714V0.535714Z" fill="#696F7A" />
                                        </svg>
                                    </button>
                                </div>

                                <span className="text-yellow font-bold absolute bottom-4 right-4">{i.price * i.count}₽</span>
                            </div>

                            <button className="absolute top-2 right-2 text-lg" onClick={() => dispatch(deleteKorzina(i))}>
                                <i className="bi bi-x-circle"></i>
                            </button>
                        </div>
                    )
                }) :
                    <div className="no-data">
                        <h3 className="text-xl text-btn-gray-text">No items</h3>
                    </div>
                }
            </div>
            <div className="flex justify-between absolute bottom-0 left-0 right-0 px-5 bg-white py-10">
                <span className="font-semibold">Сумма заказа</span>
                <span className="text-yellow font-bold">{sum}₽</span>
            </div>

        </div>
    )
}
