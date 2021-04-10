import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer/Footer'
import Item from '../../layout/Item/Item'
import Links from '../../layout/Links/Links'
import Navbar from '../../layout/Navbar/Navbar'
import Home from '../Home/Home'

import styles from './Study.module.css'

import studies from '../../../studies'
import Card from '../../layout/Card/Card'


import arrow from '../../../images/arrow-down.svg'

import $ from 'jquery'

const Study = (props: any) => {  
    const [limit, setLimit] = useState(2)

    const handleOnClick = (id: string) => {
        $('html,body').animate({
            scrollTop: $(id).offset()?.top}, 'slow');
      }

    useEffect(() => { //reset
        $("#divMore").show()
        $("#divLess").hide()
        setLimit(2)
    }, [props.location.state])

    if(props.location.state === undefined){
        return <Home />
    }

    const study = props.location.state.study

    const renderArr = (arr: Array<string>) => {
        return arr.join(", ")
    }

    const renderContent = (which: string) => {
        return (
            <React.Fragment>
                <div className="global-wrapper">
                    <p className={`${styles["study-capitalize"]} global-header`}>{which}</p>
                    {study[which].map((content: string) => {
                        return (
                            <p className="global-content">{content}</p>
                        )
                    })}
                </div>

                {study[which + "Img"] !== undefined && study[which + "Img"].map((src: string) => {
                    return (
                        <div className="global-wrapper">
                            <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }

    const renderMore = () => {
        $("#divMore").hide()
        $("#divLess").show()
        setLimit(studies.length)
    }

    const renderLess = () => {
        $("#divMore").show()
        $("#divLess").hide()
        setLimit(2)
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
                    <div style={{position: 'relative'}}>
                        <div className={styles["panel-arrow"]}>
                            <p className="global-link" onClick={() => handleOnClick('#content')}><img src={arrow} alt="🡣" /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" style={{padding: '0 457px'}}>
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

                {renderContent("about")}
                {renderContent("brief")}
                {renderContent("background")}
                {renderContent("challenge")}

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

                <div className="global-wrapper">
                    <div className={styles["study-card-view"]}>
                        {studies.slice(0, limit).map(study => {
                            return <Card study={study} />
                        })}
                    </div>
                </div>

                <div id="divMore" className="global-wrapper" style={{justifyContent: "center", display: "flex"}}>
                    <a onClick={renderMore} className="global-link global-header">Show more case studies</a>
                </div>

                <div id="divLess" className="global-wrapper" style={{justifyContent: "center", display: "flex"}}>
                    <a onClick={renderLess} className="global-link global-header">Show Less case studies</a>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Study