import React from 'react';

const WallpapersSkeleton = () => {

    return (
        <div className='tw-grid xl:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-grid-cols-1 tw-gap-5'>

            {[...Array(8)].map((arr, index) => {
                return <WallpaperCardSkeleton key={index} />
            })}

        </div>
    );
};

const WallpaperCardSkeleton = () => {
    return (
        <div style={{ backgroundColor: '#252e44' }} className='tw-pb-4 tw-space-y-4 tw-mx-auto placeholder-glow tw-min-h-96 tw-rounded-md tw-overflow-hidden sm:tw-w-full tw-w-9/12'>
            <div className='placeholder bg-secondary tw-h-60 tw-w-full' />

            <div className='tw-px-3 placeholder-wave tw-space-y-4'>
                <div className=' placeholder bg-secondary tw-h-6 lg:tw-w-48 md:tw-w-44 tw-w-48 tw-rounded-sm' />

                <div className='placeholder-wave tw-flex tw-flex-col tw-space-y-2'>
                    <div className='placeholder bg-secondary placeholder-xs tw-w-28 tw-rounded-sm' />
                    <div className='placeholder bg-secondary placeholder-xs tw-w-24 tw-rounded-sm' />
                    <div className='placeholder bg-secondary placeholder-xs tw-w-28 tw-rounded-sm' />
                    <div className='placeholder bg-secondary placeholder-xs tw-w-24 tw-rounded-sm' />
                </div>
            </div>

            <div className='placeholder-wave tw-justify-between tw-px-3 tw-flex'>
                <div className='placeholder bg-secondary tw-my-auto tw-h-5 tw-w-14 tw-rounded-lg' />
                <div className='placeholder bg-secondary tw-h-6 tw-w-20 tw-rounded-sm' />
            </div>
        </div>
    )
}
export default WallpapersSkeleton;