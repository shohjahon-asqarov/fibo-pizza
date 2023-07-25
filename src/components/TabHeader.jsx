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
            label: "Home",
            value: "/",
        },
        {
            label: "Pizza",
            value: "/pizza",
        },
        {
            label: "Paste",
            value: "/paste",
        },
        {
            label: "Soups ",
            value: "/soups ",
        },
        {
            label: "Salads ",
            value: "/salads ",
        },
        {
            label: "Beverages ",
            value: "/beverages ",
        },
        {
            label: "Desert ",
            value: "/dessert ",
        },
        {
            label: "Antipasti ",
            value: "/antipasti ",
        },
        {
            label: "Stock ",
            value: "/stock ",
        },
        {
            label: "Combo ",
            value: "/combo ",
        },
        {
            label: "Location ",
            value: "/location ",
        }

    ];

    return (
        <section className='sticky top-0 z-50 bg-white'>
            <div className="tabs  justify-center py-6 items-center max:justify-between flex">
                <Tabs className="hidden close-tab:flex" value={'/'}>
                    <TabsHeader>
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                <NavLink className='font-semibold px-3 py-0.5 inline-block text-base' to={value}>{label}</NavLink>
                            </Tab>
                        ))}
                    </TabsHeader>

                </Tabs>

                <button onClick={() => setOpen(!open)} className='btn-yellow max:static fixed bottom-8 right-6'>Card | {num.length}</button>
            </div>
        </section>
    )
}
