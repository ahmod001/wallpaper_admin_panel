import React from 'react';

const Pagination = () => {
 
    return (
        <div className="sm:tw-px-0 tw-px-4 tw-flex tw-items-center tw-flex-wrap">
            <nav aria-label="Page navigation">
                <ul className="tw-inline-flex tw-space-x-2">

                    {/* Previous */}
                    <li>
                        <button className="me-1 tw-flex tw-items-center tw-justify-center tw-w-9 tw-h-9 tw-text-white tw-rounded-full hover:tw-bg-gray-200/10">
                            <svg className="tw-w-5 tw-h-5 tw-fill-current" viewBox="0 0 20 20">
                                <path clipRule="evenodd" fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"></path>
                            </svg>
                        </button>
                    </li>

                    <li>
                        <button className="tw-w-9 tw-h-9 tw-text-white tw-bg-red-600 tw-rounded-full">1</button>
                    </li>
                    <li>
                        <button className="tw-w-9 tw-h-9 tw-text-whit  tw-border tw-border-gray-700 tw-rounded-full hover:tw-bg-gray-200/10">2</button>
                    </li>

                    {/* Next */}
                    <li>
                        <button className="ms-1 tw-flex tw-items-center tw-justify-center tw-w-9 tw-h-9 tw-text-white tw-rounded-full hover:tw-bg-gray-200/10">
                            <svg className="tw-w-5 tw-h-5 tw-fill-current" viewBox="0 0 20 20">
                                <path clipRule="evenodd" fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default Pagination;