/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Pagination from './Components/Pagination';
import Post from './Components/Posts';
import Show from './Components/Show/index';
import Api from './Services/Api';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    useEffect(() => {
        setPosts(Api.posts());
    }, []);

    const indexOfLastPost = currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const currentPostss = posts.slice(indexOfFirstPost, indexOfLastPost);

    const pagination = (page) => {
        setCurrentPage(page);
    };

    const showPerPage = (e) => {
        setPerPage(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="bg-gray-200">
            <div className="w-1/2 mx-auto">
                <h1 className="text-3xl font-bold text-center py-10">The Blogs</h1>
                <Show perPage={perPage} handler={showPerPage} />
                {currentPostss.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
                <Pagination
                    total={posts.length}
                    current={currentPage}
                    perPage={perPage}
                    handler={pagination}
                />
                <div className="p-10" />
            </div>
        </div>
    );
};

export default App;
