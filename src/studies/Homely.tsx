import homely from "../images/Clients/client-homely.svg";

import { Government } from '../tagging/industry'
import { Strategy, UI___UX } from '../tagging/capabilities'
import { 
    Artefact_Review,
    Concept_Usability_Testing,
    Data_Analytics_Review,
    Heuristics_Evaluation,
    IA__Card_Sort,
    IA__Tree_Test,
    Journey_Mapping,
    Persona_Development,
    Requirements_Gathering,
    Revised_User_Flows,
    Roadmapping,
    Stakeholder_Interviews,
    User_Interviews
} from '../tagging/researchMethods'

export default {
    color: "#F64A73",
    img: homely,
    title: "BankVic",
    capabilites: [Strategy, UI___UX],
    industry: [Government],
    researchMethods: [
        Artefact_Review,
        Concept_Usability_Testing,
        Data_Analytics_Review,
        Heuristics_Evaluation,
        IA__Card_Sort,
        IA__Tree_Test,
        Journey_Mapping,
        Persona_Development,
        Requirements_Gathering,
        Revised_User_Flows,
        Roadmapping,
        Stakeholder_Interviews,
        User_Interviews
    ],  
}