import React from 'react'

import {
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

import Button from '../ui/Button';
import { NavLink } from 'react-router-dom';


export default function TabHeader() {


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
            <div className="tabs hidden justify-center py-6 items-center max:justify-between close-tab:flex">
                <Tabs className="inline-block" value={'Пицца'}>
                    <TabsHeader>
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                <NavLink className='font-semibold px-3 py-0.5 inline-block text-base' to={value}>{label}</NavLink>
                            </Tab>
                        ))}
                    </TabsHeader>

                </Tabs>

                <Button text={'Корзина'} />
            </div>
        </nav>
    )
}
