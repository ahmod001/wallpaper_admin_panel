import { Pagination as MUIPagination } from "@mui/material";
import { useState } from "react";

const Pagination = ({ count, currentPageNum, handlePagination }) => {

    return (
        <MUIPagination
            onChange={handlePagination}
            page={currentPageNum}
            disabled={count < 2}
            color='error'
            count={count}
            hidePrevButton={currentPageNum < 2}
            hideNextButton={currentPageNum >= count} />
    );
};

export default Pagination;