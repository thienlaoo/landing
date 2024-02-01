import React from 'react';
import "./FromCreator.scss";

export const FromCreator = () => {
    return (
        <>

            <div className="creator_container">
                <p className="creator_founder">( from founder )</p>

                <div className="creator_photo">
                    <img src="../photo.png" alt="img"/>
                </div>

                <div className="creator_text_container">
                    <p className="creator_title">От основателя</p>
                    <p className="creator_text common_margin">Я занимаюсь пересадкой волос более 11 лет и знаю с
                        какими <br/> трудностями могут
                        столкнуться молодые специалисты. </p>
                    <p className="creator_text common_margin">Не выезжая за пределы Украины достаточно сложно
                        узнать <br/> о
                        передовых и современные технологии и методы в области <br/> трансплантации волос.
                    </p>
                    <p className="creator_text spec_margin">Именно поэтому я решил объединить мировой опыт в
                        одном <br/> месте — ИХВВ.</p>
                    <p className="creator_text_small common_margin">Основатель Института</p>
                    <p className="creator_text_name">Доктор Иван Баранов</p>
                </div>
            </div>
            <div className="creator_gradient_container">
                <div className="creator_gradient"></div>
            </div>
        </>

    );
};