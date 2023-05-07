import React, { useContext, useEffect, useState } from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import { fakeTable } from '../WallpaperStatistics/WallpaperStatistics';
import Pagination from '../Pagination/Pagination';
import { setLocalStorage } from '../../assets/appStorage/appStorage';
import { Fade, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { AdminContext } from '../../App';

const fakeReports = [
    {
        id: 0,
        name: 'John Doe',
        email: 'john001@gmail.com',
        title: 'lorem doing breakfast',
        massage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odit doloremque architecto in minus officia recusandae cumque facere. Temporibus, excepturi atque. Laudantium itaque ',
    },
    {
        id: 1,
        name: 'John Doe',
        email: 'john001@gmail.com',
        title: 'lorem doing breakfast',
        massage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odit doloremque architecto in minus officia recusandae cumque facere. Temporibus, excepturi atque. Laudantium itaque eveniet, aperiam commodi veritatis similique minus suscipit',
    },
    {
        id: 2,
        name: 'John Doe',
        email: 'john001@gmail.com',
        title: 'lorem doing breakfast',
        massage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odit doloremque architecto in minus officia recusandae cumque facere. Temporibus, excepturi atque. Laudantium itaque eveniet, aperiam commodi veritatis similique minus suscipit',
    },
    {
        id: 3,
        name: 'John Doe',
        email: 'john001@gmail.com',
        title: 'lorem doing breakfast',
        massage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odit doloremque architecto in minus officia recusandae cumque facere. Temporibus, excepturi atque. Laudantium itaque eveniet, aperiam commodi veritatis similique minus suscipit',
    },
    {
        id: 4,
        name: 'John Doe',
        email: 'john001@gmail.com',
        title: 'lorem doing breakfast',
        massage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odit doloremque architecto in minus officia recusandae cumque facere. Temporibus, excepturi atque. Laudantium itaque eveniet, aperiam commodi veritatis similique minus suscipit',
    },
    {
        id: 5,
        name: 'John Doe',
        email: 'john001@gmail.com',
        title: 'lorem doing breakfast',
        massage: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odit doloremque architecto in minus officia recusandae cumque facere. Temporibus, excepturi atque. Laudantium itaque eveniet, aperiam commodi veritatis similique minus suscipit',
    }
]
const Reports = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('Reports')
    }, 1);
    setLocalStorage('componentId', 4)

    useEffect(() => {
        setReports(fakeReports)
    }, [])

    // All Reports goes here
    const [reports, setReports] = useState([])


    // Delete Report btn Handler
    const deleteBtnHandler = (id) => {
        setReports(reports.filter(report => report.id !== id))
    }

    return (
        <section className='container tw-mt-4 tw-mb-7'>
            <div className='navyBlue container tw-rounded-lg tw-space-y-5 pb-3'>

                {/*Table Header */}
                <ComponentHeader placeholder='Search By Name...' button={false} />

                {/* Table */}
                <div className='tw-bg-gray-800/50 tw-rounded-md'>
                    <div className='sm:tw-w-full tw-w-96 tw-mx-auto navyBlue tw-overflow-x-auto pb-3 tw-whitespace-nowrap md:tw-whitespace-normal'>

                        <table className='tw-w-full tw-table-auto cursor-pointer'>
                            <thead>
                                <tr>
                                    {['Id', 'Name', 'Email', 'Title', 'Massage', 'Date', 'Action'].map((th, i) => {
                                        return <th className='tw-px-4 tw-py-2' key={i}>{th}</th>
                                    })}
                                </tr>
                            </thead>

                            <tbody>
                                {reports.map(report => {
                                    const { id, name, email, title, massage } = report;

                                    return (
                                        <Fade in={true} onDurationChange={1500}>
                                        <tr key={id} className='hover:tw-bg-gray-700/10'>

                                            {/* Id */}
                                            <td className='tw-px-4 tw-py-2'>{id}</td>

                                            {/* Name */}
                                            <td className='tw-px-4 tw-py-2'>
                                                {name}
                                            </td>

                                            {/* Email */}
                                            <td className='tw-px-4 tw-py-2'>
                                                {email}
                                            </td>

                                            {/* Title */}
                                            <td className='tw-px-4 tw-py-2'>
                                                {title}
                                            </td>

                                            {/* MASSAGE' */}
                                            <td className='tw-px-4 tw-py-2'>
                                                {massage.slice(0, 300)}
                                            </td>

                                            {/* Date */}
                                            <td className='tw-px-4 tw-py-2'>
                                                {Date().slice(0, 25)}
                                            </td>

                                            {/* delete-report Button */}
                                            <td className='tw-px-4 tw-py-2'>
                                                <Tooltip arrow title="Delete" placement="top">
                                                    <IconButton onClick={() => deleteBtnHandler(report.id)} size='normal'
                                                        color="error" aria-label="upload picture" component="label">
                                                        <Delete fontSize="inherit" />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                        </Fade>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <Pagination />
            </div>
        </section>
    );
};

export default Reports;