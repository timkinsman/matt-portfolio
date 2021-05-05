import React, { useEffect, useState } from 'react'
import Card from '../../layout/Card/Card'
import Footer from '../../layout/Footer/Footer'
import Home from '../Home/Home'
import Links from '../../layout/Links/Links'
import Navbar from '../../layout/Navbar/Navbar'
import studies from '../../../studies'
import arrow from '../../../images/arrow-down.svg'
import $ from 'jquery'
import styles from './Study.module.css'

const Study = (props: any) => { 
    const [limit, setLimit] = useState(2)

    useEffect(() => { //reset
        $("#divMore").show()
        $("#divLess").hide()
        setLimit(2)
    }, [props.location.state])

    if(props.location.state === undefined){
        return <Home />
    }
    
    const study = props.location.state.study

    const getImages = (pstrTitle: string) => {
        switch(pstrTitle){
            case 'BankVic':
                //return require.context('../../../images/Studies/BankVic', true, /\.png$/)
            case 'Beyond Blue':
                //return require.context('../../../images/Studies/BeyondBlue', true, /\.png$/)
            case 'Bupa':
                //return require.context('../../../images/Studies/Bupa', true, /\.png$/)
            case 'City of Darebin':
                //return require.context('../../../images/Studies/CityOfDarebin', true, /\.png$/)
            case 'City of Port Phillip':
                return require.context('../../../images/Studies/CityOfPortPhillip', true, /\.png$/)
            case 'Click Frenzy':
                //return require.context('../../../images/Studies/ClickFrenzy', true, /\.png$/)
            case 'EatClub':
                return require.context('../../../images/Studies/EatClub', true, /\.png$/)
            case 'Frank Green':
                //return require.context('../../../images/Studies/FrankGreen', true, /\.png$/)
            case 'Homely':
                //return require.context('../../../images/Studies/Homely', true, /\.png$/)
            case 'Lumea':
                //return require.context('../../../images/Studies/Lumea', true, /\.png$/)
            case 'MCH':
                //return require.context('../../../images/Studies/MCH', true, /\.png$/)
            case 'OpenCourts':
                //return require.context('../../../images/Studies/OpenCourts', true, /\.png$/)
            case 'OVIC':
                //return require.context('../../../images/Studies/OVIC', true, /\.png$/)
            case 'Small Business Victoria':
                //return require.context('../../../images/Studies/SmallBusinessVictoria', true, /\.png$/)
            case 'Stroke Foundation':
                //return require.context('../../../images/Studies/StrokeFoundation', true, /\.png$/)
            case 'SWEAT':
                return require.context('../../../images/Studies/Sweat', true, /\.png$/)
        }
    }

    const images = getImages(study.title)

    const handleOnClick = (pstrId: string) => {
        $('html,body').animate({
            scrollTop: $(pstrId).offset()?.top}, 'slow');
    }

    const renderArr = (parrstrArray: Array<string>) => {
        return parrstrArray.join(", ")
    }

    const renderContent = (pstrSection: string) => {
        return (
            <div className="global-wrapper" style={{width: "83.33%", marginLeft: "auto", marginRight: "auto", padding: "40px 0"}}>
                <h3 className={styles["study-capitalize"]}>{pstrSection}</h3>
                {study[pstrSection].map((content: string) => {
                    return (
                        <h4 style={{opacity: "0.8"}}>{content}</h4>
                    )
                })}
            </div>
        )
    }

    const renderImages = () => {
        if(images){
            return images.keys().slice(1).map((image: string) => {
                return (
                    <div className="global-wrapper">
                        <img src={images(image).default} className={styles["img-div"]} />
                    </div>
                )
            })
        }
    }

    const renderLess = () => {
        $("#divMore").show()
        $("#divLess").hide()
        setLimit(2)
    }

    const renderMore = () => {
        $("#divMore").hide()
        $("#divLess").show()
        setLimit(studies.length)
    }

    const reorderStudyCards = (parranyStudies: Array<any>, pintIndex: number) => {
        return parranyStudies.slice(pintIndex).concat(parranyStudies.slice(0, pintIndex))
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
                    <div className={styles["study-arrow"]}>
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
                    <img className={styles["img-div"]} src={images ? images(images.keys()[0]).default : ''} />
                </div>

                {renderContent("brief")}
                {renderContent("challenge")}
                {renderContent("objective")}
                {renderImages()}

                <div className="global-wrapper" style={{width: "83.33%", marginLeft: "auto", marginRight: "auto", padding: "40px 0"}}>
                    <h3>Results</h3>
                    <h4 style={{opacity: "0.8"}}>{study.results}</h4>
                </div>

                <div className="global-wrapper" style={{width: "83.33%", marginLeft: "auto", marginRight: "auto", padding: "40px 0"}}>
                <h3>Deliverables</h3>
                    <ul style={{paddingLeft: '20px'}}>
                        {study.deliverables !== undefined && study.deliverables.map((deliverable: string) => {
                            return <li><h4 style={{margin: '5px 0'}}>{deliverable}</h4></li>
                        })}
                    </ul>
                    <h4 style={{opacity: "0.8"}}>{study.information}</h4>
                </div>

                <div className="global-wrapper" style={{width: "83.33%", marginLeft: "auto", marginRight: "auto", padding: "40px 0"}}>
                    <h3>Credits</h3>
                    {study.credits !== undefined && study.credits.map((credit: string) => {
                        return <h4 style={{opacity: "0.8"}}>{credit}</h4>
                    })}
                </div>

                <div className="global-wrapper" style={{width: "83.33%", marginLeft: "auto", marginRight: "auto", padding: "40px 0"}}>
                    <h3>Testimonials</h3>
                </div>

                <div className="global-wrapper">
                    <div className={styles["study-card-view"]}>
                        {reorderStudyCards(studies, studies.findIndex(pstudy => pstudy == study) - 1).filter(pstudy => pstudy !== study).slice(0, limit).map(pstudy => {
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