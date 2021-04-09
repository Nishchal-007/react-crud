import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [body, setBody] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, body };

        setIsLoading(true);
        fetch("http://localhost:1234/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            setIsLoading(false);
            //console.log(data);
        });
        history.push("/");
    };

    return (
        <div className="createForm">
            <h1>Add a new Blog</h1>
            <div className="actualForm">
                <form onSubmit={handleSubmit}>
                    <label for="title">Title</label>
                    <br />
                    <input
                        type="text"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <label for="body">Body</label>
                    <br />
                    <textarea
                        rows="5"
                        cols="500"
                        required
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <br />
                    <label for="author">Author</label>
                    <br />
                    <input
                        type="text"
                        required
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <br />
                    {!isLoading && <button type="submit">Add</button>}
                    {isLoading && (
                        <button type="submit" disabled>
                            Adding . . . .
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
