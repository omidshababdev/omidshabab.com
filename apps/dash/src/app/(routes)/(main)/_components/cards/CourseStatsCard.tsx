// 'use client';
import { Card, SparkAreaChart } from '@tremor/react';

function classNames(...classes: any[]) {
     return classes.filter(Boolean).join(' ');
}

const data = [
     {
          date: 'Nov 24, 2023',
          GOOG: 156.2,
          AMZN: 68.5,
          SPOT: 71.8,
          AAPL: 149.1,
     },
     {
          date: 'Nov 25, 2023',
          GOOG: 152.5,
          AMZN: 69.3,
          SPOT: 67.2,
          AAPL: 145.1,
     },
     {
          date: 'Nov 26, 2023',
          GOOG: 148.7,
          AMZN: 69.8,
          SPOT: 61.5,
          AAPL: 146.1,
     },
     {
          date: 'Nov 27, 2023',
          GOOG: 155.3,
          AMZN: 73.5,
          SPOT: 57.9,
          AAPL: 147.1,
     },
     {
          date: 'Nov 28, 2023',
          GOOG: 160.1,
          AMZN: 75.2,
          SPOT: 59.6,
          AAPL: 148.1,
     },
     {
          date: 'Nov 29, 2023',
          GOOG: 175.6,
          AMZN: 89.2,
          SPOT: 57.3,
          AAPL: 149.2,
     },
     {
          date: 'Nov 30, 2023',
          GOOG: 180.2,
          AMZN: 92.7,
          SPOT: 59.8,
          AAPL: 149.1,
     },
     {
          date: 'Dec 01, 2023',
          GOOG: 185.5,
          AMZN: 95.3,
          SPOT: 62.4,
          AAPL: 142.4,
     },
     {
          date: 'Dec 02, 2023',
          GOOG: 182.3,
          AMZN: 93.8,
          SPOT: 60.7,
          AAPL: 143.6,
     },
     {
          date: 'Dec 03, 2023',
          GOOG: 180.7,
          AMZN: 91.6,
          SPOT: 58.9,
          AAPL: 144.3,
     },
     {
          date: 'Dec 04, 2023',
          GOOG: 178.5,
          AMZN: 89.7,
          SPOT: 56.2,
          AAPL: 152.4,
     },
     {
          date: 'Dec 05, 2023',
          GOOG: 176.2,
          AMZN: 87.5,
          SPOT: 54.8,
          AAPL: 156.1,
     },
     {
          date: 'Dec 06, 2023',
          GOOG: 174.8,
          AMZN: 85.3,
          SPOT: 53.4,
          AAPL: 158.6,
     },
     {
          date: 'Dec 07, 2023',
          GOOG: 178.0,
          AMZN: 88.2,
          SPOT: 55.2,
          AAPL: 159.3,
     },
     {
          date: 'Dec 08, 2023',
          GOOG: 180.6,
          AMZN: 90.5,
          SPOT: 56.8,
          AAPL: 164.6,
     },
     {
          date: 'Dec 09, 2023',
          GOOG: 182.4,
          AMZN: 92.8,
          SPOT: 58.4,
          AAPL: 166.6,
     },
     {
          date: 'Dec 10, 2023',
          GOOG: 179.7,
          AMZN: 90.2,
          SPOT: 57.0,
          AAPL: 169.2,
     },
     {
          date: 'Dec 11, 2023',
          GOOG: 154.2,
          AMZN: 88.7,
          SPOT: 55.6,
          AAPL: 169.6,
     },
     {
          date: 'Dec 12, 2023',
          GOOG: 151.9,
          AMZN: 86.5,
          SPOT: 53.9,
          AAPL: 169.1,
     },
     {
          date: 'Dec 13, 2023',
          GOOG: 149.3,
          AMZN: 83.7,
          SPOT: 52.1,
          AAPL: 169.1,
     },
     {
          date: 'Dec 14, 2023',
          GOOG: 148.8,
          AMZN: 81.4,
          SPOT: 50.5,
          AAPL: 171.6,
     },
     {
          date: 'Dec 15, 2023',
          GOOG: 145.5,
          AMZN: 79.8,
          SPOT: 48.9,
          AAPL: 171.1,
     },
     {
          date: 'Dec 16, 2023',
          GOOG: 140.2,
          AMZN: 84.5,
          SPOT: 50.2,
          AAPL: 173.6,
     },
];

const summary = [
     {
          ticker: 'AMZN',
          description: 'Amazon',
          value: '$84.5',
          change: '+0.92%',
          changeType: 'positive',
     },
     {
          ticker: 'GOOG',
          description: 'Alphabet, Inc',
          value: '$140.2',
          change: '-0.38%',
          changeType: 'negative',
     },
     {
          ticker: 'AAPL',
          description: 'Apple',
          value: '$173.6',
          change: '+1.67%',
          changeType: 'positive',
     },
     {
          ticker: 'SPOT',
          description: 'Spotify',
          value: '$50.2',
          change: '-0.25%',
          changeType: 'negative',
     },
];

const CourseStatsCard = () => {
     return (
          <>
               <Card className="sm:mx-auto sm:max-w-md bg-primary/[3%] ring-0">
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                         Watchlist
                    </p>
                    <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                         $44,567.10
                    </p>
                    <p className="mt-1 text-tremor-default font-medium">
                         <span className="text-emerald-700 dark:text-emerald-500">
                              +$451.30 (1.2%)
                         </span>{' '}
                         <span className="font-normal text-tremor-content dark:text-dark-tremor-content">
                              Today
                         </span>
                    </p>
                    <ul role="list" className="mt-8 space-y-8">
                         {summary.map((item) => (
                              <li
                                   key={item.ticker}
                                   className="flex items-center justify-between space-x-6"
                              >
                                   <div className="truncate">
                                        <p className="truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                             {item.ticker}
                                        </p>
                                        <p className="truncate text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                                             {item.description}
                                        </p>
                                   </div>
                                   <div className="flex items-center space-x-4">
                                        <SparkAreaChart
                                             data={data}
                                             index="date"
                                             categories={[item.ticker]}
                                             showGradient={true}
                                             colors={
                                                  item.changeType === 'positive' ? ['emerald'] : ['red']
                                             }
                                             className="h-10 w-32 flex-none sm:w-44"
                                        />
                                        <div className="w-14 text-right sm:w-16">
                                             <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                                  {item.value}
                                             </p>
                                             <p
                                                  className={classNames(
                                                       item.changeType === 'positive'
                                                            ? 'text-emerald-700 dark:text-emerald-500 '
                                                            : 'text-red-700 dark:text-red-500',
                                                       'text-tremor-label font-medium',
                                                  )}
                                             >
                                                  {item.change}
                                             </p>
                                        </div>
                                   </div>
                              </li>
                         ))}
                    </ul>
               </Card>
          </>
     );
}

export default CourseStatsCard