import { delivery1, delivery2, delivery3, delivery4 } from "../assets/data";

export default function Delivery() {

    const data = [
        {
            img: delivery1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: delivery2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: delivery3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            img: delivery4,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
    ];

    return (
        <div className="bg-blue">
            <section className="py-20">
                <div className="container">
                    <h2 className="text-center text-yellow mb-20">Оплата и доставка</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-x-6 gap-y-14 mb-10">
                        {data.map((item, i) => {
                            return (
                                <div data-aos="zoom-in" key={i} className="relative bg-white rounded-xl px-5 pt-10 pb-5">
                                    <div className="absolute left-0 -top-10 right-0">
                                        <div className="w-20 h-20 flex mx-auto rounded-full justify-center items-center bg-white">
                                            <img src={item.img} alt="img" className="w-11 h-11 object-cover" />
                                        </div>
                                    </div>
                                    <h3 className="text-sm font-bold text-center">{item.title}</h3>
                                </div>
                            )
                        })}
                    </div>

                    <iframe className='w-full h-72 rounded-lg'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.588803794508!2d37.477642515926995!3d55.661360580528985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54da002656bc7%3A0xa799933657c1d4f!2z0L_RgC4g0JLQtdGA0L3QsNC00YHQutC-0LPQviwgODbQsiwg0JzQvtGB0LrQstCwLCAxMTk0MTU!5e0!3m2!1sru!2sru!4v1645970050041!5m2!1sru!2sru">
                    </iframe>
                </div>
            </section>
        </div>
    )
}
