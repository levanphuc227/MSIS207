import React, { useState, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { auth } from "./firebase";
import Pusher from "pusher-js";

import "./App.css";
import axios from "./axios";
import Post from "./components/Post";
import ImageUpload from "./components/ImageUpload";

const pusher = new Pusher("cd0c8e539d5f0329fa94", {
    cluster: "ap1",
});

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${top}`,
        left: `${left}`,
        transform: `translate(-${top}%,-${left}%)`,
    };
};
const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function App() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUsername(authUser);
                setUser(authUser);
            } else {
                setUser(null);
            }
        });
        return () => {
            unsubcribe();
        };
    }, [user, username]);

    const fetchPosts = async () => {
        await axios.get("/sync").then((res) => setPosts(res.data));
    };

    useEffect(() => {
        const channel = pusher.subscribe("posts");
        channel.bind("inserted", (data) => {
            channel.bind("inserted", (data) => {
                fetchPosts();
            });
        });
    }, []);

    useEffect(() => {
        fetchPosts();
    }, []);

    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) =>
                authUser.user.updateProfile({ displayName: username })
            )
            .catch((error) => alert(error.message));
        setOpen(false);
    };
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch((error) =>
            alert(error.message)
        );
        setOpenSignIn(false);
    };
    return (
        <div className="app">
            <Modal open={open} onClose={() => setOpen(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <form className="app_signup">
                        <center>
                            <img
                                className="app_headerImage"
                                src="logo192.png"
                                alt="header"
                            />
                        </center>
                        <Input
                            placeholder="username"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" onClick={signIn}>
                            Sign In
                        </Button>
                    </form>
                </div>
            </Modal>
            <div className="app_header">
                <img
                    className="app_headerImage"
                    src="logo192.png"
                    alt="Header"
                />
                {user ? (
                    <Button onClick={() => auth.signOut()}>Logout </Button>
                ) : (
                    <div className="app_loginContainer">
                        <Button onClick={() => setOpenSignIn(true)}>
                            signIn
                        </Button>
                        <Button onClick={() => setOpen(true)}>Sign Up</Button>
                    </div>
                )}
            </div>
            <div className="app_posts">
              {posts.map((post) => (
                <Post 
                key={post._id}
                username={post.user}
                caption={post.caption}
                imageUrl={post.image}
                />
                ))}
            </div>
            {user?.displayName ?<ImageUpload username={user.displayName}/>:<h3 className="app_notLogin"> Need to login to upload</h3>}
        </div>
    );
}

export default App;
