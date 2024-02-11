import React,{ useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
  
import ATOB from '../../assets/img/new_logos_comps/newer/AtoB 2.png';
import bobtail from '../../assets/img/new_logos_comps/bobtail.png';
import joyride from '../../assets/img/new_logos_comps/joyride.png';
import Truckx from '../../assets/img/new_logos_comps/TruckX.png';
import pallet from '../../assets/img/new_logos_comps/newer/Pallet Logo.png';
import digitalOcean from '../../assets/img/new_logos_comps/newer/digital-ocean.png';
import mudflap from '../../assets/img/new_logos_comps/newer/Mudflap.png';
import sungrade from '../../assets/img/new_logos_comps/sungrade solar.png';

import goal from "../../assets/img/process_icons/goal.png";
import planicon from "../../assets/img/process_icons/plan.png";
import actionicon from "../../assets/img/process_icons/action.png";
import assignicon from "../../assets/img/process_icons/assign.png";
import testicon from "../../assets/img/process_icons/test.png";
import impicon from "../../assets/img/process_icons/implement.png";
import monitoricon from "../../assets/img/process_icons/monitor.png";
import improveicon from "../../assets/img/process_icons/improve.png";

import SmallWorkCard from '../../components/shared/cards/SmallWorkCard';
import videosource from '../../assets/video/home-bg.mp4';
// import workone from "../../assets/img/atob-card.png";
// import worktwo from "../../assets/img/comp_logos/AToB-square.jpg";
// import workthree from "../../assets/img/digitalocean-product.png";
// import workfour from "../../assets/img/comp_logos/digitalocean-square.png";
// import workfive from "../../assets/img/truckx-case.png";
// import worksix from "../../assets/img/comp_logos/truck-square.png";

import achiconone from "../../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../../assets/img/achievements-badges/BBB.png";
import achiconthree from "../../assets/img/achievements-badges/clutch_2.png";

import bcone from "../../assets/img/investor-realtions-icons/Awareness.png";
import bctwo from "../../assets/img/investor-realtions-icons/equity.png";
import bcthree from "../../assets/img/investor-realtions-icons/liquidity.png";
import bcfour from "../../assets/img/investor-realtions-icons/low hanging fruits.png";
import bcfive from "../../assets/img/investor-realtions-icons/content.png";
import bcsix from "../../assets/img/investor-realtions-icons/brand.png";

import useScrollToTop from '../../hooks/useScrollToTop';
import { TypeAnimation } from 'react-type-animation';
import caseStudies from '../../data/caseStudies.json';
import { Tooltip } from 'antd';
import eye from "../../assets/img/eye.png";
import top from "../../assets/img/top Arrow.png";

import axios from 'axios';

import atobbox from "../../assets/img/api_images/AToB-square.jpg";
import truckxbox from "../../assets/img/api_images/truck-square.png";
import palletbox from "../../assets/img/api_images/palletbox.png";
import solarbox from "../../assets/img/api_images/Solarbox.png";
import bobtailbox from "../../assets/img/api_images/bob.png";
import joybox from "../../assets/img/api_images/joybox.png";
import dobox from "../../assets/img/api_images/digitalocean-square.png";

import atobproduct from "../../assets/img/api_images/atob-card.png"; 
import truckxproduct from "../../assets/img/api_images/truckx-case.png";
import palletproduct from "../../assets/img/api_images/pallet.png";
import solarproduct from "../../assets/img/api_images/solar_one.webp";
import bobtailproduct from "../../assets/img/api_images/Bobtail.png";
import joyrideproduct from "../../assets/img/api_images/joytwo.png";
import doproduct from "../../assets/img/api_images/digitalocean-product.png";

import processback from "../../assets/video/home-bg.mp4";

import { Helmet } from 'react-helmet';
const BuisnessConsulting = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  // const [isVisibleTesti, setIsVisibleTesti] = useState(false);
  // const testiRef = useRef(null);
 
  //  const [isVisible, setIsVisible] = useState(false);
  //  const containerRef = useRef(null);
 
  //  const [isVisibleAch, setIsVisibleAch] = useState(false);
  //  const achRef = useRef(null);
 
  //  const [isVisiblecard, setIsVisiblecard] = useState(false);
  //  const cardsRef = useRef(null);
 
   const [processNewVisible, setProcessNewVisible] = useState(false);
   const processNewRef = useRef(null);

   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [darkMode, setDarkMode] = useState(false);
   const insightsRefs = useRef([]);

   const [data, setData] = useState({
    bannerHeading: "",
    bannerDescription: "",
  
    featuresMainHeading: "",
    featuresMainDescription: "",
  
    featuresHeadingOne: "",
    featuresDescriptionOne: "",
  
    featuresHeadingTwo: "",
    featuresDescriptionTwo: "",
  
    featuresHeadingThree: "",
    featuresDescriptionThree: "",
  
    featuresHeadingFour: "",
    featuresDescriptionFour: "",
  
    featuresHeadingFive: "",
    featuresDescriptionFive: "",
  
    featuresHeadingSix: "",
    featuresDescriptionSix: "",

    processMainHeading:"",
    processMainDesc:"",
  
    processHedOne:"",
    processDesOne: "",

    processHedTwo:"",
    processDesTwo: "",
    
    processHedThree:"",
    processDesThree: "",

    processHedFour:"",
    processDesFour: "",

    processHedFive:"",
    processDesFive: "",

    processHedSix:"",
    processDesSix: "",

    processHedSeven:"",
    processDesSeven: "",

    processHedEight:"",
    processDesEight: "",
  
    whySectionHeading: "",
    whySectionDescription: "",
  
    whyBoxOneHeading: "",
    whyBoxOneDescription: "",
  
    whyBoxTwoHeading: "",
    whyBoxTwoDescription: "",
  
    whyBoxThreeHeading: "",
    whyBoxThreeDescription: "",
  
    whyBoxFourHeading: "",
    whyBoxFourDescription: "",
  
    whyBoxFiveHeading: "",
    whyBoxFiveDescription: "",
  
    whyBoxSixHeading: "",
    whyBoxSixDescription: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/invpage');
        console.log(`GTM page data`, response.data);
        if (response.data && response.data.length > 0) {
          const gtmData = response.data[0]; // Assuming the first entry is what we want
  
          setData({
            bannerHeading: gtmData.bannerHeading,
            bannerDescription: gtmData.bannerDescription,
            featuresMainHeading: gtmData.featuresMainHeading,
            featuresMainDescription: gtmData.featuresMainDescription,
            featuresHeadingOne: gtmData.featuresHeadingOne,
            featuresDescriptionOne: gtmData.featuresDescriptionOne,
            featuresHeadingTwo: gtmData.featuresHeadingTwo,
            featuresDescriptionTwo: gtmData.featuresDescriptionTwo,
            featuresHeadingThree: gtmData.featuresHeadingThree,
            featuresDescriptionThree: gtmData.featuresDescriptionThree,
            featuresHeadingFour: gtmData.featuresHeadingFour,
            featuresDescriptionFour: gtmData.featuresDescriptionFour,
            featuresHeadingFive: gtmData.featuresHeadingFive,
            featuresDescriptionFive: gtmData.featuresDescriptionFive,
            featuresHeadingSix: gtmData.featuresHeadingSix,
            featuresDescriptionSix: gtmData.featuresDescriptionSix,

            processMainHeading:gtmData.processMainHeading,
            processMainDesc: gtmData.processMainDesc,

            processHedOne:gtmData.processHedOne,
            processDesOne: gtmData.processDesOne,
            processHedTwo:gtmData.processHedTwo,
            processDesTwo: gtmData.processDesTwo,
            processHedThree:gtmData.processHedThree,
            processDesThree: gtmData.processDesThree,
            processHedFour:gtmData.processHedFour,
            processDesFour: gtmData.processDesFour,
            processHedFive:gtmData.processHedFive,
            processDesFive: gtmData.processDesFive,
            processHedSix:gtmData.processHedSix,
            processDesSix: gtmData.processDesSix,
            processHedSeven:gtmData.processHedSeven,
            processDesSeven: gtmData.processDesSeven,
            processHedEight:gtmData.processHedEight,
            processDesEight: gtmData.processDesEight,
            whySectionHeading: gtmData.whySectionHeading,
            whySectionDescription: gtmData.whySectionDescription,
            whyBoxOneHeading: gtmData.whyBoxOneHeading,
            whyBoxOneDescription: gtmData.whyBoxOneDescription,
            whyBoxTwoHeading: gtmData.whyBoxTwoHeading,
            whyBoxTwoDescription: gtmData.whyBoxTwoDescription,
            whyBoxThreeHeading: gtmData.whyBoxThreeHeading,
            whyBoxThreeDescription: gtmData.whyBoxThreeDescription,
            whyBoxFourHeading: gtmData.whyBoxFourHeading,
            whyBoxFourDescription: gtmData.whyBoxFourDescription,
            whyBoxFiveHeading: gtmData.whyBoxFiveHeading,
            whyBoxFiveDescription: gtmData.whyBoxFiveDescription,
            whyBoxSixHeading: gtmData.whyBoxSixHeading,
            whyBoxSixDescription: gtmData.whyBoxSixDescription,
          });
        }
      } catch (error) {
        console.error("Error fetching GTM Page data:", error);
      }
    };
  
    fetchData();
  }, []);

   useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/cases');
        setCaseStudies(response.data.slice(0, 3)); // Fetch only the first three case studies
      } catch (error) {
        console.error('Error fetching case studies:', error);
      }
    };
  
    fetchCaseStudies();
  }, []);

   useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setProcessNewVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );
  
    if (processNewRef.current) {
      observer.observe(processNewRef.current);
    }
  
    return () => observer.disconnect();
  }, []);
  


  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         setIsVisiblecard(entry.isIntersecting);
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (cardsRef.current) {
  //     observer.observe(cardsRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);
  

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => setIsVisibleAch(entry.isIntersecting));
//         },
//         { threshold: 0.5 }
//     );

//     observer.observe(achRef.current);
//     return () => observer.disconnect();
// }, []);

// useEffect(() => {
//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => setIsVisibleTesti(entry.isIntersecting));
//   }, { threshold: 0.5 });

//   observer.observe(testiRef.current);
//   return () => observer.disconnect();
// }, []);


// useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => setIsVisible(entry.isIntersecting));
//     }, { threshold: 0.5 }); 

//     observer.observe(containerRef.current);
//     return () => observer.disconnect(); 
// }, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    {
      threshold: 0.5, // Adjust as needed
    }
  );

  const elements = insightsRefs.current;
  elements.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => {
    elements.forEach((el) => {
      if (el) observer.unobserve(el);
    });
  };
}, []);

const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

useScrollToTop();
  const firstThreeCaseStudies = caseStudies.slice(0, 3);
    return (
        <>
         <Helmet>
        <title>Investor Relations - Phi Consulting</title>
        <meta name="description" content="Nurture investor confidence with Phi Consulting's Investor Relations expertise. Enhance communication, build trust, and foster long-term relationships for sustainable growth." />
      </Helmet>

        <div className={`overlayscreen ${darkMode ? 'activate' : ''}`}></div>
        <div className="left-section-control"></div>
            <div className="right-section-control">
            <Tooltip placement="leftTop" title="toggle eye protection">
            <button onClick={toggleDarkMode}> <img src={eye} alt="eye icon" width={25} height={25}/></button> 
            </Tooltip>
                 {/* Back to Top Button */}
                 <Tooltip placement="leftTop" title="back to top">
    <button className="back-to-top" onClick={scrollToTop}>
    <img src={top} alt="eye icon" width={25} height={25}/>
    </button>
    </Tooltip>
            </div>
         {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-bui-consul">
          <div class="hero-content-bui-consul">
            <h2 class="hero-heading-bui-consul">
            {windowWidth >= 1200 ? <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Boost Your Investor Relations Impact',
        7000, 
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    /> : ' Boost Your Investor Relations Impact'}
           
            </h2>
            <p class="hero-desc-bui-consul">
            {data.bannerDescription}
            </p>
            <div class="consult-button-bui-consul">
            <Link to="/contact" className='scheduler-set'> Schedule a Free Consultation</Link>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- sales page banner --> */}
      <article class="sales-solutions">
        <h2 class="sales-heading">{data.featuresMainHeading}</h2>
        <p class="sales-banner-desc">
        {data.featuresMainDescription}
        </p>
        <div class="sales-banner-container">
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={bcone}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title"> {data.featuresHeadingOne}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionOne}
            </div>
          </div>

          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={bctwo}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingTwo}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionTwo}
            </div>
          </div>
          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={bcthree}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingThree}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionThree}
            </div>
          </div>
        </div>
        <div class="sales-banner-container down-spacing">
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={bcfour}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingFour}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionFour}
            </div>
          </div>

          <div class="sales-cards one-with-white-back">
            <div class="icon-container">
              <img
                src={bcfive}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingFive}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionFive}
            </div>
          </div>
          <div class="sales-cards one-with-blue-back">
            <div class="icon-container">
              <img
                src={bcsix}
                alt=""
                width="90"
                height="90"
              />
            </div>
            <h3 class="sales-card-title">{data.featuresHeadingSix}</h3>
            <div class="sales-card-description">
            {data.featuresDescriptionSix}
            </div>
          </div>
        </div>
      </article>

      {/* <!-- Section path  --> */}
      <article class="path">
        <section class="path-container">
          
          <h2 class="path-heading">{data.processMainHeading}</h2>
          <p class="sales-process-desc">
          {data.processMainDesc}
          </p>
          <div class="process-container">
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                   src={goal}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedOne}</h2>
                <h3 class="circle-text-sales">
                {data.processDesOne}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                     src={planicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedTwo}</h2>
                <h3 class="circle-text-sales">
                {data.processDesTwo}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                     src={actionicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedThree}</h2>
                <h3 class="circle-text-sales">
                {data.processDesThree}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                   src={assignicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedFour}</h2>
                <h3 class="circle-text-sales">
                {data.processDesFour}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                     src={testicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedFive}</h2>
                <h3 class="circle-text-sales">
                {data.processDesFive}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                   src={impicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedSix}</h2>
                <h3 class="circle-text-sales">
                {data.processDesSix}
                </h3>
              </div>
            </div>

            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                    src={monitoricon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedSeven}</h2>
                <h3 class="circle-text-sales">
                {data.processDesSeven}
                </h3>
              </div>
            </div>
            <div class="circle-container-sales">
              <div class="circle-content-sales">
                <div class="icon-process-container">
                  <img
                    src={improveicon}
                    alt=""
                    width="60px"
                    height="60px"
                  />
                </div>
                <h2 class="circle-heading-sales">{data.processHedEight}</h2>
                <h3 class="circle-text-sales">
                {data.processDesEight}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </article>

       {/* <!-- section new process --> */}
       <article class="process-new">
       <video
    src={processback}
    autoPlay
    loop
    muted
    className="background-video"
  />
  <div className="white-overlay" />

        <section class="process-new-container">
          <h2 class="path-heading">{data.processMainHeading}</h2>
          <p class="work-desc">
          {data.processMainDesc}
          </p>
          <div class="process-new-section">
            <div class="left-process-section" ref={processNewRef}>
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/goal.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processHedOne}</div>
                  <div class="process-new-description">
                  {data.processDesOne}
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/plan.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processHedTwo}</div>
                  <div class="process-new-description-right-side">
                  {data.processDesTwo}

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="process-new-section">
            <div class="left-process-section">
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/action.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processHedThree}</div>
                  <div class="process-new-description">
                  {data.processDesThree}
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/assign.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processHedFour}</div>
                  <div class="process-new-description-right-side">
                  {data.processDesFour}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="process-new-section">
            <div class="left-process-section">
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/test.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processHedFive}</div>
                  <div class="process-new-description">
                  {data.processDesFive}
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/implement.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processHedSix}</div>
                  <div class="process-new-description-right-side">
                  {data.processDesSix}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="process-new-section">
            <div class="left-process-section">
              <div className={`tooltip-right ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/monitor.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processHedSeven}</div>
                  <div class="process-new-description">
                  {data.processDesSeven}
                  </div>
                </div>
              </div>
            </div>
            <div class="right-process-section">
              <div className={`tooltip-left ${processNewVisible ? 'fade-in' : ''}`}>
                <img
                  src="../assets/img/process_icons/improve.png"
                  alt=""
                  class="new-process-icon"
                />
                <div class="text-container">
                  <div class="process-new-heading">{data.processHedSeven}</div>
                  <div class="process-new-description-right-side">
                  {data.processDesEight}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- full scale banner --> */}
      <article class="full-scale-banner">
        <section class="banner-full-exp">
          <div class="overlay"></div>
          <div class="banner-new-full-scale-container">
            <h2 class="full-banner-call">
            Shareholder registration is the most outsourced IR activity, with 77 percent of investor relations teams relying on external providers. Shareholder identification and annual report design follow closely at 64 percent and 58 percent, respectively.
            </h2>
          </div>
        </section>
      </article>

      

      {/* <!-- why phi for customer exp Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">
        {data.whySectionHeading}
        </h2>
        <p class="why-phi-desc">
          {/* At Phi Consulting, we understand that your people are your greatest
          asset. <br />Our HR & Recruitment Consulting services are designed to
          not only meet your <br />
          immediate talent needs but to strategically shape the future of your
          workforce. */}
          At Phi Consulting, we meticulously navigate the intricacies of Investment Relations to ensure the success of your financial strategies
        </p>
        <div class="insights-container">
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container one-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxOneHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxOneDescription}
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container two-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxTwoHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxTwoDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container three-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxThreeHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxThreeDescription}
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container four-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxFourHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxFourDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle" ref={(el) => insightsRefs.current.push(el)}>
            <div class="left-section-insights">
              <div class="overlay-container five-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxFiveHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxFiveDescription}
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container six-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">{data.whyBoxSixHeading}</h2>
                  <p class="overlay-desc">
                  {data.whyBoxSixDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

     

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">
            Ready to boost your financial narrative?
            </div>
            <div class="cta-descrip">
            Stand out in the market and capture investor attention with our proven strategies. Contact Phi Consulting now and let's embark on a journey of financial success together!
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact-us" class="inner-header"
                  >Get in Touch</Link
                ></span
              >
            </div>
          </div>
        </section>
      </article>
        
        </>
    ) 
}

export default BuisnessConsulting;