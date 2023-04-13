import { useEffect, useRef, useState } from "react";

function Header(props) {

    let titleRef = useRef("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let usernameRef = useRef("");
    let passwordRef = useRef("");

    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState("Initial Title");
    const [data, setData] = useState({
        "img": "images",
        "title": "title",
        "description": "something goes here.."
    });

    useEffect(() => {
        // titleRef.current = title;
        console.log(title);
    });

    // useEffect(() => {
    //     console.log("useEffect for Counter");
    // }, [counter]);

    // useEffect(() => {
    //     console.log("useEffect for both title and counter");
    //     fetch('http://localhost:4000')
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log(res);
    //             // if(title !== res)
    //                 setTitle(res);
    //         });
    // },[title, counter]);

    

    const changeTitle = () => {
        // setTitle("Hello World!");
        setData((prevValues) => ({...prevValues, "description": "updated description"}));
        setCounter(counter => counter +1);
        console.log(titleRef.current.value);
    }
    
    const handleFormClick = () => { // STATE (MOST PREFERRED ACTION)
        console.log("handleFormClick");
        console.log(username, password, "State CLICKED METHOD");
        let data = { "username": username, "password": password }
        console.log(data);
    }

    const handleFormClickRef = () => { // useRef (NEXT PREFERRED ACTION)
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        let data = { "username": username, "password": password }
        console.log(data);
    }

    const handleFormSubmit = (e) => { // FORM SUBMISSION (LEAST PREFERRED ACTION)
        e.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let data = { "username": username, "password": password }
        console.log(data);
    }

    

    console.log("render");

    return (
        <>
            <h1>Header Container</h1>
            {/* <p>Name is: {props.name}</p> */}
            <p>Title is: {title}</p>
            <p>Old Title was: {titleRef.current.value}</p>
            {/* <p>Counter is: {counter}</p> */}
            {/* <p>
                Data: {data.img}, {data.title}, {data.description}
            </p> */}
            {/* <input type="text" ref={titleRef}  />
            <p><button onClick={changeTitle}>Change Title</button></p> */}

            <div>
                <input type="text" placeholder="Username:" onChange={(e) => setUsername(e.target.value)} /><br />
                <input type="text" placeholder="Password:" onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="button" onClick={handleFormClick}>Submit</button>
            </div>

            <br />

            <div>
                <input type="text" ref={usernameRef} placeholder="Username:" /><br />
                <input type="text" ref={passwordRef} placeholder="Password:" /><br />
                <button type="button" onClick={handleFormClickRef}>Submit</button>
            </div>

            <br />

            <div>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" id="username" placeholder="Username:" /><br />
                    <input type="text" id="password" placeholder="Password:" /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Header;