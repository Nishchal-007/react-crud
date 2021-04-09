import React from "react";

const BlogList = ({ blogs, handleDelete }) => {
    return (
        <div className="bloglist">
            {blogs.map((data) => (
                <div className="homeLists" key={data.id}>
                    <div className="upper">
                        <h2>{data.title}</h2>
                        <div className="upperLinks">
                            <button onClick={() => handleDelete(data.id)}>
                                DELETE
                            </button>
                        </div>
                    </div>

                    <p className="homeLists-body">{data.body}</p>
                    <p className="homeLists-author">~ By {data.author}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
