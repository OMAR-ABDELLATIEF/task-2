import React, { useEffect, useState } from "react";
import { posts } from "../data/data";

export default function Posts({ searchVal , cat}) {
    const [filteredPosts, setFilteredPosts] = useState([]);
    useEffect(() => {
        setFilteredPosts(posts); // set initial state posts
    }, []);
    useEffect(() => {
        if (searchVal.length >= 0) {
            const foundPosts = posts.filter((ele) => ele.title.toLowerCase().includes(searchVal.toLowerCase()));
            setFilteredPosts(foundPosts);
            if (cat!= "") {
                const catPost = foundPosts.filter((ele) => ele.type == cat)
                setFilteredPosts(catPost)
            }
        }
    }, [searchVal,cat]);
    return (
        <div className="posts_container">
            {filteredPosts.map((ele) => (
                <div className="post" key={ele.id}>
                    <h2>{ele.title}</h2>
                    <span className={`type ${ele.type == "Blog" ? "blogBadge" : ele.type == "Article" ? "articalBadge" : "postBadge"}`}>{ele.type}</span>
                </div>
            ))}
        </div>
    );
}
