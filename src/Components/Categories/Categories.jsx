import React, { useContext, useEffect, useState } from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import { setLocalStorage } from "../../assets/appStorage/appStorage";
import { Fade, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../App';
import PopUpDialog from "../PopUpDialog/PopUpDialog";
import SnackBar from '../SnackBar/SnackBar';

const fakeCategories = [
    {
        id: 0,
        name: 'Category',
        img: "https://media.istockphoto.com/id/485150094/photo/happy-family-standing-on-the-beach.jpg?s=170667a&w=0&k=20&c=YlW-E-oWom6FV4JSZzLInCqc625CyMI7X9JivwjJzBQ=",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente.Magnam, sapienteMagnam, sa'
    },
    {
        id: 1,
        name: 'Category',
        img: "https://media.istockphoto.com/id/485150094/photo/happy-family-standing-on-the-beach.jpg?s=170667a&w=0&k=20&c=YlW-E-oWom6FV4JSZzLInCqc625CyMI7X9JivwjJzBQ=",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente.Magnam, sapienteMagnam, sa'
    },
    {
        id: 2,
        name: 'Category',
        img: "https://media.istockphoto.com/id/485150094/photo/happy-family-standing-on-the-beach.jpg?s=170667a&w=0&k=20&c=YlW-E-oWom6FV4JSZzLInCqc625CyMI7X9JivwjJzBQ=",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente.Magnam, sapienteMagnam, sa'
    },
    {
        id: 3,
        name: 'Category',
        img: "https://media.istockphoto.com/id/485150094/photo/happy-family-standing-on-the-beach.jpg?s=170667a&w=0&k=20&c=YlW-E-oWom6FV4JSZzLInCqc625CyMI7X9JivwjJzBQ=",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente.Magnam, sapienteMagnam, sa',
    }, {
        id: 4,
        name: 'Category',
        img: "https://media.istockphoto.com/id/485150094/photo/happy-family-standing-on-the-beach.jpg?s=170667a&w=0&k=20&c=YlW-E-oWom6FV4JSZzLInCqc625CyMI7X9JivwjJzBQ=",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sapiente.Magnam, sapienteMagnam, sa',
    }
]

const Categories = () => {
    // Using Context API
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;

    setTimeout(() => {
        setCurrentPage('Categories')
    }, 1)

    const navigate = useNavigate()
    setLocalStorage('componentId', 2)

    // All Categories goes here
    const [categories, setCategories] = useState([]);
    setLocalStorage('categories', categories)

    // Get Data
    useEffect(() => {
        setCategories(fakeCategories)
    }, []);

    // Delete Category //
    const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);
    const [targetedCategoryId, setTargetedCategoryId] = useState(null);
    const [isDeletedSuccessfully, setIsDeletedSuccessfully] = useState(false);

    // Delete Btn Handler
    const deleteBtnHandler = (id) => {
        setTargetedCategoryId(id)
        setIsDeleteBtnClicked(!isDeleteBtnClicked)
    }

    // Confirm Delete Button Handler
    const confirmDelete = () => {
        setIsDeleteBtnClicked(!isDeleteBtnClicked)
        setIsDeletedSuccessfully(!isDeletedSuccessfully)
        setCategories(categories.filter(category => category.id !== targetedCategoryId))
    }

    return (
        <section className='container tw-min-h-screen tw-mt-4 tw-mb-5'>

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
                    placeholder='Search By Title...'
                    button={true}
                    btnNavigateTo='/categories/add'
                    buttonName='Category' />

                {/* Table */}
                <div className='tw-bg-gray-800/50 tw-rounded-md'>
                    <div className='sm:tw-w-full tw-w-96 tw-mx-auto tw-overflow-x-scroll navyBlue md:tw-overflow-x-auto pb-3 tw-whitespace-nowrap md:tw-whitespace-normal'>

                        <table className='tw-w-full tw-table-auto cursor-pointer'>
                            <thead>
                                <tr>
                                    {['Id', 'Image', 'Name', 'Description', 'Action'].map((th, i) => {
                                        return <th key={i} className='tw-px-4 tw-py-2'>{th}</th>
                                    })}
                                </tr>
                            </thead>

                            <tbody>
                                {categories.map(category => {
                                    return (
                                        <Fade key={category.id}
                                            in={true}
                                            onDurationChange={() => 1500}>
                                            <tr className='hover:tw-bg-gray-700/10 first-letter'>

                                                {/* Id */}
                                                <td className='tw-px-4 tw-py-2'>{category.id}</td>

                                                {/* Image */}
                                                <td className='tw-px-2 tw-py-2'>
                                                    <Fade

                                                        in={true}
                                                        onDurationChange={() => 1000}>
                                                        <img className='tw-h-20 tw-rounded-sm' src={category.img}
                                                            loading='lazy'
                                                            alt={category.name} />
                                                    </Fade>
                                                </td>

                                                {/* Category-Name */}
                                                <td className='tw-px-4 tw-py-2'>
                                                    {category.name}</td>

                                                {/* DESCRIPTION' [limit: 100 character] */}
                                                <td className='tw-px-4 text-justify tw-py-2'>
                                                    {category.description}
                                                </td>

                                                {/* Action Buttons goes here */}
                                                <td className='tw-px-2'>
                                                    <div className='tw-grid tw-grid-cols-2 tw-gap-x-1'>

                                                        {/* Edit */}
                                                        <Tooltip arrow placement='top' title='Edit'>
                                                            <IconButton
                                                                onClick={() => {
                                                                    navigate(`/categories/edit/${category.id}`)
                                                                }}

                                                                className='col' aria-label="edit">
                                                                <Edit fontSize='inherit' />
                                                            </IconButton>
                                                        </Tooltip>

                                                        {/*Delete*/}
                                                        <Tooltip arrow placement='top' title='Delete'>
                                                            <IconButton
                                                                onClick={() => deleteBtnHandler(category.id)} color='error' className='col' aria-label="delete">
                                                                <Delete fontSize='inherit' />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </div>
                                                </td>
                                            </tr>
                                        </Fade>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;