// 'use client';
import { RiCheckboxCircleFill } from '@remixicon/react';
import { Divider, List, ListItem } from '@tremor/react';

const features = [
     {
          id: 1,
          name: 'Invite unlimited members',
     },
     {
          id: 2,
          name: 'Create unlimited workspaces',
     },
     {
          id: 3,
          name: '90 days of history',
     },
     {
          id: 4,
          name: '24/7 priority support',
     },
     {
          id: 5,
          name: 'Access to all enterprise plugins',
     },
];

const SubscriptionCard = () => {
     return (
          <>
               <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="p-6">
                         <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                              Unlock all features
                         </h3>
                         <p className="mt-2 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                              Get the full potential of your data with our enhanced features that
                              enable advanced data analytics and informed decision-making.
                         </p>
                         <div className="mt-8 space-y-6">
                              <div className="relative border-l-2 border-tremor-border pl-4 dark:border-dark-tremor-border">
                                   <h4 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                        <a href="#" className="focus:outline-none">
                                             {/* Extend link to entire card */}
                                             <span className="absolute inset-0" aria-hidden={true} />
                                             Talk to Sales &#8594;
                                        </a>
                                   </h4>
                                   <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                        Schedule a call with one of our sales representative
                                   </p>
                              </div>
                              <div className="relative border-l-2 border-tremor-border pl-4 dark:border-dark-tremor-border">
                                   <h4 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                        <a href="#" className="focus:outline-none">
                                             {/* Extend link to entire card */}
                                             <span className="absolute inset-0" aria-hidden={true} />
                                             Book a demo &#8594;
                                        </a>
                                   </h4>
                                   <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                        Try out our premium features in a demo
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="rounded-tremor-default border border-tremor-border bg-tremor-background-muted p-6 dark:border-dark-tremor-border dark:bg-dark-tremor-background-muted">
                         <div className="flex items-start justify-between space-x-6">
                              <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                   Professional Plan Subscription
                              </h3>
                              <p className="flex items-baseline">
                                   <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                        $89
                                   </span>
                                   <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                        /mo
                                   </span>
                              </p>
                         </div>
                         <List className="mt-4 divide-y-0 text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis">
                              {features.map((item) => (
                                   <ListItem
                                        key={item.id}
                                        className="justify-start space-x-2 py-2.5"
                                   >
                                        <RiCheckboxCircleFill
                                             className="h-5 w-5 shrink-0 text-tremor-brand dark:text-dark-tremor-brand"
                                             aria-hidden={true}
                                        />
                                        <span>{item.name}</span>
                                   </ListItem>
                              ))}
                         </List>
                         <Divider />
                         <a
                              href="#"
                              className="block w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand py-2.5 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
                         >
                              Upgrade
                         </a>
                    </div>
               </div>
          </>
     );
}

export default SubscriptionCard