import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { error, isLoading, data: lt } = useFetch(
        "http://localhost:1234/blogs"
    );

    return (
        <div>
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
            {lt && (
                <>
                    <h1 style={{ marginBottom: "35px" }}>Blogs</h1>
                    <BlogList blogs={lt} />
                </>
            )}
        </div>
    );
};

export default Home;

// const handleDelete = (id) => {
//     setLt(lt.filter((data) => data.id !== id));
//     //setLt(newBlogs);
// };
//useEffect(() => {
//     setTimeout(() => {
//         fetch("http://localhost:1234/blogs")
//             .then((res) => {
//                 if (!res.ok) {
//                     throw Error("Oops, Could not fetch data !!");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 // console.log(data);
//                 setLt(data);
//                 setisLoading(false);
//             })
//             .catch((err) => {
//                 setisLoading(false);
//                 setError(err.message);
//             });
//     }, 1100);
// }, []);
