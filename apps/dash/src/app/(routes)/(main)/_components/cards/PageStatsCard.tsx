// 'use client';
import { BarList, Card } from '@tremor/react';
import { useState } from 'react';

const pages = [
     {
          name: '/home',
          value: 2019,
     },
     {
          name: '/blocks',
          value: 1053,
     },
     {
          name: '/components',
          value: 997,
     },
     {
          name: '/docs/getting-started/installation',
          value: 982,
     },
     {
          name: '/docs/components/button',
          value: 782,
     },
     {
          name: '/docs/components/table',
          value: 752,
     },
     {
          name: '/docs/components/area-chart',
          value: 741,
     }
];

const valueFormatter = (number: number) =>
     `${Intl.NumberFormat('us').format(number).toString()}`;

export default function PageStatsCard() {
     return (
          <>
               <Card className="p-0 sm:mx-auto sm:max-w-lg bg-primary/[3%] ring-0">
                    <div className="flex items-center justify-between border-b border-tremor-border p-6 dark:border-dark-tremor-border">
                         <p className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                              Top pages
                         </p>
                         <p className="text-tremor-label font-medium uppercase text-tremor-content dark:text-dark-tremor-content">
                              Visitors
                         </p>
                    </div>
                    <div
                         className="overflow-hidden p-6"
                    >
                         <BarList data={pages} valueFormatter={valueFormatter} />
                    </div>

               </Card>
          </>
     );
}