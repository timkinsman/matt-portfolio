import React from 'react'
import Footer from '../../layout/Footer/Footer'
import Item from '../../layout/Item/Item'
import Links from '../../layout/Links/Links'
import Navbar from '../../layout/Navbar/Navbar'
import Home from '../Home/Home'

import styles from './Study.module.css'

const Study = (props: any) => {
    if(props.location.state === undefined){
        return <Home />
    }

    const study = props.location.state.study

    const renderArr = (arr: Array<string>) => {
        return arr.join(", ")
    }

    return (
        <div className="global-fadein">
            <Links />
        
            <div className={styles["study-container"]} style={{background: study.color}}>
                <div className={styles["study-div"]}>
                <Navbar />
                    <div style={{padding: '0 257px', height: '100vh', display: 'flex'}}>
                        <div className={styles["study-content"]}>
                            <p className={styles["study-summary"]}>{study.summary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{padding: '0 457px'}}>
                <div className="global-wrapper">
                    <p className="global-title">{study.title}</p>
                </div>

                <div className="global-wrapper">
                    <div className={styles["study-space-between"]}>
                        <Item emoji="" header="Industry" content={renderArr(study.industry)} footer="" />
                        <Item emoji="" header="Capabilites" content={renderArr(study.capabilites)} footer="" />
                        <Item emoji="" header="Research" content={renderArr(study.researchMethods)} footer="" />
                    </div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: study.color}}>
                        <img src={study.img} />
                    </div>
                </div>

                <div className="global-wrapper">
                    <p className="global-header">About</p>
                    <p className="global-content">{study.about}</p>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <p className="global-header">Brief</p>
                    <p className="global-content">{study.brief}</p>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <p className="global-header">Objective</p>
                    <p className="global-content">{study.objective}</p>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <p className="global-header">Results</p>
                    <p className="global-content">{study.results}</p>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <p className="global-header">What I Learnt</p>
                    <p className="global-content">{study.whatilearnt}</p>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                <p className="global-header">Deliverables</p>
                    <ul style={{paddingLeft: '20px'}}>
                        {study.deliverables !== undefined && study.deliverables.map((deliverable: string) => {
                            return <li><p className="global-content" style={{margin: '5px 0'}}>{deliverable}</p></li>
                        })}
                    </ul>
                    <p className="global-content">{study.information}</p>
                </div>

                <div className="global-wrapper">
                    <p className="global-header">Recognition</p>
                    {study.recognitions !== undefined && study.recognitions.map((recognition: string) => {
                        return <p className="global-content">{recognition}</p>
                    })}
                </div>

                <div className="global-wrapper">
                    <p className="global-header">Credits</p>
                    {study.credits !== undefined && study.credits.map((credit: string) => {
                        return <p className="global-content">{credit}</p>
                    })}
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper" style={{paddingTop: '100px', justifyContent: "center", display: "flex"}}>
                    <p className="global-link global-header">Show more projects</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Study