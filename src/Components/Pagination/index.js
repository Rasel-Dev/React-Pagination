/* eslint-disable no-plusplus */
import React from 'react';

const Pagination = ({ total, current, perPage, handler }) => {
    const numberOfPage = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        numberOfPage.push(i);
    }
    return (
        <div className="py-4 flex justify-end">
            <button
                type="button"
                className={
                    current === 1
                        ? 'm-0.5 px-3 py-2'
                        : 'm-0.5 px-3 py-2 rounded-md shadow-md bg-white text-gray-800'
                }
                onClick={() => handler(current !== 1 && current - 1)}
                disabled={current === 1}
            >
                Previous
            </button>
            {numberOfPage.map((page) => (
                <button
                    key={page}
                    type="button"
                    className={
                        page === current
                            ? 'm-0.5 px-3 py-2 rounded-md shadow-md bg-white text-gray-800'
                            : 'm-0.5 px-3 py-2 text-gray-800'
                    }
                    onClick={() => handler(page)}
                >
                    {page}
                </button>
            ))}
            <button
                type="button"
                className={
                    numberOfPage.length === current
                        ? 'm-0.5 px-3 py-2'
                        : 'm-0.5 px-3 py-2 rounded-md shadow-md bg-white text-gray-800'
                }
                onClick={() => handler(numberOfPage.length > current && current + 1)}
                disabled={numberOfPage.length === current}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
