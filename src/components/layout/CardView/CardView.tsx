import React, {useEffect, useState} from "react";
import Card from "../Card/Card";
import studies from "../../../studies";
import { arrCapabilities } from "../../../tagging/capabilities";
import { arrIndustries } from "../../../tagging/industries";
import { arrResearchMethods } from "../../../tagging/researchMethods";
import styles from "./CardView.module.css";

function CardView(props: {id: string, filter: string}) {
  const [filter, setFilter] = useState<Array<string>>([])
  const [filterApply, setFilterApply] = useState<Array<string>>([])

  const [showCapability, setShowCapability] = useState(false)
  const [showClient, setShowClient] = useState(false)
  const [showIndustry, setShowIndustry] = useState(false)
  const [showResearchMethod, setShowResearchMethod] = useState(false)

  useEffect(() => { //set pre-filter
    if(props.filter !== ""){
      setFilterApply([props.filter])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnApply = () => {
    setShowCapability(false)
    setShowClient(false)
    setShowIndustry(false)
    setShowResearchMethod(false)
    setFilterApply(filter)
    setFilter([])
  }

  const handleOnChange = (pstrSelectedFilter: string, pEvent: any) => {
    if(pEvent.target.checked){
      setFilter([...filter, pstrSelectedFilter])
    }else{
      setFilter(filter.filter(strExistingFilter => strExistingFilter !== pstrSelectedFilter))
    }
  }

  const handleOnClear = () => {
    setFilter([])
  }

  const handleOnClick = (pstrCategory: string) => {
    switch(pstrCategory){
      case "capability":
        setFilterApply([])
        setShowCapability(!showCapability)
        setShowClient(false)
        setShowIndustry(false)
        setShowResearchMethod(false)
        break;
      case "client":
        setFilterApply([])
        setShowCapability(false)
        setShowClient(!showClient)
        setShowIndustry(false)
        setShowResearchMethod(false)
        break;
      case "industry":
        setFilterApply([])
        setShowCapability(false)
        setShowClient(false)
        setShowIndustry(!showIndustry)
        setShowResearchMethod(false)
        break;
      case "researchMethod":
        setFilterApply([])
        setShowCapability(false)
        setShowClient(false)
        setShowIndustry(false)
        setShowResearchMethod(!showResearchMethod)
        break;
    }
  }

  const render = () => {
    if(showCapability === true){
      return renderMap(arrCapabilities)
    }
    if(showIndustry === true){
      return renderMap(arrIndustries)
    }
    if(showResearchMethod === true){
      return renderMap(arrResearchMethods.filter((pstrMethod) => pstrMethod != "Roadmapping"))
    }
    if(showClient === true){
      const arrStudyClients = studies.map((objStudy) => {
        return objStudy.title;
      });

      return renderMap(arrStudyClients)
    }
  }

  const renderFilterApply = () => {
    if(filterApply.length > 0){
      return (
        <div className={styles["card-view-filter-apply"]}>
            {filterApply.map((strSelectedFilter: string, intIndex: number) => {
              return (
                <div
                  className={styles["card-view-filter-apply-div"]}
                  key={`renderFilterApply-${intIndex}`}
                  onClick={() => setFilterApply(filterApply.filter(strExistingFilter => strExistingFilter !== strSelectedFilter))}
                >
                  <p className={styles["card-view-filter-p"]}>{strSelectedFilter} <span className={styles["card-view-filter-x"]}>✕</span></p>
                </div>
              )
            })}
        </div>
      )
    }
  }

  const renderMap = (parrCategoryFilters: Array<string>) => {
    return (
      <div className={`${styles["card-view-filter"]} global-fadein`}>
        {parrCategoryFilters.map((strFilter: any, intIndex: number) => {
          return (
            <div key={`renderMap-${intIndex}`}>
              <input className={styles["card-view-chkbox"]} type="checkbox" onChange={(e) => handleOnChange(strFilter, e)} checked={filter.includes(strFilter)} id={strFilter} />
              <label className={styles["card-view-label"]} htmlFor={strFilter}>{strFilter}</label>
            </div>
          )
        })}
      </div>
    )
  }

  const renderOptions = () => {
    if(filter.length > 0){
      return (
        <div className="global-fadein" style={{flexDirection: "row", marginLeft: "auto", gap: "30px"}}>
          <h4 style={{marginLeft: "auto"}}><a onClick={handleOnClear}>Clear ✕</a></h4>
          <h4><a onClick={handleOnApply}>Apply ✓</a></h4>
        </div>
      )
    }
  }

  const renderStudies = (pobjStudy: any, pintIndex: number) => {
    if(filterApply.length > 0){
      let arrFilters = [...pobjStudy.capabilites, ...pobjStudy.industries, ...pobjStudy.researchMethods, pobjStudy.title]
      if(arrFilters.some((strFilter: string) => filterApply.includes(strFilter))){
        return <div key={`renderStudies-${pintIndex}`}><Card study={pobjStudy} /></div>
      }
    }else{
      return <div key={`renderStudies-${pintIndex}`}><Card study={pobjStudy} /></div>
    }
  }

  return (
    <div className="global-wrapper" id={props.id}>
        <div className={styles["card-view-filter-by"]}>
          <h4>Filter by</h4>
          <h4>/</h4>
          <h4><a onClick={() => handleOnClick("capability")} style={{opacity: showCapability === true ? 1 : 0.4}}>Capability {showCapability === true ? "↑" : "↓"}</a></h4>
          <h4><a onClick={() => handleOnClick("industry")} style={{opacity: showIndustry === true ? 1 : 0.4}}>Industry {showIndustry === true ? "↑" : "↓"}</a></h4>
          <h4><a onClick={() => handleOnClick("client")} style={{opacity: showClient === true ? 1 : 0.4}}>Client {showClient === true ? "↑" : "↓"}</a></h4>
          <h4><a onClick={() => handleOnClick("researchMethod")} style={{opacity: showResearchMethod === true ? 1 : 0.4}}>Research {showResearchMethod === true ? "↑" : "↓"}</a></h4>
          {renderOptions()}
        </div>
        {render()}
        {renderFilterApply()}
        <div className={styles["card-view"]}>
          {studies.map((pobjStudy: any, pintIndex: number) => {
            return renderStudies(pobjStudy, pintIndex)
          })}
        </div>
    </div>
  );
}

export default CardView;
