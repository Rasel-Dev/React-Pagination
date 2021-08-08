import React from 'react';

const Post = ({ post }) => (
    <div className="m-3 px-3 py-2 rounded-lg shadow-md bg-white">
        <h1 className="text-xl font-bold text-gray-700">{post.title}</h1>
        <i>{post.id}</i>
        <p className="text-gray-500">{post.body}</p>
    </div>
);

export default Post;
