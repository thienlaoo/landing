import React from 'react';
import './MainContent.scss';

export const MainContent = () => {
    return (
        <>
            <div className="mainContent_line"></div>
            <div className="mainContent_title">
                <p>5th Ukraine<br/>Practical Workshop</p>
            </div>
            <div className="mainContent_container">

                <div className="mainContent_buttons">
                    <div className="mainContent_media">
                        <img src="../media.png" alt="qwe"/>
                    </div>
                    <button className="mainContent_button">
                        принять участие
                        <img src="../arrow.svg" alt="arr"/>
                    </button>
                </div>
                <p className="mainContent_text">
                    Единственный в своём роде практический <br/> воркшоп по трансплантации волос <br/> в Украине
                </p>
            </div>
            <p className="mainContent_additional_text">2-4</p>
        </>
    );
};
