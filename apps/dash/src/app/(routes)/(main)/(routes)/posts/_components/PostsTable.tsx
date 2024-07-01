// import { RiArrowDownLine, RiArrowUpLine } from '@remixicon/react';

// import {
//      flexRender,
//      getCoreRowModel,
//      getSortedRowModel,
//      useReactTable,
// } from '@tanstack/react-table';

// import {
//      Table,
//      TableBody,
//      TableCell,
//      TableHead,
//      TableHeaderCell,
//      TableRow,
// } from '@tremor/react';

// function classNames(...classes: string[]) {
//      return classes.filter(Boolean).join(' ');
// }

// const workspaces = [
//      {
//           workspace: 'sales_by_day_api',
//           owner: 'John Doe',
//           status: 'live',
//           costs: '$3,509.00',
//           region: 'US-West 1',
//           capacity: '99%',
//           lastEdited: '23/09/2023 13:00',
//      },
//      {
//           workspace: 'marketing_campaign',
//           owner: 'Jane Smith',
//           status: 'live',
//           costs: '$5,720.00',
//           region: 'US-East 2',
//           capacity: '80%',
//           lastEdited: '22/09/2023 10:45',
//      },
//      {
//           workspace: 'sales_campaign',
//           owner: 'Jane Smith',
//           status: 'live',
//           costs: '$5,720.00',
//           region: 'US-East 2',
//           capacity: '80%',
//           lastEdited: '22/09/2023 10:45',
//      },
//      {
//           workspace: 'development_env',
//           owner: 'Mike Johnson',
//           status: 'live',
//           costs: '$4,200.00',
//           region: 'EU-West 1',
//           capacity: '60%',
//           lastEdited: '21/09/2023 14:30',
//      },
//      {
//           workspace: 'new_workspace_1',
//           owner: 'Alice Brown',
//           status: 'live',
//           costs: '$2,100.00',
//           region: 'US-West 2',
//           capacity: '75%',
//           lastEdited: '24/09/2023 09:15',
//      },
//      {
//           workspace: 'test_environment',
//           owner: 'David Clark',
//           status: 'inactive',
//           costs: '$800.00',
//           region: 'EU-Central 1',
//           capacity: '40%',
//           lastEdited: '25/09/2023 16:20',
//      },
//      {
//           workspace: 'analytics_dashboard',
//           owner: 'Sarah Wilson',
//           status: 'live',
//           costs: '$6,500.00',
//           region: 'US-West 1',
//           capacity: '90%',
//           lastEdited: '26/09/2023 11:30',
//      },
//      {
//           workspace: 'research_project',
//           owner: 'Michael Adams',
//           status: 'live',
//           costs: '$3,900.00',
//           region: 'US-East 1',
//           capacity: '70%',
//           lastEdited: '27/09/2023 08:45',
//      },
//      {
//           workspace: 'training_environment',
//           owner: 'Laura White',
//           status: 'live',
//           costs: '$2,500.00',
//           region: 'EU-North 1',
//           capacity: '55%',
//           lastEdited: '28/09/2023 12:15',
//      },
// ];

// const workspacesColumns = [
//      {
//           header: 'Workspace',
//           accessorKey: 'workspace',
//           enableSorting: true,
//           meta: {
//                align: 'text-left',
//           },
//      },
//      {
//           header: 'Owner',
//           accessorKey: 'owner',
//           enableSorting: true,
//           meta: {
//                align: 'text-left',
//           },
//      },
//      {
//           header: 'Status',
//           accessorKey: 'status',
//           enableSorting: false,
//           meta: {
//                align: 'text-left',
//           },
//      },
//      {
//           header: 'Region',
//           accessorKey: 'region',
//           enableSorting: false,
//           meta: {
//                align: 'text-left',
//           },
//      },
//      {
//           header: 'Capacity',
//           accessorKey: 'capacity',
//           enableSorting: false,
//           meta: {
//                align: 'text-left',
//           },
//      },
//      {
//           header: 'Costs',
//           accessorKey: 'costs',
//           enableSorting: false,
//           meta: {
//                align: 'text-right',
//           },
//      },
//      {
//           header: 'Last edited',
//           accessorKey: 'lastEdited',
//           enableSorting: false,
//           meta: {
//                align: 'text-right',
//           },
//      },
// ];

// const PostsTable = () => {
//      const table = useReactTable({
//           data: workspaces,
//           columns: workspacesColumns,
//           getCoreRowModel: getCoreRowModel(),
//           getSortedRowModel: getSortedRowModel(),
//           initialState: {
//                sorting: [
//                     {
//                          id: 'workspace',
//                          desc: false,
//                     },
//                ],
//           },
//      });

//      return (
//           <>
//                <Table>
//                     <TableHead>
//                          {table.getHeaderGroups().map((headerGroup) => (
//                               <TableRow
//                                    key={headerGroup.id}
//                                    className="border-b border-tremor-border dark:border-dark-tremor-border"
//                               >
//                                    {headerGroup.headers.map((header) => (
//                                         <TableHeaderCell
//                                              key={header.id}
//                                              onClick={header.column.getToggleSortingHandler()}
//                                              onKeyDown={(event) => {
//                                                   if (event.key === 'Enter') {
//                                                        header.column.getToggleSortingHandler()(event);
//                                                   }
//                                              }}
//                                              className={classNames(
//                                                   header.column.getCanSort()
//                                                        ? 'cursor-pointer select-none'
//                                                        : '',
//                                                   'group px-0.5 py-1.5',
//                                              )}
//                                              tabIndex={header.column.getCanSort() ? 0 : -1}
//                                              aria-sort={header.column.getIsSorted()}
//                                         >
//                                              <div
//                                                   className={classNames(
//                                                        header.column.columnDef.enableSorting === true
//                                                             ? 'flex items-center justify-between gap-2 hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background-muted'
//                                                             : header.column.columnDef.meta.align,
//                                                        'rounded-tremor-default px-3 py-2.5',
//                                                   )}
//                                              >
//                                                   {flexRender(
//                                                        header.column.columnDef.header,
//                                                        header.getContext(),
//                                                   )}
//                                                   {/* harmonize colors with previous block (=ground truth) */}
//                                                   {header.column.getCanSort() ? (
//                                                        header.column.getIsSorted() === 'asc' ? (
//                                                             <RiArrowUpLine
//                                                                  className="h-4 w-4 text-tremor-content-strong dark:text-dark-tremor-content-strong"
//                                                                  aria-hidden={true}
//                                                             />
//                                                        ) : header.column.getIsSorted() === 'desc' ? (
//                                                             <RiArrowDownLine
//                                                                  className="h-4 w-4 text-tremor-content-strong dark:text-dark-tremor-content-strong"
//                                                                  aria-hidden={true}
//                                                             />
//                                                        ) : (
//                                                             <RiArrowUpLine
//                                                                  className="h-4 w-4 text-tremor-content dark:text-dark-tremor-content"
//                                                                  aria-hidden={true}
//                                                             />
//                                                        )
//                                                   ) : null}
//                                              </div>
//                                         </TableHeaderCell>
//                                    ))}
//                               </TableRow>
//                          ))}
//                     </TableHead>
//                     <TableBody>
//                          {table.getRowModel().rows.map((row) => (
//                               <TableRow key={row.id}>
//                                    {row.getVisibleCells().map((cell) => (
//                                         <TableCell
//                                              key={cell.id}
//                                              className={classNames(cell.column.columnDef.meta.align)}
//                                         >
//                                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                                         </TableCell>
//                                    ))}
//                               </TableRow>
//                          ))}
//                     </TableBody>
//                </Table>
//           </>
//      );
// }

// export default PostsTable