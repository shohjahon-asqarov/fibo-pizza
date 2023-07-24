import { newsImg } from "../assets/data"

export default function News() {

    const news = [
        {
            title: 'Карбонара',
            price: 'от 120 ₽',
            img: newsImg
        },
        {
            title: 'Карбонара',
            price: 'от 120 ₽',
            img: newsImg
        },
        {
            title: 'Карбонара',
            price: 'от 120 ₽',
            img: newsImg
        },
        {
            title: 'Карбонара',
            price: 'от 120 ₽',
            img: newsImg
        },
    ] ;

    return (
        <section className="pt-10">
            <h2 className="mb-10">Новинки</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6">
                {news.map((item, index) => {
                    return (
                        <div data-aos="zoom-in" className="news-card flex rounded-xl bg-white py-4 px-5 gap-4 items-center cursor-pointer hover:scale-95" key={index}>
                            <img src={item.img} alt="news card img" />
                            <div className="detail">
                                <h3 className="text-lg">{item.title}</h3>
                                <p className="text-yellow font-extrabold">{item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
