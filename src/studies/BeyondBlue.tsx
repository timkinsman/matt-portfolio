import img from "../images/Clients/client-beyondblue.svg";

import {BEYOND_BLUE} from "../colors"

import { NGO___Not_for_profit } from '../tagging/industries'
import { Strategy, UI___UX } from '../tagging/capabilities'
import { 
    Artefact_Review,
    Concept_Usability_Testing,
    Data_Analytics_Review,
    Heuristics_Evaluation,
    Card_Sort,
    Tree_Test,
    Journey_Mapping,
    Persona_Development,
    Requirements_Gathering,
    Revised_User_Flows,
    Roadmapping,
    Stakeholder_Interviews,
    User_Interviews
} from '../tagging/researchMethods'

export default {
    color: BEYOND_BLUE, //color
    img,
    redirect: "bb",
    thumbnail: "A learning and resource platform that arms educators with the knowledge to promote and protect student mental health.",
    title: "Beyond Blue",

    //tagging
    function: [],
    link: [],
    output:[],

    capabilites: [Strategy, UI___UX],
    industry: [NGO___Not_for_profit],
    researchMethods: [
    ],    

    //study
    brief: [],
    challenge: ["Create an all-encompassing learning and resource platform that would arm educators with the knowledge to promote and protect student mental health."],
    credits: [],
    deliverables: ["BeYou website platform re-design which can be viewed here"],
    hero: "BeYou is Beyond Blue’s latest youth-focused initiative, it unifies five different sites. This single, integrated resource covers a child’s entire education. BeYou enables teachers to connect with students around mental health.",
    objective: [
        "We were responsible for strategy, UX, creative and development for the platform, taking insights from user research to create an audience-focused navigation and design. This included structuring the delivery of learning modules by user persona, allowing each different user group to easily make their way through the program.",
    ],
    results: [
        "We designed and developed Be You, an education platform that supports resources and online learning for teachers in line with their professional development plans.",
        "The platform takes users through a series of modules focused on different themes including bullying, self harm and suicide prevention. Once the program is completed, participants gain certification and are able to incorporate their learnings into lesson plans for use in the classroom.",
        "Our team took insights from user research to create an audience-focused navigation and design. This included structuring the delivery of learning modules by user persona, allowing each different user group to easily make their way through the program in bite-sized modules, at a pace that best suits their busy schedules.",
        "To avoid attrition and encourage ongoing engagement, simple gamification techniques and notifications are used to motivate users to explore further and complete the entire course.",
        "Be You and Salesforce are completely interoperable, with all user information captured upon registration being sent to Salesforce, which is in turn utilised for the provision of learning resources, school information, complex user group management, and user notifications."
    ],
     
    testimonials: []
}