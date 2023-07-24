import logo from './img/logo.svg';
import slide1 from './img/slide1.jpg';
import slide2 from './img/slide2.jpg';
import yandex from './img/yandex.svg';

import nextIcon from './icons/next.svg';
import prevIcon from './icons/prev.svg';

import newsImg from './img/news-img.png';

import delivery1 from './img/d1.svg';
import delivery2 from './img/d2.svg';
import delivery3 from './img/d3.svg';
import delivery4 from './img/d4.svg';

import f1 from './icons/f1.svg';
import f2 from './icons/f2.svg';
import f3 from './icons/f3.svg';
import f4 from './icons/f4.svg';
import f5 from './icons/f5.svg';
import f6 from './icons/f6.svg';


import p1 from './pizza/pizza1.png';
import p2 from './pizza/pizza2.png';
import p3 from './pizza/pizza3.png';
import p4 from './pizza/pizza4.png';

import s1 from './stock/s1.jpg';
import s2 from './stock/s2.jpg';
import s3 from './stock/s3.jpg';
import s4 from './stock/s4.jpg';
import s5 from './stock/s5.jpg';
import s6 from './stock/s6.jpg';
import s7 from './stock/s7.jpg';
import s8 from './stock/s8.jpg';


const pizza = [
    {
        id: 1,
        title: "С креветками и трюфелями",
        description: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
        price: 600,
        img: p1,
        count: 1
    },
    {
        id: 2,
        title: "С креветками и трюфелями",
        description: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
        price: 600,
        img: p2,
        count: 1
    },
    {
        id: 3,
        title: "С креветками и трюфелями",
        description: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
        price: 600,
        img: p3,
        count: 1
    },
    {
        id: 4,
        title: "С креветками и трюфелями",
        description: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
        price: 600,
        img: p4,
        count: 1
    },
    {
        id: 5,
        title: "С креветками и трюфелями",
        description: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
        price: 600,
        img: p1,
        count: 1
    },
    {
        id: 6,
        title: "С креветками и трюфелями",
        description: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
        price: 600,
        img: p2,
        count: 1
    },
    {
        id: 7,
        title: "С креветками и трюфелями",
        description: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
        price: 600,
        img: p3,
        count: 1
    },
    {
        id: 8,
        title: "С креветками и трюфелями",
        description: "Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г",
        price: 600,
        img: p4,
        count: 1
    },
];

const stock = [
    {
        title: 'Дарим кибер-призы',
        description: 'Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.',
        img: s1
    },
    {
        title: 'Дарим кибер-призы',
        description: 'Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.',
        img: s2
    },
    {
        title: 'Дарим кибер-призы',
        description: 'Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.',
        img: s3
    },
    {
        title: 'Дарим кибер-призы',
        description: 'Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.',
        img: s4
    },
    {
        title: 'Дарим кибер-призы',
        description: 'Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.',
        img: s5
    },
    {
        title: 'Дарим кибер-призы',
        description: 'Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.',
        img: s6
    },
    {
        title: 'Дарим кибер-призы',
        description: 'Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.',
        img: s7
    },
    {
        title: 'Дарим кибер-призы',
        description: 'Вот так ачивка! Закажите Кибер-комбо и получите доступ к играм от MY.GAMES, а еще кокосовый батончик и шоколадное печенье «Cyber» от Bite. А также станьте автоматическим участником розыгрыша игровых ключей и больших пицц 29 июня.',
        img: s8
    },
];

export {
    logo, slide1, slide2, yandex, nextIcon,
    prevIcon, newsImg, delivery1, delivery2, delivery3, delivery4,
    f1, f2, f3, f4, f5, f6,
    pizza, stock
};