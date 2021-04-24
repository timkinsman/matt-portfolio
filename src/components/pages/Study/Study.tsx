import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer/Footer'
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
                    <h3 className={styles["study-capitalize"]}>{which}</h3>
                    {study[which].map((content: string) => {
                        return (
                            <h4 style={{opacity: "0.8"}}>{content}</h4>
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

    const reorder = (data: Array<any>, index: number) => {
        return data.slice(index).concat(data.slice(0, index))
    };

    return (
        <div className="global-fadein">
            <Links />
        
            <div className={styles["study-container"]} style={{background: study.color}}>
                <div className="global-main-container">
                    <Navbar />
                    <div className="global-container" style={{paddingTop: '0', margin: 'auto'}}>
                        <div className={styles["study-content"]}>
                            <h2>{study.summary}</h2>
                        </div>
                    </div>
                    <div className={styles["panel-arrow"]}>
                        <a onClick={() => handleOnClick('#content')}><img src={arrow} /></a>
                    </div>
                </div>
            </div>
            <div id="content" className="global-container" style={{paddingTop: '0'}}>
                <div className="global-wrapper">
                    <p className="global-title">{study.title}</p>
                </div>

                
                <div className={styles["study-space-between"]}>
                    <div>
                        <h3>Industry</h3>
                        <h4 style={{opacity: "0.4"}}>{renderArr(study.industry)}</h4>
                    </div>
                    <div>
                        <h3>Capabilites</h3>
                        <h4 style={{opacity: "0.4"}}>{renderArr(study.capabilites)}</h4>
                    </div>
                    <div>
                        <h3>Research Methods</h3>
                        <h4 style={{opacity: "0.4"}}>{renderArr(study.researchMethods)}</h4>
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
                    <h3>Objective</h3>
                    <h4 style={{opacity: "0.8"}}>{study.objective}</h4>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <h3>Results</h3>
                    <h4 style={{opacity: "0.8"}}>{study.results}</h4>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <h3>What I Learnt</h3>
                    <h4 style={{opacity: "0.8"}}>{study.whatilearnt}</h4>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                <h3>Deliverables</h3>
                    <ul style={{paddingLeft: '20px'}}>
                        {study.deliverables !== undefined && study.deliverables.map((deliverable: string) => {
                            return <li><h4 style={{margin: '5px 0'}}>{deliverable}</h4></li>
                        })}
                    </ul>
                    <h4 style={{opacity: "0.8"}}>{study.information}</h4>
                </div>

                <div className="global-wrapper">
                    <h3>Recognition</h3>
                    {study.recognitions !== undefined && study.recognitions.map((recognition: string) => {
                        return <h4 style={{opacity: "0.8"}}>{recognition}</h4>
                    })}
                </div>

                <div className="global-wrapper">
                    <h3>Credits</h3>
                    {study.credits !== undefined && study.credits.map((credit: string) => {
                        return <h4 style={{opacity: "0.8"}}>{credit}</h4>
                    })}
                </div>

                <div className="global-wrapper">
                    <div className={styles["img-div"]} style={{background: '#151416'}}></div>
                </div>

                <div className="global-wrapper">
                    <div className={styles["study-card-view"]}>
                        {reorder(studies, studies.findIndex(pstudy => pstudy == study) - 1).filter(pstudy => pstudy !== study).slice(0, limit).map(pstudy => {
                            return <Card study={pstudy} />
                        })}
                    </div>
                </div>

                <div id="divMore" className="global-wrapper" style={{justifyContent: "center", display: "flex", paddingTop: '0'}}>
                    <h3><a onClick={renderMore}>Show more</a></h3>
                </div>

                <div id="divLess" className="global-wrapper" style={{justifyContent: "center", display: "flex", paddingTop: '0'}}>
                    <h3><a onClick={renderLess}>Show less</a></h3>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Study