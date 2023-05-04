import React from 'react';
import Pagination from '../Pagination/Pagination';

export const fakeTable = [
    { id: 0, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },
    { id: 1, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },
    { id: 2, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },
    { id: 3, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },
    { id: 4, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },
    { id: 5, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },
    
]

const WallpaperStatistics = () => {

    return (
        <div className='navyBlue tw-rounded-lg tw-space-y-5 mb-4 sm:tw-p-5 tw-p-4 tw-pb-3'>
            <h2 className='sm:tw-px-0 tw-px-6 sm:tw-text-2xl tw-text-xl tw-font-semibold tw-tracking-wide'>Statistics</h2>

            <div className='tw-whitespace-nowrap tw-w-96 mx-auto sm:tw-w-full tw-overflow-x-scroll md:tw-overflow-x-auto pb-3'>
                <table className='tw-table-auto tw-w-full cursor-pointer '>
                    <thead>
                        <tr>
                            <th className='tw-px-4 tw-py-2'>Id</th>
                            <th className='tw-px-4 tw-py-2'>Title</th>
                            <th className='tw-px-4 tw-py-2'>
                                <i className='bi bi-eye-fill me-1 tw-text-sm' />Views</th>
                            <th className='tw-px-4 tw-py-2'>
                                <i className='bi bi-link-45deg me-1 tw-text-sm' />Shares</th>
                            <th className='tw-px-4 tw-py-2'>
                                <i className='bi bi-heart-fill me-1 tw-text-xs' />Favorites</th>
                            <th className='tw-px-4 tw-py-2'>
                                <i className='bi bi-download me-1 tw-text-sm' />Downloads</th>
                            <th className='tw-px-4 tw-py-2'>
                                <i className='bi bi-check2-square me-1 tw-text-sm' />Used</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fakeTable.map((table, index) => {
                            return (
                                <tr key={index} className='hover:tw-bg-gray-700/10'>

                                    {/* Id */}
                                    <td className='tw-px-4 tw-py-2'>{table.id}</td>

                                    {/* Title */}
                                    <td className='tw-px-4 tw-py-2'>{table.title}</td>

                                    {/* Views */}
                                    <td className='tw-px-4 tw-py-2'>{table.views}</td>

                                    {/* Shares */}
                                    <td className='tw-px-4 tw-py-2'>{table.shares}</td>
                                    
                                    {/* Favorites */}
                                    <td className='tw-px-4 tw-py-2'>{table.favorites}</td>

                                    {/* Downloads */}
                                    <td className='tw-px-4 tw-py-2'>{table.downloads}</td>

                                    {/* Used */}
                                    <td className='tw-px-4 tw-py-2'>{table.used}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <Pagination />
        </div>
    );
};

export default WallpaperStatistics;