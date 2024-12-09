import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { Demo } from "./Demo";
import Posts from "./components/Posts";
import { posts } from "./data/data";

export default function App() {
    // Hooks =>use
    // let [state, setState] = useState(initailState);   // rerender component
    let [title, setTitle] = useState("The Trips"); // rerender component

    const [searchVal, setSearchVal] = useState("");
    const [cat , setCat] = useState("")
    const uniquePosts = posts.reduce((acc, curr) => {
        const existing = acc.find((post) => post.type === curr.type);
        return existing ? acc : [...acc, curr];
    }, []);
    return (
        <div>
            <input type="text" className="search" placeholder="Search.." onChange={(e) => setSearchVal(e.target.value)} />
            <div className="tabs">
                {uniquePosts.map((ele) => (
                    <span className={`category ${ele.type == cat? "isActive" : "inActive"}`} key={ele.type} onClick={() => {
                        setCat(ele.type)
                    }}>{ele.type}</span>
                ))}
            </div>
            <Posts searchVal={searchVal} cat={cat} />
        </div>
    );
}
