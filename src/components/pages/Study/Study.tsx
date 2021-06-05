import React, { useEffect, useState } from 'react'
import Card from '../../global/Card/Card'
import Footer from '../../global/Footer/Footer'
import Home from '../Home/Home'
import Navbar from '../../global/Navbar/Navbar'
import Tagging from './Tagging/Tagging'
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
                return require.context('../../../images/Studies/BankVic', true, /\.png$/)
            case 'Beyond Blue':
                return require.context('../../../images/Studies/BeyondBlue', true, /\.png$/)
            case 'Bupa':
                return require.context('../../../images/Studies/Bupa', true, /\.png$/)
            case 'Children\'s Court':
                return require.context('../../../images/Studies/ChildrensCourt', true, /\.png$/)    
            case 'City of Darebin':
                return require.context('../../../images/Studies/CityofDarebin', true, /\.png$/)
            case 'City of Port Phillip':
                return require.context('../../../images/Studies/CityOfPortPhillip', true, /\.png$/)
            case 'Click Frenzy':
                return require.context('../../../images/Studies/ClickFrenzy', true, /\.png$/)
            case 'EatClub':
                return require.context('../../../images/Studies/EatClub', true, /\.png$/)
            case 'Frank Green':
                return require.context('../../../images/Studies/FrankGreen', true, /\.png$/)
            case 'Homely':
                return require.context('../../../images/Studies/Homely', true, /\.png$/)
            case 'Lumea':
                return require.context('../../../images/Studies/Lumea', true, /\.png$/)
            case 'Maternal & Child Health':
                return require.context('../../../images/Studies/MCH', true, /\.png$/)
            case 'NAB':
                return require.context('../../../images/Studies/NAB', true, /\.png$/)
            case 'OpenCourts':
                return require.context('../../../images/Studies/OpenCourts', true, /\.png$/)
            case 'OVIC':
                return require.context('../../../images/Studies/OVIC', true, /\.png$/)
            case 'Small Business Victoria':
                return require.context('../../../images/Studies/SmallBusinessVictoria', true, /\.png$/)
            case 'Stroke Foundation':
                return require.context('../../../images/Studies/StrokeFoundation', true, /\.png$/)
            case 'SWEAT':
                return require.context('../../../images/Studies/SWEAT', true, /\.png$/)
            //case 'Transgrid':
                //return require.context('../../../images/Studies/Transgrid', true, /\.png$/)
            case 'Victoria Police':
                return require.context('../../../images/Studies/VictoriaPolice', true, /\.png$/)
        }
    }

    const images = getImages(study.title)

    /** */

    const fadeIn = (pobj: any) => {
        $(pobj.target).css('visibility','visible').hide().fadeIn(1000);
    }

    const handleOnClick = (pstrId: string) => {
        $('html,body').animate({
            scrollTop: $(pstrId).offset()?.top}, 'slow');
    }

    const renderContent = (pstrSection: string) => {
        if(study[pstrSection].length !== 0){
            return (
                <div className="global-wrapper" style={{width: "83.33%", marginLeft: "auto", marginRight: "auto"}}>
                    <h3 className={`${styles["study-capitalize"]} global-header`}>{pstrSection}</h3>
                    {study[pstrSection].map((content: string) => {
                        return (
                            <h4 style={{opacity: "0.8"}}>{content}</h4>
                        )
                    })}
                </div>
            )
        }
    }

    const renderImages = () => {
        if(images){
            return images.keys().slice(1).map((image: string) => {
                return (
                    <div className="global-wrapper" style={{padding: '30px 0'}}>
                        <div className={styles["study-img-container"]} style={{background: study.color}}>
                            <img className={styles["study-img"]} loading="lazy" onLoad={fadeIn} src={images(image).default} />
                        </div>
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
            {/*<Links />*/}
        
            <div className={styles["study-container"]} style={{background: study.color, color: "#FFFFFF"}}>
                <div className="global-main-container">
                    <Navbar />
                    <div className="global-container" style={{margin: 'auto'}}>
                        <div className={styles["study-content"]}>
                            <h2>{study.hero}</h2>
                        </div>
                    </div>
                    <div className={styles["study-arrow"]}>
                        <a onClick={() => handleOnClick('#content')}><img src={arrow} /></a>
                    </div>
                </div>
            </div>
            <div id="content" className="global-container">
                <p className="global-title">{study.title}</p>

                <Tagging study={study} />

                <div className="global-wrapper">
                    <div className={styles["study-img-container"]} style={{background: study.color}}>
                        <img className={styles["study-img"]} loading="lazy" onLoad={fadeIn} src={images ? images(images.keys()[0]).default : ''} />
                    </div>
                </div>

                {renderContent("brief")}
                {renderContent("challenge")}
                {renderContent("objective")}
                <div style={{padding: '30px 0'}}>
                    {renderImages()}
                </div>
                {renderContent("results")}
                {renderContent("deliverables")}
                {renderContent("credits")}
                {renderContent("testimonials")}

                <div className="global-wrapper">
                    <div className={styles["study-border"]} />
                    <div className={styles["study-card-view"]}>
                        {reorderStudyCards(studies, studies.findIndex(pstudy => pstudy == study) - 1).filter(pstudy => pstudy !== study).slice(0, limit).map(pstudy => {
                            return <Card study={pstudy} />
                        })}
                    </div>
                </div>

                <div id="divMore" className="global-wrapper" style={{justifyContent: "center", display: "flex", paddingTop: '0'}}>
                    <h3 style={{margin: 0}}><a onClick={renderMore}>Show more</a></h3>
                </div>

                <div id="divLess" className="global-wrapper" style={{justifyContent: "center", display: "flex", paddingTop: '0'}}>
                    <h3 style={{margin: 0}}><a onClick={renderLess}>Show less</a></h3>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Study