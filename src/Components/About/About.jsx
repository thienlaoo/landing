import React from 'react';
import "./About.scss";
export const About = () => {
    return (
        <div className="about_content">
            <p className="about_title">О проекте</p>
            <div className="about_description_container">
                <p className="about_description">Institute Of Hair Restoration Surgery, насчитывающее более 1000 членов <br/> в 70 странах по всему миру, нацелена на достижение превосходных результатов <br/> лечения пациентов путём продвижения высочайших стандартов медицинской <br/> практики, медицинской этики и исследований в области медицинского <br/> восстановления волос. </p>
                <p className="about_description">Международное общество восстановительной хирургии IHRS — это глобальная <br/> некоммерческая медицинская ассоциация и ведущий авторитет в области лечения <br/> и восстановления волос.</p>
            </div>
            <div className="about_text_container">
                <p className="about_text">( about project )</p>
            </div>
        </div>
    );
};