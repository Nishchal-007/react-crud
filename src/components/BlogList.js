import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, handleDelete }) => {
    return (
        <div className="bloglist">
            {blogs.map((data) => (
                <Link to={`/blog/${data.id}`} key={data.id}>
                    <div className="homeLists">
                        <div className="upper">
                            <h2>{data.title}</h2>
                            <div className="upperLinks">
                                <button onClick={() => handleDelete(data.id)}>
                                    DELETE
                                </button>
                            </div>
                        </div>

                        <p className="homeLists-body">
                            {data.body.slice(0, 31) + ". . . ."}
                        </p>
                        <p className="homeLists-author">~ By {data.author}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogList;
