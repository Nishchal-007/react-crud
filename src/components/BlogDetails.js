import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = ({ handleDelete }) => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch(
        "http://localhost:1234/blogs/" + id
    );
    return (
        <>
            {error && (
                <h2
                    style={{
                        color: "red",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {error}
                </h2>
            )}
            {isLoading && <h3 style={{ color: "#e5e5e5" }}>Loading . . . .</h3>}
            {blog && (
                <div className="mainBlog">
                    <div className="blogDetails">
                        <div className="upper">
                            <h1>{blog.title}</h1>
                            <div className="upperLinks">
                                <button onClick={() => handleDelete(blog.id)}>
                                    DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                    <p style={{ marginBottom: "25px", fontSize: "18px" }}>
                        {blog.body}
                    </p>
                    <p
                        style={{
                            marginBottom: "25px",
                            fontSize: "22px",
                            color: "#f1c40f",
                        }}
                    >
                        Written By - {blog.author}
                    </p>
                </div>
            )}
        </>
    );
};

export default BlogDetails;
