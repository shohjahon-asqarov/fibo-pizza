import { stock } from '../assets/data'

export default function Stock() {
    return (
        <section className='pb-20 pt-10'>
            <h2 className='section-text mb-10'>Stock</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stock.map((item, index) => {
                    return (
                        <div key={index} className='stock-card rounded-[14px] cursor-pointer overflow-hidden'>
                            <div className="card-img">
                                <img className='w-full' src={item.img} alt="stock img" />
                            </div>
                            <div className="space-y-3 px-5 pt-5">
                                <h3 className="text-2xl font-extrabold text-c-title">
                                    {item.title}
                                </h3>
                                <p className="text-c-desc text-sm font-medium">
                                    {item.description}
                                </p>
                            </div>
                            <div className="card-footer p-5">
                                <button className="bg-yellow rounded-lg text-white font-bold text-sm py-2 px-5">Посмотреть</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
