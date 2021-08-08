/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';

const Show = ({ perPage, handler }) => (
    <select
        value={perPage}
        onChange={handler}
        className="ml-3 mb-3 px-3 py-2 rounded-md shadow-md bg-white text-gray-800"
    >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
    </select>
);

export default Show;
