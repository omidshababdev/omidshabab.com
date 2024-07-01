// 'use client';
import { RiBarChartFill } from '@remixicon/react';
import { Card } from '@tremor/react';

export default function ApiStatsCard() {
     return (
          <Card className="w-full sm:mx-auto sm:max-w-lg bg-primary/[3%] ring-0">
               <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    Total API requests
               </h3>
               <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    0
               </p>
               <div className="mt-4 flex h-44 items-center justify-center rounded-tremor-small border-[2px] border-dashed border-primary/10 p-4 dark:border-dark-tremor-border">
                    <div className="text-center">
                         <RiBarChartFill
                              className="mx-auto h-7 w-7 text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
                              aria-hidden={true}
                         />
                         <p className="mt-2 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                              No data to show
                         </p>
                         <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                              May take 24 hours for data to load
                         </p>
                    </div>
               </div>
          </Card>
     );
}