import React from "react";
import Menubar from "../components/Menubar";
import "../App.css";

function Home() {
    return (
        <div>
            <Menubar />

            <div className="home-image">
                <img src="/images/bar.png" className="home-img" />

                <div className="memo-bar">
                    <div className="memo1-container">
                        <img src="/images/record.png" className="record-img" />
                        <h1 className="memo1">난 ズl금 음악øłl ㅁı쳐있⊂ト..</h1>
                    </div>
                    <h1 className="memo2">왜レF㈛면... 음악○l 좋ブl ㄸĦ문○l⊂ト...</h1>
                </div>

                <div className="character-bar">
                    <img src="/images/character.png" className="character" />
                </div>

                <img src="/images/word.png" className="word" />

            </div>

        </div>
    );
}

export default Home;