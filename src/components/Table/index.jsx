import { useState, useMemo, useCallback } from 'react'
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    useReactTable
} from '@tanstack/react-table'
import styles from './styles.module.css'

const initialPagination = {
    pageIndex: 0,
    pageSize: 10
}

function Table({ data }) {
    const [globalFilter, setGlobalFilter] = useState('')
    const [sorting, setSorting] = useState([])
    const [pagination, setPagination] = useState(initialPagination)

    const columnHelper = createColumnHelper()

    const columns = useMemo(
        () => [
            columnHelper.accessor((row) => row.firstName, {
                id: 'firstName',
                cell: (info) => <i>{info.getValue()}</i>,
                header: () => <span>First Name</span>
            }),
            columnHelper.accessor((row) => row.lastName, {
                id: 'lastName',
                cell: (info) => <i>{info.getValue()}</i>,
                header: () => <span>Last Name</span>
            }),
            columnHelper.accessor((row) => row.startDate, {
                id: 'startDate',
                cell: (info) => <i>{info.getValue()}</i>,
                header: () => <span>Start Date</span>
            }),
            columnHelper.accessor((row) => row.department, {
                id: 'department',
                cell: (info) => <i>{info.getValue()}</i>,
                header: () => <span>Department</span>
            }),
            columnHelper.accessor((row) => row.dateOfBirth, {
                id: 'dateOfBirth',
                cell: (info) => <i>{info.getValue()}</i>,
                header: () => <span>Date of Birth</span>
            }),
            columnHelper.accessor((row) => row.street, {
                id: 'street',
                cell: (info) => <i>{info.getValue()}</i>,
                header: () => <span>Street</span>
            }),
            columnHelper.accessor((row) => row.city, {
                id: 'city',
                cell: (info) => <i>{info.getValue()}</i>,
                header: () => <span>City</span>
            }),
            columnHelper.accessor((row) => row.state, {
                id: 'state',
                cell: (info) => <i>{info.getValue()}</i>,
                header: () => <span>State</span>
            }),
            columnHelper.accessor((row) => row.zipCode, {
                id: 'zipCode',
                cell: (info) => <i>{info.getValue()}</i>,
                header: () => <span>Zip Code</span>
            })
        ],
        [columnHelper]
    )

    const table = useReactTable({
        data,
        columns,
        rowCount: data.length,
        state: {
            globalFilter,
            sorting,
            pagination
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        onPaginationChange: setPagination
    })

    const handlePageSizeChange = useCallback(
        (e) => {
            table.setPageSize(Number(e.target.value))
        },
        [table]
    )

    const handleSearchChange = useCallback((e) => {
        setGlobalFilter(String(e.target.value))
    }, [])

    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableLength}>
                <label>
                    Show
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={handlePageSizeChange}
                    >
                        {[10, 25, 50, 100].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    entries
                </label>
            </div>
            <div className={styles.tableFilter}>
                <label>
                    Search:
                    <input
                        type="search"
                        value={globalFilter ?? ''}
                        onChange={handleSearchChange}
                    />
                </label>
            </div>
            <table className={styles.table}>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder ? null : (
                                        <div
                                            className={
                                                header.column.getCanSort()
                                                    ? 'cursor-pointer select-none'
                                                    : ''
                                            }
                                            onClick={header.column.getToggleSortingHandler()}
                                            title={
                                                // prettier-ignore
                                                header.column.getCanSort() ? header.column.getNextSortingOrder() === 'asc' ? 'Sort ascending' : header.column.getNextSortingOrder() === 'desc' ? 'Sort descending' : 'Clear sort' : undefined
                                            }
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: ' 🔼',
                                                desc: ' 🔽'
                                            }[header.column.getIsSorted()] ??
                                                null}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {table.getFooterGroups().map((footerGroup) => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {
                                        // prettier-ignore
                                        header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())
                                    }
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
            <p className={styles.tableInfo}>
                Showing{' '}
                {table.getState().pagination.pageIndex *
                    table.getState().pagination.pageSize +
                    1}{' '}
                to{' '}
                {Math.min(
                    (table.getState().pagination.pageIndex + 1) *
                        table.getState().pagination.pageSize,
                    data.length
                )}{' '}
                of {data.length} entries
            </p>
            <div className={styles.tablePagination}>
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </button>
                {Array.from({ length: table.getPageCount() }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => table.setPageIndex(index)}
                        disabled={
                            table.getState().pagination.pageIndex === index
                        }
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Table
