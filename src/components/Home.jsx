import React from "react";
import Menubar from "../components/Menubar";
import "../App.css";

function Home() {
    return (
        <div>
            <Menubar />

            <div className="home-image">
                <img src="/images/bar.png" className="home-img" />

                <div className="character-bar">
                    <img src="/images/character.png" className="character" />
                </div>

                <img src="/images/word.png" className="word" />

            </div>

        </div>
    );
}

export default Home;