import React from 'react';
import './Header.scss';

export const Header = () => {
    return (
        <>
            <div className="header_gradient_first"></div>
            <div className="header">
                <div className="header_logo_container">
                    <div>
                        <img className="logo" src="../logo.svg" alt="logo"/>
                    </div>
                    <div className="header_name">
                        <img className="header_name_item"  src="../logotext1.svg" alt="text1"/>
                        <img className="header_name_item" src="../logotext2.svg" alt="text1"/>
                        <img className="header_name_item" src="../logotext3.svg" alt="text3"/>
                    </div>
                </div>

                <div className="header_list_container">

                    <div className="header_list">
                        <div className="header_line"></div>
                        <div className="header_list_items">
                            <p className="header_list_item">О нас</p>
                            <p className="header_list_item">Участники</p>
                            <p className="header_list_item">Новости</p>
                            <p className="header_list_item">Контакты</p>
                            <p className="header_list_item">Личный кабинет</p>
                        </div>
                    </div>
                    <div className="header_image">
                        <div className="header_square_container"></div>
                        <img src="../image1.png" alt="qwe"/>
                    </div>
                    <p className="lang">Рус ></p>
                    <div className="header_gradient_second"></div>
                </div>
            </div>

        </>

    );
};

