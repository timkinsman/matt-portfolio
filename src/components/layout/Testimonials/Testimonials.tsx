import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './Testimonials.module.css'

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

    const renderTestimonials = () => {        
        return testimonials.map((testimonial: any, i) => {
            if(testimonial.id === currTestimonial){
                return (
                    <div key={`renderTestimonials-${i}`} className={styles["testimonials-grid"]}>
                        <div className="global-fadein">
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                                <h2>{testimonial.quote}</h2>
                                <p style={{opacity: "0.8"}}>{testimonial.from}<br />{testimonial.details}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    const renderCarousel = () => {
        return testimonials.map((testimonial: any, i) => {
            return (
                <React.Fragment>
                    <a
                        key={`renderCarousel-${i}`}
                        style={{opacity: testimonial.id === currTestimonial ? "1" : "0.4"}}
                        className={styles.icon}
                        onClick={() => setCurrTestimonial(testimonial.id)}
                    >
                        <FontAwesomeIcon icon={faCircle} />
                    </a>
                </React.Fragment>
            )
        })
    }

    return (
        <div className="global-wrapper">
            <div className={styles["testimonials-container"]}>
                <h3>Testimonials</h3>
                <div style={{marginLeft: 'auto'}}>
                    {renderCarousel()}
                </div>
            </div>
            {renderTestimonials()}
        </div>
    )
}

export default Testimonials