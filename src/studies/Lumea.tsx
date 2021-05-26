import {LUMEA} from "../colors"
import hover from "../images/Hover/lumea.gif";
import img from "../images/Clients/client-lumea.svg";

import { VERSA_Agency } from "../tagging/function";
import { Website } from "../tagging/output";

import { Energy } from '../tagging/industries'
import { Strategy } from '../tagging/capabilities'
import {
    Artefact_Review,
    Data_Analytics_Review,
    Requirements_Gathering,
    Competitor_Analysis
} from '../tagging/researchMethods'

export default {
    color: LUMEA, //color
    hover,
    img,
    redirect: "l",
    thumbnail: "A market first solution that's accelerate Australia toward a smarter energy future.",
    title: "Lumea",

    //tagging
    function: VERSA_Agency,
    link: "http://www.lumea.com.au",
    output:  [Website],

    capabilites: [Strategy],
    industries: [Energy],
    researchMethods: [
        Artefact_Review,
        Competitor_Analysis,
        Data_Analytics_Review,
        Requirements_Gathering
    ],    

    //study
    brief: ["Design and implement a digital experience platform as part of the Council’s Customer Experience Program."],
    challenge: ["BankVic’s existing website was confusing and complex for both users and staff to use, we helped plan and deliver a future-proof platform, with endless customisation and personalisation, putting the members at the centre of the experience."],
    credits: ["Trainer photography by Jeremy Simons", "Back-end development by PixelForce"],
    deliverables: ["BankVic website re-design which can be viewed here"],
    hero: "BankVic is a 100% member owned bank focused on serving police, health, emergency and public services, as well as their family and friends. Their aim is to build healthy communities that are financially, socially and environmentally sustainable.",
    objective: [
        "To know where the root of the user’s problems originate you need to understand the user, and a credit to BankVic for supporting the need for user research. We did extensive research into the BankVic member experience, understanding how customers are interacting with the website, and uncovering opportunities where we could enhance the user experience.",
        "Using Google analytics, user and stakeholder interviews, UX reviews, tree testing, card sorting and a content audit, we began to unearth the pain points where we’d need to put the greater focus, and where we could ultimately add greater value."
    ],
    results: ["Comprehensive user research was conducted to uncover insights to formulate personas and customer journey maps. These informed our design direction for the wireframes and ensured we maintain a human-centred approach in our ideation. Iterative UX design simplified the complex navigation to streamline user flows. Modern designs injected new life into the brand, inspired by user research and refined through concept testing."],
     
    testimonials: []
}