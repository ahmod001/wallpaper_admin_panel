import { setLocalStorage } from "../../assets/appStorage/appStorage";
import { useNavigate } from "react-router-dom";
import WallpaperStatistics from "../WallpaperStatistics/WallpaperStatistics";
import { useContext } from "react";
import { AdminContext } from "../../App";
import { Grow } from "@mui/material";


const Dashboard = () => {
    const navigate = useNavigate();
    const { CurrentPage } = useContext(AdminContext)
    const [currentPage, setCurrentPage] = CurrentPage;
    setTimeout(() => {
        setCurrentPage('Dashboard')
    }, 1);

    setLocalStorage('componentId', 0)

    // Dashboard Cards array
    const dashboardCards = [
        { id: 0, name: 'Wallpapers', color: 'tw-text-green-500', redirectLink: '/wallpapers', length: 550 },
        { id: 1, name: 'Categories', color: 'tw-text-pink-500 ', redirectLink: '/categories', length: 10 },
        { id: 2, name: 'Users', color: 'text-info', redirectLink: '/users', length: 189 },
        { id: 3, name: 'Downloads', color: 'tw-text-yellow-500', redirectLink: '', length: 101112 },
        { id: 4, name: 'Reports', color: 'tw-text-red-600', redirectLink: '/reports', length: 0 },
    ]

    // This function will formate Dashboard card number-counts
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }


    return (
        <section className='container tw-px-4 tw-space-y-7'>

            {/* Dashboard Cards */}
            <div className='mt-4 tw-grid md:tw-grid-cols-3 tw-grid-cols-2 sm:tw-gap-5 tw-gap-4'>
                {dashboardCards.map(card => {
                    return (
                        <Grow in={true} onDurationChange={1500}>
                            <div onClick={() => navigate(card.redirectLink)}
                                className='tw-text-center navyBlue tw-cursor-pointer tw-rounded-lg hover:tw-bg-gray-800 tw-flex sm:tw-h-32 tw-h-28 tw-col tw-font-semibold' key={card.id}>
                                <div className='m-auto tw-space-y-2'>
                                    <h3 className={` ${card.color} tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-tracking-wide`}>{formatNumber(card.length)}
                                    </h3>
                                    <p className='md:tw-text-lg'>{card.name}</p>
                                </div>
                            </div>
                        </Grow>)
                })}

                {/* Settings */}
                <Grow in={true} onDurationChange={1500}>
                    <div onClick={() => navigate('/settings')}
                        className='tw-text-center navyBlue tw-cursor-pointer tw-rounded-lg hover:tw-bg-gray-800 tw-flex sm:tw-h-32 tw-h-28 tw-col tw-font-semibold'>
                        <div className='m-auto tw-space-y-2'>
                            <h3 className='tw-text-3xl md:tw-text-4xl tw-font-semibold tw-text-gray-300'>
                                <i className="bi bi-gear" />
                            </h3>
                            <p className='md:tw-text-lg'>Settings</p>
                        </div>
                    </div>
                </Grow>
            </div>

            {/* Top wallpaper statics */}
            <WallpaperStatistics />
        </section>
    );
};

export default Dashboard;