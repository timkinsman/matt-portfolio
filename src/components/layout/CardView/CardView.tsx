import React, {useState} from 'react';
import Card from '../Card/Card';

import styles from './CardView.module.css'

import {
  Animation___Motion_Graphics,
  Art_Direction,
  Branding___Identity,
  Marketing,
  Packaging,
  Photography,
  Print___Publishing,
  Promotional,
  Strategy,
  UI___UX,
  Wayfinding___Signage
} from '../../../tagging/capabilities'

import {
  Arts_Culture,
  Banking___Finance,
  Education,
  Entertainment,
  Fashion___Beauty,
  Food___Beverage,
  Government,
  Health,
  Hospitality___Leisure,
  Legal,
  Manufacturing,
  NGO___Not_for_profit,
  Publishing,
  Real_Estate,
  Retail,
  Sports___Fitness,
  Technology,
  Transport,
  Travel___Tourism
} from '../../../tagging/industry'

import study from '../../../studies'

function CardView(props: {id: string}) {
  const [filter, setFilter] = useState<Array<string>>([])
  const [filterApply, setFilterApply] = useState<Array<string>>([])

  const [showCapability, setShowCapability] = useState(false)
  const [showClient, setShowClient] = useState(false)
  const [showIndustry, setShowIndustry] = useState(false)

  const arrCap = [
    Animation___Motion_Graphics,
    Art_Direction,
    Branding___Identity,
    Marketing,
    Packaging,
    Photography,
    Print___Publishing,
    Promotional,
    Strategy,
    UI___UX,
    Wayfinding___Signage
  ]

  const arrInd = [
    Arts_Culture,
    Banking___Finance,
    Education,
    Entertainment,
    Fashion___Beauty,
    Food___Beverage,
    Government,
    Health,
    Hospitality___Leisure,
    Legal,
    Manufacturing,
    NGO___Not_for_profit,
    Publishing,
    Real_Estate,
    Retail,
    Sports___Fitness,
    Technology,
    Transport,
    Travel___Tourism
]

  const handleOnClick = (str: string) => {
    switch(str){
      case "capability":
        setFilterApply([])
        setShowCapability(!showCapability)
        setShowClient(false)
        setShowIndustry(false)
        break;
      case "client":
        setFilterApply([])
        setShowCapability(false)
        setShowClient(!showClient)
        setShowIndustry(false)
        break;
      case "industry":
        setFilterApply([])
        setShowCapability(false)
        setShowClient(false)
        setShowIndustry(!showIndustry)
        break;
    }
  }

  const render = () => {
    if(showCapability === true){
      return renderMap(arrCap)
    }
    if(showIndustry === true){
      return renderMap(arrInd)
    }
    if(showClient === true){
      const finalArray = study.map((obj) => {
        return obj.title;
      });

      return renderMap(finalArray)
    }
  }

  const renderMap = (arr: Array<string>) => {
    return (
      <div className={`${styles["card-view-filter"]} global-fadein`}>
        {arr.map((str: any) => {
          return (
            <div>
              <input className={styles["card-view-chkbox"]} type="checkbox" onChange={(e) => handleOnChange(str, e)} checked={filter.includes(str)} id={str} />
              <label className={styles["card-view-label"]} htmlFor={str}>{str}</label>
            </div>
          )
        })}
      </div>
    )
  }

  const handleOnChange = (str: string, e: any) => {
    if(e.target.checked){ //checked
      setFilter([...filter, str])
    }else{
      setFilter(filter.filter(e => e !== str))
    }
  }

  const handleOnClear = () => {
    setFilter([])
  }

  const handleOnApply = () => {
    setShowCapability(false)
    setShowClient(false)
    setShowIndustry(false)
    setFilterApply(filter)
    setFilter([])
  }

  const renderFilterApply = () => {
    if(filterApply.length > 0){
      return (
        <div className={styles["card-view-filter-apply"]}>
            {filterApply.map((filter: string) => {
              return (
                <div style={{padding: '0 16px'}} className={styles["card-view-filter-apply-div"]}  onClick={() => setFilterApply(filterApply.filter(e => e !== filter))}>
                  <p className={styles["card-view-filter-p"]}>{filter} <span style={{paddingLeft: '8px'}}>✕</span></p>
                </div>
              )
            })}
        </div>
      )
    }
  }

  const renderOptions = () => {
    if(filter.length > 0){
      return (
        <React.Fragment>
          <h4 style={{marginLeft: 'auto'}}><a onClick={handleOnClear}>Clear ✕</a></h4>
          <h4><a onClick={handleOnApply}>Apply ✓</a></h4>
        </React.Fragment>
      )
    }
  }

  const renderStudy = (study: any) => {
    if(filterApply.length > 0){
      let arr = [...study.capabilites, ...study.industry, study.title]
      if(arr.some(f => filterApply.includes(f))){
        return <Card study={study} />
      }
    }else{
      return <Card study={study} />
    }
  }

  return (
    <div className="global-wrapper" id={props.id}>
        <div className={styles["card-view-filter-by"]} style={{paddingBottom: '30px'}}>
          <h4>Filter by</h4>
          <h4>/</h4>
          <h4><a onClick={() => handleOnClick("capability")} style={{opacity: showCapability === true ? 1 : 0.4}}>Capability {showCapability === true ? "↑" : "↓"}</a></h4>
          <h4><a onClick={() => handleOnClick("industry")} style={{opacity: showIndustry === true ? 1 : 0.4}}>Industry {showIndustry === true ? "↑" : "↓"}</a></h4>
          <h4><a onClick={() => handleOnClick("client")} style={{opacity: showClient === true ? 1 : 0.4}}>Client {showClient === true ? "↑" : "↓"}</a></h4>
          {renderOptions()}
        </div>
        {render()}
        {renderFilterApply()}
        <div className={styles["card-view"]} style={{paddingTop: '0'}}>
          {study.map(study => {
            return renderStudy(study)
          })}
        </div>
    </div>
  );
}

export default CardView;
