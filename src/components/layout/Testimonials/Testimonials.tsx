import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
    const [currTestimonial, setCurrTestimonial] = useState(0)

    const testimonials = [
        {
            id: 0,
            quote: "“Matt functioned as part of the team, helping to crystalise our vision and delivering incredible results in a record time.”",
            from: "Ben Sylvan",
            details: "Coordinator of Digital, City of Port Phillip"
        },
        {
            id: 1,
            quote: "“Matt functioned as part of the team, helping to crystalise our vision and delivering incredible results in a record time.”",
            from: "Kevin Hwang",
            details: "Product Owner, BankVic"
        },
        {
            id: 2,
            quote: "“Matt functioned as part of the team, helping to crystalise our vision and delivering incredible results in a record time.”",
            from: "Edgar Anzaldua",
            details: "Head of Product Design, Sniip"
        },
        {
            id: 3,
            quote: "“Matt functioned as part of the team, helping to crystalise our vision and delivering incredible results in a record time.”",
            from: "Panayioti Koutlakis",
            details: "CEO, EatClub"
        },
        {
            id: 4,
            quote: "“Matt functioned as part of the team, helping to crystalise our vision and delivering incredible results in a record time.”",
            from: "Stephen Clarke",
            details: "Head of Project Management, VERSA Agency"
        },

    ]

    useEffect(() => {
        const timer = setInterval(() => setCurrTestimonial((currTestimonial + 1) % testimonials.length), 5000)
        return () => clearInterval(timer)
    })
    
    const renderCarousel = () => {
        return testimonials.map((pobjTestimonial: any, intIndex) => {
            return (
                <React.Fragment>
                    <a
                        key={`renderCarousel-${intIndex}`}
                        style={{opacity: pobjTestimonial.id === currTestimonial ? "1" : "0.4"}}
                        className={styles["testimonials-icon"]}
                        onClick={() => setCurrTestimonial(pobjTestimonial.id)}
                    >
                        <FontAwesomeIcon icon={faCircle} />
                    </a>
                </React.Fragment>
            )
        })
    }

    const renderTestimonials = () => {        
        return testimonials.map((pobjTestimonial: any, intIndex: number) => {
            if(pobjTestimonial.id === currTestimonial){
                return (
                    <div key={`renderTestimonials-${intIndex}`} className={styles["testimonials-grid"]}>
                        <div className="global-fadein">
                            <div className={styles["testimonials-div"]}>
                                <h2>{pobjTestimonial.quote}</h2>
                                <p className={styles["testimonials-from"]}>{pobjTestimonial.from}<br />{pobjTestimonial.details}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    return (
        <div className="global-wrapper">
            <div className={styles["testimonials-container"]}>
                <h3>Testimonials</h3>
                <div className={styles["testimonials-carousel-container"]}>
                    {renderCarousel()}
                </div>
            </div>
            {renderTestimonials()}
        </div>
    )
}

export default Testimonials;