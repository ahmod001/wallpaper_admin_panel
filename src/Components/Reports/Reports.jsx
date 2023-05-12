import React, { useContext, useEffect, useState } from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import Pagination from '../Pagination/Pagination';
import { getLocalStorage, setLocalStorage } from '../../assets/appStorage/appStorage';
import { Fade, Tooltip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { AdminContext } from '../../App';
import PopUpDialog from '../PopUpDialog/PopUpDialog';
import SnackBar from '../SnackBar/SnackBar';

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

    // All Reports goes here
    const [reports, setReports] = useState([])

    // This States for Pagination
    const defaultPage = getLocalStorage('defaultReportPage');
    const [currentPageNum, setCurrentPageNum] = useState(defaultPage || 1);
    const [totalPageCount, setTotalPageCount] = useState(5);

    // Pagination Handler
    const handlePagination = (event, value) => {
        setLocalStorage('defaultReportPage', value)
        setCurrentPageNum(value)
    }

    useEffect(() => {
        setReports(fakeReports)
    }, [])

    // Delete Report //
    const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);
    const [targetedReportId, setTargetedReportId] = useState(null);
    const [isDeletedSuccessfully, setIsDeletedSuccessfully] = useState(false);

    // Delete Btn Handler
    const deleteBtnHandler = (id) => {
        setTargetedReportId(id)
        setIsDeleteBtnClicked(!isDeleteBtnClicked)
    }

    // Confirm Delete Button Handler
    const confirmDelete = () => {
        setIsDeleteBtnClicked(!isDeleteBtnClicked)
        setIsDeletedSuccessfully(!isDeletedSuccessfully)
        setReports(reports.filter(report => report.id !== targetedReportId))
    }
    return (
        <section className='container tw-min-h-screen tw-mt-4 tw-mb-7'>

            {/*  Dialog for delete confirmation */}
            <PopUpDialog
                isActionBtnClicked={isDeleteBtnClicked}
                setIsActionBtnClicked={setIsDeleteBtnClicked}
                confirmAction={confirmDelete} />

            {/* Successfully Deleted Pop_up */}
            <SnackBar
                message={'Deleted Successfully'}
                isActionSuccessful={isDeletedSuccessfully}
                setIsActionSuccessful={setIsDeletedSuccessfully} />

            {/* Main Content */}
            <div className='navyBlue container tw-rounded-lg tw-space-y-5 pb-3'>
                {/*Table Header */}
                <ComponentHeader
                    placeholder='Search By Name...'
                    button={false} />

                {/* Table */}
                <TableContainer
                    sx={{
                        borderRadius: 0,
                        borderColor: 'rgba(169, 169, 169, 0.2)'
                    }}
                    component={Paper}>
                    <Fade
                        onDurationChange={() => 1500}
                        in={true}>
                        <Table
                            sx={{
                                minWidth: 650,
                                backgroundColor: '#1a2234'
                            }}>
                            <TableHead>
                                <TableRow>
                                    {['Id', 'Name', 'Email', 'Title', 'Massage', 'Date', 'Action'].map((th, i) => {
                                        return (
                                            <TableCell
                                                key={i}
                                                sx={{
                                                    fontSize: 'medium',
                                                    fontWeight: 'bold'
                                                }}>
                                                {th}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {reports.map(report => {
                                    const { id, name, email, title, massage } = report;

                                    return (
                                        <TableRow
                                            sx={{
                                                ":hover": {
                                                    backgroundColor: 'rgb(55 65 81 / 0.1)'
                                                }
                                            }}
                                            key={id}>

                                            {/* Id */}
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                align="left">
                                                {id}
                                            </TableCell>

                                            {/* Name */}
                                            <TableCell>
                                                {name}
                                            </TableCell>

                                            {/* Email*/}
                                            <TableCell>
                                                {email}
                                            </TableCell>

                                            {/* Title */}
                                            <TableCell align="left">
                                                {title}
                                            </TableCell>

                                            {/* Massage */}
                                            <TableCell align="left">
                                                {massage}
                                            </TableCell>

                                            {/* Date */}
                                            <TableCell align="left">
                                                {Date().slice(0, 25)}
                                            </TableCell>

                                            {/* Delete Btn */}
                                            <TableCell >
                                                <Tooltip
                                                    arrow
                                                    title="Delete"
                                                    placement="top">
                                                    <IconButton
                                                        onClick={() => deleteBtnHandler(report.id)}
                                                        size='normal'
                                                        color="error" aria-label="upload picture" component="label">
                                                        <Delete fontSize="inherit" />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </Fade>
                </TableContainer>

                {/* Pagination */}
                <Pagination
                    count={totalPageCount}
                    currentPageNum={currentPageNum}
                    handlePagination={handlePagination} />

            </div>
        </section>
    );
};

export default Reports;