import React, { useContext, useEffect, useState } from 'react';
import ComponentHeader from '../ComponentHeader/ComponentHeader';
import { setLocalStorage } from "../../assets/appStorage/appStorage";
import Pagination from '../Pagination/Pagination';
import { Fade, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../App';

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
    }, 1);

    const navigate = useNavigate()
    setLocalStorage('componentId', 2)

    // All Categories goes here
    const [categories, setCategories] = useState([]);
    setLocalStorage('categories', categories)

    // Get Data
    useEffect(() => {
        setCategories(fakeCategories)
    }, []);

    // Delete Category Btn handler
    const deleteBtnHandler = (id) => {
        setCategories(categories.filter(category => category.id !== id))
    }

    return (
        <section className=' container tw-min-h-screen tw-mt-4 tw-mb-5'>
            <div className='navyBlue container tw-rounded-lg tw-space-y-5 pb-3'>

                {/*Table Header */}
                <ComponentHeader placeholder='Search By Title...' button={true} btnNavigateTo='/categories/add' buttonName='Category' />

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
                                {categories.map((category) => {
                                    return (
                                        <Fade in={true} onDurationChange={1500}>
                                            <tr key={category.id} className='hover:tw-bg-gray-700/10 first-letter'>

                                                {/* Id */}
                                                <td className='tw-px-4 tw-py-2'>{category.id}</td>

                                                {/* Image */}
                                                <td className='tw-px-2 tw-py-2'>
                                                    <img className='tw-h-20 tw-rounded-sm' src={category.img}
                                                        loading='lazy'
                                                        alt={category.name} />
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