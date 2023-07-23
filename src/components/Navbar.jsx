import React, { useState } from 'react'
import { logo } from '../assets/data'


import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Button from '../ui/Button';


export default function Navbar() {

  const [activeTab, setActiveTab] = useState("Пицца");
  const data = [
    {
      label: "Пицца",
      value: "Пицца",
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
      value: "Акции ",
    },
    {
      label: "Комбо ",
      value: "Комбо ",
    },

  ];


  return (
    <header className='pt-5'>

      <div className="top flex justify-between items-center">
        <a href="#">
          <img src={logo} alt="site logo" />
        </a>
        <div className="flex gap-5 items-center">
          <a href="#" className='btn-gray'>
            Заказать звонок
          </a>

          <a className='inline-block text-2xl font-bold text-yellow' href="#">
            998 93 917 07 31
          </a>
        </div>
      </div>

      <div className="tabs flex justify-between py-6 items-center">
        <Tabs className="inline-block" value={activeTab}>
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                <span className='font-semibold px-3 py-0.5 inline-block text-base'>{label}</span>
              </Tab>
            ))}
          </TabsHeader>

        </Tabs>

        <Button text={'Корзина'} />
      </div>

    </header>
  )
}
