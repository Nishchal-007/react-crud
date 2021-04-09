import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [lt, setLt] = useState([
        {
            id: 1,
            title: "Hello World",
            body: "lorem ipsum . . . .",
            author: "lol",
        },
        {
            id: 2,
            title: "React Blog",
            body: "lorem ipsum . . . .",
            author: "king",
        },
        {
            id: 3,
            title: "New Blog",
            body: "lorem ipsum . . . .",
            author: "XD",
        },
    ]);

    const handleDelete = (id) => {
        const newBlogs = lt.filter((data) => data.id !== id);
        setLt(newBlogs);
    };

    return (
        <div>
            <h1>Blogs</h1>
            <BlogList blogs={lt} handleDelete={handleDelete} />
        </div>
    );
};

export default Home;
