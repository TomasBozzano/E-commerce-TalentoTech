import { useState } from "react";

export const usePagination = (items, itemsPerPage = 6) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const offset = (currentPage - 1) * itemsPerPage;

    const itemsCurrentPage = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return items.slice(startIndex, endIndex);
    }

    const goToPage = () => {
        setCurrentPage(currentPage + 1);
        itemsCurrentPage();
    };

    const backToPage = () => {
        setCurrentPage(currentPage - 1);
        itemsCurrentPage();
    };

    return {
        currentPage,
        totalPages,
        offset,
        itemsCurrentPage,
        goToPage,
        backToPage,
    };
}