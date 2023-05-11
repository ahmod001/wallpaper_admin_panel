import React, { useContext, useEffect, useState } from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import Pagination from '../Pagination/Pagination';
import { getLocalStorage, setLocalStorage } from '../../assets/appStorage/appStorage';
import { Button, Fade, Tooltip } from '@mui/material';
import { AdminContext } from '../../App';
import SnackBar from '../SnackBar/SnackBar';
import PopUpDialog from '../PopUpDialog/PopUpDialog';

// _Fake_Data_
let fakeUsers = [
    { id: 0, name: 'Alex Costa', email: 'example@gmail.com', phone: '+0880127836521', status: true },
    { id: 1, name: 'Alex Costa', email: 'example@gmail.com', phone: '+0880127836521', status: true },
    { id: 2, name: 'Alex Costa', email: 'example@gmail.com', phone: '+0880127836521', status: true },
    { id: 3, name: 'Alex Costa', email: 'example@gmail.com', phone: '+0880127836521', status: true },
    { id: 4, name: 'Alex Costa', email: 'example@gmail.com', phone: '+0880127836521', status: true },
    { id: 5, name: 'Alex Costa', email: 'example@gmail.com', phone: '+0880127836521', status: true }
]

const Users = () => {

    // User data will stored here
    const [users, setUsers] = useState([])

    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;

    setTimeout(() => {
        setCurrentPage('Users')
    }, 1);
    setLocalStorage('componentId', 3)

    // This States for Pagination
    const defaultPage = getLocalStorage('defaultUserPage');
    const [currentPageNum, setCurrentPageNum] = useState(defaultPage || 1);
    const [totalPageCount, setTotalPageCount] = useState(5);

    // Pagination Handler
    const handlePagination = (event, value) => {
        setLocalStorage('defaultUserPage', value)
        setCurrentPageNum(value)
    }

    useEffect(() => {
        setUsers(fakeUsers)
    }, [])

    // Block User //
    const [isBlockBtnClicked, setIsBlockBtnClicked] = useState(false);
    const [targetedUserId, setTargetedUserId] = useState(null);
    const [isBlockedSuccessfully, setIsBlockedSuccessfully] = useState(false);
    const [isUnBlockedSuccessfully, setIsUnBlockedSuccessfully] = useState(false);

    // Block Btn Handler
    const blockBtnHandler = (userId) => {
        setTargetedUserId(userId)
        setIsBlockBtnClicked(!isBlockBtnClicked)
    }

    // Confirm Block Button Handler
    const confirmBlock = () => {
        setIsBlockBtnClicked(!isBlockBtnClicked)
        setIsBlockedSuccessfully(!isBlockedSuccessfully)
        fakeUsers.find(user => user.id === targetedUserId).status = false
    }

    // UnBlock User btn Handler
    const unBlockBtnHandler = (userId) => {
        fakeUsers.find(user => user.id === userId).status = true
        setIsUnBlockedSuccessfully(!isUnBlockedSuccessfully)
    }

    return (
        <section className='container tw-mt-4 tw-mb-7'>
            {/*  Dialog for Block confirmation */}
            <PopUpDialog
                isActionBtnClicked={isBlockBtnClicked}
                setIsActionBtnClicked={setIsBlockBtnClicked}
                confirmAction={confirmBlock} />

            {/* Successfully Blocked Pop_up */}
            <SnackBar
                message={'Blocked Successfully'}
                isActionSuccessful={isBlockedSuccessfully}
                setIsActionSuccessful={setIsBlockedSuccessfully} />

            {/* Successfully Un_Blocked Pop_up */}
            <SnackBar
                message={'Unblocked Successfully'}
                isActionSuccessful={isUnBlockedSuccessfully}
                setIsActionSuccessful={setIsUnBlockedSuccessfully} />

            {/* Main Content */}
            <div className='navyBlue container tw-rounded-lg tw-space-y-5 pb-3'>

                {/*Table Header */}
                <ComponentHeader placeholder='Search By Name...' />

                {/* Table */}
                <div className='tw-bg-gray-800/50 tw-rounded-md'>
                    <div className='sm:tw-w-full tw-w-96 tw-mx-auto tw-overflow-x-scroll navyBlue md:tw-overflow-x-auto pb-3 tw-whitespace-nowrap md:tw-whitespace-normal'>

                        <table className='tw-w-full tw-table-auto cursor-pointer'>
                            <thead>
                                <tr>
                                    {['Id', 'Name', 'Email', 'Phone', 'Status', 'Action'].map((th, i) => {
                                        return <th className='tw-px-4 tw-py-2' key={i}>{th}</th>
                                    })}
                                </tr>
                            </thead>

                            <tbody>
                                {users.map(user => {
                                    return (
                                        <Fade key={user.id} in={true} onDurationChange={() => 1500}>
                                            <tr className='hover:tw-bg-gray-700/10 first-letter'>

                                                {/* Id */}
                                                <td className='tw-px-4 tw-py-2'>{user.id}</td>

                                                {/* Name */}
                                                <td className='tw-px-4 tw-py-2'>
                                                    {user.name}
                                                </td>

                                                {/* Email */}
                                                <td className='tw-px-4 tw-py-2'>
                                                    {user.email}
                                                </td>

                                                {/* phone */}
                                                <td className='tw-px-4 tw-py-2'>
                                                    {user.phone}
                                                </td>

                                                {/* Status */}
                                                <td className='tw-px-4 tw-py-2 tw-font-semibold'>
                                                    {user.status ?
                                                        <h3 className='tw-text-green-500 '>
                                                            Active</h3>

                                                        : <h3 className='tw-text-red-500 '>Inactive</h3>}
                                                </td>

                                                {/* Action Buttons here */}
                                                <td className='tw-px-4 tw-py-2'>
                                                    {
                                                        // block-User Button
                                                        user.status ?
                                                            <Tooltip
                                                                arrow
                                                                name="Block User"
                                                                placement="top">
                                                                <Button
                                                                    size='small'
                                                                    onClick={
                                                                        () => blockBtnHandler(user.id)
                                                                    }
                                                                    variant='text'
                                                                    color='error'>
                                                                    Block
                                                                </Button>
                                                            </Tooltip>

                                                            // Unblock User
                                                            : <Tooltip
                                                                arrow
                                                                name="Unblock User"
                                                                placement="top">
                                                                <Button
                                                                    size='small'
                                                                    onClick={() => unBlockBtnHandler(user.id)}
                                                                    variant='text'
                                                                    color='success'>
                                                                    Unblock
                                                                </Button>
                                                            </Tooltip>}
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
                    <Pagination
                    count={totalPageCount}
                    currentPageNum={currentPageNum}
                    handlePagination={handlePagination} />
            </div>
        </section>
    );
};

export default Users;