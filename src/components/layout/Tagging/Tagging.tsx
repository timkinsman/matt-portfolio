import React from "react";
import { Link } from "react-router-dom";
import styles from "./Tagging.module.css";

const Tagging = (props: any) => {
    const renderArrFilters = (parrstrArray: Array<string>) => {
        if(parrstrArray.length !== 0){
            return parrstrArray.map((pstrTag: string, pintIndex: number) => {
                return (
                    <span>
                        <Link className="global-border-thin" to={{pathname: "/casestudies", hash: `#${pstrTag.replace(/[^a-zA-Z]/g, "").toLowerCase()}`, state: { filter: pstrTag }}}>{pstrTag}</Link>
                        <span style={{opacity: 0.4}}>{pintIndex !== parrstrArray.length - 1 ? ', ' : ''}</span>
                    </span>
                )
            })
        }
    }

    const renderFunction = () => {
        if(props.study.function){
            return (
                <div>
                    <h3>Function</h3>
                    <h4><a className="global-border-thin" href={props.study.function.link}>{props.study.function.text}</a></h4>
                </div>
            )
        }
    }

    const renderLink = () => {
        if(props.study.link){
            return (
                <div>
                    <h3>Link</h3>
                    <h4><a className="global-border-thin" href={props.study.link}>{props.study.link.replace("http://www.", "").replace("https://www.", "")}</a></h4>
                </div>
            )
        }
    }

    const renderOutput = () => {
        if(props.study.output.length !== 0){
            return (
                <div>
                    <h3>Output</h3>
                    <h4>
                        {props.study.output.map((pobjOutput: any, pintIndex: number) => {
                            return (
                                <span>
                                    <a className="global-border-thin" href={pobjOutput.link}>{pobjOutput.text}</a>
                                    <span style={{opacity: 0.4}}>{pintIndex !== props.study.output.length - 1 ? ', ' : ''}</span>
                                </span>
                            )
                        })}
                    </h4>
                </div>
            )
        }
    }

    return (
        <div>
            <div className={styles["tagging-grid"]} style={{paddingBottom: '29.4px'}}>
                {renderLink()}
                {renderFunction()}
                {renderOutput()}
            </div>

            <div className={styles["tagging-grid"]} style={{paddingBottom: '13.4px'}}>
                <div>
                    <h3>Industry</h3>
                    <h4>{renderArrFilters(props.study.industries)}</h4>
                </div>
                <div>
                    <h3>Capabilites</h3>
                    <h4>{renderArrFilters(props.study.capabilites)}</h4>
                </div>
                <div>
                    <h3>Research Methods</h3>
                    <h4>{renderArrFilters(props.study.researchMethods)}</h4>
                </div>
            </div>
        </div>
    )
}

export default Tagging;