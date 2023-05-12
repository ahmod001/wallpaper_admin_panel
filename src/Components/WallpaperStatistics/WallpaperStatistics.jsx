import React, { useState } from 'react';
import { Fade, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Pagination from '../Pagination/Pagination';
import { getLocalStorage, setLocalStorage } from '../../assets/appStorage/appStorage';
import { TrendingUpRounded } from '@mui/icons-material';

export const fakeTable = [
    { id: 0, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },
    { id: 1, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },
    { id: 2, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },
    { id: 3, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },
    { id: 4, title: '4k Full HD Tiger', views: 6000, shares: 299, favorites: 111, downloads: 5000, used: 4890 },

]

const WallpaperStatistics = () => {
    const defaultPage = getLocalStorage('defaultStaticsPage');
    const [currentPageNum, setCurrentPageNum] = useState(defaultPage || 1);
    const [totalPageCount, setTotalPageCount] = useState(3);

    // Pagination Handler
    const handlePagination = (event, value) => {
        setCurrentPageNum(value)
        setLocalStorage('defaultStaticsPage', value)
    }

    return (
        <div className='navyBlue tw-rounded-lg tw-space-y-5 mb-4 sm:tw-p-5 tw-p-4 tw-pb-3'>
            <h2 className='tw-text-2xl tw-font-semibold tw-tracking-wide '>
                Statistics {<TrendingUpRounded />}
            </h2>

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
                                {['Id', 'Title', 'Views', 'Shares', 'Favorites', 'Downloads'].map((th, i) => {
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
                            {fakeTable.map(wallpaper => {
                                const { id, title, views, shares, downloads, favorites } = wallpaper;

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

                                        {/* Title */}
                                        <TableCell>
                                            {title}
                                        </TableCell>

                                        {/* Views */}
                                        <TableCell>
                                            {views}
                                        </TableCell>

                                        {/* Shares */}
                                        <TableCell align="left">
                                            {shares}
                                        </TableCell>

                                        {/* Favorite */}
                                        <TableCell align="left">
                                            {favorites}
                                        </TableCell>

                                        {/* Downloads */}
                                        <TableCell align="left">
                                            {downloads}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Fade>
            </TableContainer>

            <Pagination
                count={totalPageCount}
                currentPageNum={currentPageNum}
                handlePagination={handlePagination} />
        </div>
    );
};

export default WallpaperStatistics;