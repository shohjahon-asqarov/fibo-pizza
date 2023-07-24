import { useDispatch } from "react-redux";

import { addKorzina } from '../store/slices/Korzina'
import { salads } from "../assets/img/salad/salads";

export default function Salads() {

    const dispatch = useDispatch();

    const addProduct = (p) => {
        dispatch(addKorzina(p));
    }

    return (
        <section className="py-10">
            <h2 className="section-text mb-10">Salads</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-x-6 gap-y-14 mb-10">
                {salads.map((p, index) => {
                    return (
                        <div key={index} className="hover:shadow-lg p-4 rounded-lg cursor-pointer border border-gray">
                            <div className="card-header pl-3">
                                <img src={p.img} alt={p.name} className="w-full h-auto mx-auto" />
                            </div>

                            <div className="space-y-3 mb-3">
                                <h3 className="text-2xl font-extrabold text-c-title">
                                    {p.title}
                                </h3>
                                <p className="text-c-desc text-sm font-medium">
                                    {p.description}
                                </p>
                            </div>

                            <div className="card-footer flex justify-between items-center">
                                <span className="text-2xl font-bold">{p.price}₽</span>
                                <button onClick={() => addProduct(p)} className="bg-yellow rounded-lg text-white font-bold text-sm py-2 px-5 active:scale-95">В корзину</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
