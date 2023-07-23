import React from 'react'

import {
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function TabHeader({ open, setOpen }) {

    const num = useSelector((state) => state.korzina.data)


    const data = [
        {
            label: "Пицца",
            value: "/",
        },
        {
            label: "Паста",
            value: "Паста",
        },
        {
            label: "Супы ",
            value: "Супы ",
        },
        {
            label: "Салаты ",
            value: "Салаты ",
        },
        {
            label: "Напитки ",
            value: "Напитки ",
        },
        {
            label: "Десерты ",
            value: "Десерты ",
        },
        {
            label: "Бакалея ",
            value: "Бакалея ",
        },
        {
            label: "Антипасти ",
            value: "Антипасти ",
        },
        {
            label: "Акции ",
            value: "stock ",
        },
        {
            label: "Комбо ",
            value: "Комбо ",
        },

    ];

    return (
        <nav className='sticky top-0 z-50 bg-white'>
            <div className="tabs  justify-center py-6 items-center max:justify-between flex">
                <Tabs className="hidden close-tab:flex" value={'Пицца'}>
                    <TabsHeader>
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                <NavLink className='font-semibold px-3 py-0.5 inline-block text-base' to={value}>{label}</NavLink>
                            </Tab>
                        ))}
                    </TabsHeader>

                </Tabs>

                <button onClick={() => setOpen(!open)} className='btn-yellow max:static fixed bottom-8 right-6'>Корзина | {num.length}</button>
            </div>
        </nav>
    )
}
