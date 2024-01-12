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

// import workone from "../../assets/img/atob-card.png";
// import worktwo from "../../assets/img/comp_logos/AToB-square.jpg";
// import workthree from "../../assets/img/digitalocean-product.png";
// import workfour from "../../assets/img/comp_logos/digitalocean-square.png";
// import workfive from "../../assets/img/truckx-case.png";
// import worksix from "../../assets/img/comp_logos/truck-square.png";

import achiconone from "../../assets/img/achievements-badges/clutch_1.png";
import achicontwo from "../../assets/img/achievements-badges/BBB.png";
import achiconthree from "../../assets/img/achievements-badges/clutch_2.png";

import bcone from "../../assets/img/buisness_consulting/business transformation.png";
import bctwo from "../../assets/img/buisness_consulting/strategy.png";
import bcthree from "../../assets/img/buisness_consulting/project-management.png";
import bcfour from "../../assets/img/buisness_consulting/operations.png";
import bcfive from "../../assets/img//buisness_consulting_icons/process management.png";
import bcsix from "../../assets/img/buisness_consulting/management consultant.png";

import caseStudies from '../../data/caseStudies.json';

const BuisnessConsulting = () => {
  const [isVisibleTesti, setIsVisibleTesti] = useState(false);
  const testiRef = useRef(null);
 
   const [isVisible, setIsVisible] = useState(false);
   const containerRef = useRef(null);
 
   const [isVisibleAch, setIsVisibleAch] = useState(false);
   const achRef = useRef(null);
 
   const [isVisiblecard, setIsVisiblecard] = useState(false);
   const cardsRef = useRef(null);
 
   const [processNewVisible, setProcessNewVisible] = useState(false);
   const processNewRef = useRef(null);

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
  


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisiblecard(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => setIsVisibleAch(entry.isIntersecting));
        },
        { threshold: 0.5 }
    );

    observer.observe(achRef.current);
    return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisibleTesti(entry.isIntersecting));
  }, { threshold: 0.5 });

  observer.observe(testiRef.current);
  return () => observer.disconnect();
}, []);


useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.5 }); 

    observer.observe(containerRef.current);
    return () => observer.disconnect(); 
}, []);
  const firstThreeCaseStudies = caseStudies.slice(0, 3);
    return (
        <>
         {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-bui-consul">
          <div class="hero-content-bui-consul">
            <h2 class="hero-heading-bui-consul">
            Boost Your Investor Relations Impact
            </h2>
            <p class="hero-desc-bui-consul">
            Investors look for structured and detailed plans for scaling your business while balancing risk and return. We help navigate critical plans for the future by mapping out execution plans for the road ahead.
            </p>
            <div class="consult-button-bui-consul">
            <Link to="/contact" className='scheduler-set'> Schedule a Free Consultation</Link>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- sales page banner --> */}
      <article class="sales-solutions">
        <h2 class="sales-heading">Secure Stakeholder Support with our Investor Relations Consulting Team</h2>
        <p class="sales-banner-desc">
        Phi Consulting boosts your IR impact by providing a tailored solution by blending traditional methods with innovative digital strategies
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
            <h3 class="sales-card-title">Boost Investor Awareness</h3>
            <div class="sales-card-description">
            Employ targeted strategies to elevate your company as a standout investment, increasing visibility in the market
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
            <h3 class="sales-card-title">Clarify Equity Stories</h3>
            <div class="sales-card-description">
            Transform complex equity narratives into compelling and engaging stories that resonate with investors.
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
            <h3 class="sales-card-title">Boost Stock Liquidity</h3>
            <div class="sales-card-description">
            Enhance trading volume through strategic, long-term initiatives that strengthen market liquidity for your stocks.
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
            <h3 class="sales-card-title">Pick Low-Hanging Fruits</h3>
            <div class="sales-card-description">
            Elevate your Investor Relations (IR) efforts instantly by incorporating digital methods for immediate and impactful results
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
            <h3 class="sales-card-title">Utilize Existing IR Content</h3>
            <div class="sales-card-description">
            Maximize efficiency for time-strapped Investor Relations Officers (IROs) by repurposing and optimizing existing IR pillar content.
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
            <h3 class="sales-card-title">Leverage Your IR Brand</h3>
            <div class="sales-card-description">
            Acquire the skills and tools necessary to successfully navigate digital media, leveraging your IR brand for heightened market presence
            </div>
          </div>
        </div>
      </article>

      {/* <!-- Section path  --> */}
      <article class="path">
        <section class="path-container">
          <h2 class="path-heading">Our Business Consulting Process:</h2>
          <p class="sales-process-desc">
            Crafting tailored solutions for guaranteed success, Phi Consulting
            embraces a systematic approach to elevate your business strategy and
            operations.
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
                <h2 class="circle-heading-sales">Define Your Goals</h2>
                <h3 class="circle-text-sales">
                  Clearly articulate your objectives, laying the foundation for
                  a targeted consulting strategy.
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
                <h2 class="circle-heading-sales">Plan & Map Your Process</h2>
                <h3 class="circle-text-sales">
                  Develop a comprehensive plan, mapping out the steps required
                  to achieve your goals.
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
                <h2 class="circle-heading-sales">Set Actions</h2>
                <h3 class="circle-text-sales">
                  Implement strategic actions, aligning every move with your
                  overarching business objectives.
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
                <h2 class="circle-heading-sales">Assign Stakeholders</h2>
                <h3 class="circle-text-sales">
                  Clearly define roles and responsibilities, ensuring flawless
                  execution of your business plan.
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
                <h2 class="circle-heading-sales">Test the Process</h2>
                <h3 class="circle-text-sales">
                  Rigorously test your strategies and processes to identify and
                  address any potential challenges.
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
                <h2 class="circle-heading-sales">Implementation</h2>
                <h3 class="circle-text-sales">
                  Execute the refined strategies, incorporating feedback and
                  making real-time adjustments as needed.
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
                <h2 class="circle-heading-sales">Monitor the Results</h2>
                <h3 class="circle-text-sales">
                  Utilize robust monitoring systems to gauge the impact of our
                  consulting services on your business.
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
                <h2 class="circle-heading-sales">Iterate the Process</h2>
                <h3 class="circle-text-sales">
                  Embrace a culture of continuous improvement, refining and
                  iterating the process for sustained success.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </article>

       {/* <!-- section new process --> */}
       <article class="process-new">
        <section class="process-new-container">
          <h2 class="path-heading">Our Investment Relations Process</h2>
          <p class="work-desc">
          At Phi Consulting, we meticulously navigate the intricacies of Investment Relations to ensure the success of your financial strategies:
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
                  <div class="process-new-heading">Define Your Goals</div>
                  <div class="process-new-description">
                  Collaboratively outline your investor relations objectives and aspirations, aligning them with your broader financial strategy
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
                  <div class="process-new-heading">Plan & Map Your Process</div>
                  <div class="process-new-description-right-side">
                  Develop a customized roadmap for Investor Relations tailored to your business needs, ensuring a strategic alignment with financial goals.

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
                  <div class="process-new-heading">Set Actions</div>
                  <div class="process-new-description">
                  Implement strategic IR actions designed to foster investor engagement, trust, and alignment with your financial milestones.
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
                  <div class="process-new-heading">Assign Stakeholders</div>
                  <div class="process-new-description-right-side">
                  Clearly define roles and responsibilities within your organization to facilitate the execution of your Investor Relations strategy.
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
                  <div class="process-new-heading">Test the Process</div>
                  <div class="process-new-description">
                  Rigorously evaluate and fine-tune the proposed IR strategies, ensuring their effectiveness in capturing investor attention and support.
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
                  <div class="process-new-heading">Implement Strategies</div>
                  <div class="process-new-description-right-side">
                  Execute the optimized Investor Relations plan with precision, leveraging our expertise to enhance your financial narrative.
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
                  <div class="process-new-heading">Monitor Results</div>
                  <div class="process-new-description">
                  Continuously track and analyze the results of your Investor Relations efforts, providing insights into investor perception and market impact.
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
                  <div class="process-new-heading">Iterate Strategies</div>
                  <div class="process-new-description-right-side">
                  Adapt and refine your Investor Relations strategies based on real-time results and changes in the business landscape, ensuring continued effectiveness.
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
              42% businesses adopt go-to-market strategies for calculating
              customer value, 28% for business expansion/upgrades, and 61% to
              build customer experience
            </h2>
          </div>
        </section>
      </article>

       {/* <!-- Clients Section --> */}
       <article className={`clients ${isVisible ? 'animate' : ''}`} ref={containerRef}>
        <section class="client-container">
          <div class="client-content">
            <h2 class="client-heading">Trusted by Industry Leaders</h2>
            <p class="client-desc">
              Phi Consulting has empowered startups and SMEs across diverse
              industries. <br />
              Our clients trust us for our deep expertise, personalized service,
              and commitment to delivering tangible results.
            </p>
            <div class="client-logo-container">
              <div class="logo-container-one">
                <div class="image-container">
                  <img
                    src={ATOB}
                    alt="AtoB_logo"
                    title="AtoB"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container">
                  <img
                    src={bobtail}
                    alt="bobtail_logo"
                    title="BoBtail"
                    className='client-logos-sectio-hover'
                  />
                </div>

                <div class="image-container">
                  <img
                    src={joyride}
                    alt="joyride_logo"
                    title="Joyride"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container">
                  <img
                    src={Truckx}
                    alt="truckx_logo"
                    title="TruckX"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container">
                  <img
                    src={pallet}
                    alt="Pallet_logo"
                    title="Pallet"
                    className='client-logos-sectio-hover'
                  />
                </div>
              </div>
              <div class="logo-container-one">
                <div class="image-container-bottom">
                  <img
                    src={digitalOcean}
                    alt="bobtail_logo"
                    title="Digital Ocean"
                    className='client-logos-sectio-hover'
                  />
                </div>

                <div class="image-container-bottom">
                  <img
                    src={mudflap}
                    alt="joyride_logo"
                    title="Mudflap"
                    className='client-logos-sectio-hover'
                  />
                </div>
                <div class="image-container-bottom">
                  <img
                    src={sungrade}
                    alt="truckx_logo"
                    title="Sungrade Solar"
                    className='client-logos-sectio-hover'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- why phi for customer exp Section --> */}
      <article class="why-phi-for-sales">
        <h2 class="why-phi-heading">
        Why Choose Phi?
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
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container one-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Captivate Investor Attention</h2>
                  <p class="overlay-desc">
                  In a market where attention is the ultimate currency, we specialize in strategies that break through the noise and capture investor interest effectively.
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container two-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Simplify Your Equity Story</h2>
                  <p class="overlay-desc">
                  We understand the challenge of conveying complex equity stories. Our expertise lies in simplifying intricate details to ensure your narrative resonates with potential investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container three-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Boost Liquidity & Trading Volumes</h2>
                  <p class="overlay-desc">
                  Overcome the struggle of attracting investors in low-liquidity scenarios. Our targeted approaches aim to boost trading volumes, enhancing your market appeal
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container four-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Results-Driven IR Tools</h2>
                  <p class="overlay-desc">
                  Tired of conventional Investor Relations tools yielding minimal results? Our innovative solutions ensure your IR efforts translate into visible improvements, providing measurable impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="insights-bundle">
            <div class="left-section-insights">
              <div class="overlay-container five-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Strategic Initiatives in a Crowded Calendar</h2>
                  <p class="overlay-desc">
                  Even with a full IR calendar, we carve out space for additional strategic initiatives. Our agile approach allows us to integrate impactful activities amidst your existing schedule
                  </p>
                </div>
              </div>
            </div>
            <div class="right-section-insights">
              <div class="overlay-container six-hr-consul">
                <div class="overlay"></div>
                <div class="content">
                  <h2 class="overlay-heading">Enhance Digital Visibility</h2>
                  <p class="overlay-desc">
                  We illuminate your IR efforts with increased digital visibility. Overcome the challenge of limited online presence, ensuring your expert voice is heard in the digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* <!-- why phi for customer exp Section --> */}
      <article class="work" ref={cardsRef}>
        <section class="work-section">
          <h2 class="work-heading">Portfolio</h2>
          <p class="work-desc">
          Explore our portfolio to witness the transformative impact of Phi Consulting on businesses like yours. Each success story is a testament to our commitment to driving sales excellence.
          </p>
          <div class="work-row">
          {firstThreeCaseStudies.map(study => (
                <SmallWorkCard key={study.id} caseStudy={study} isVisible={isVisiblecard} />
            ))}
          </div>

          <div class="right-button spacing-under">
            <span>View More Case Studies</span>
          </div>
        </section>
      </article>

    {/* <!-- Testimonial Section --> */}
    <article class="testimonial">
        <section className="testimonial-container">
          <h2 class="testi-heading">
          What Our Clients Say About Us
          </h2>
          <p class="testi-desc">
          Our clients speak for the transformative impact of Phi Consulting. Here's what they have to say about their experiences partnering with us:
          </p>
        </section>

        <section className="testi-cards-container" ref={testiRef}>
          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 testi-one">
              {/* <!-- <img src="./assets/img/testimonial_one.webp" alt="" /> --> */}
            </div>

            <p class="testi-quote">
              <q
                ><i
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam atque iste aut magni harum nobis quasi impedit enim
                  laborum distinctio, accusamus ducimus dolorem illum, mollitia
                  aperiam deserunt voluptate quaerat totam!</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">-Rob Robinson (CEO)</h3>
          </div>

          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 test-two">
              <img src="" alt="" />
            </div>

            <p class="testi-quote">
              <q
                ><i
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam atque iste aut magni harum nobis quasi impedit enim
                  laborum distinctio, accusamus ducimus dolorem illum, mollitia
                  aperiam deserunt voluptate quaerat totam!</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">-lenny pepridge (CTO)</h3>
          </div>

          <div className={`testi-card ${isVisibleTesti ? 'animate' : ''}`}>
            <div class="circleBase type3 test-three">
              <img src="" alt="" />
            </div>

            <p class="testi-quote">
              <q
                ><i
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam atque iste aut magni harum nobis quasi impedit enim
                  laborum distinctio, accusamus ducimus dolorem illum, mollitia
                  aperiam deserunt voluptate quaerat totam!</i
                ></q
              >
            </p>
            <h3 class="testi-card-heading">-linda bigaloo (finance)</h3>
          </div>
        </section>
      </article>

      {/* <!-- Achievement Section --> */}
      <article class="achievement">
        <section class="achievement-section">
          <h2 class="ach-heading">Our Achievements</h2>
          <p class="testi-desc">
          Explore Phi Consulting's hall of achievements – where revenue surges, operational efficiency peaks, and client success stories converge, defining a legacy of transformative impact.
          </p>
        </section>
        <section class="ach-badges-container" ref={achRef}>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
               src={achiconone}
              alt=""
              width="200"
              height="230"
            />
          </div>
          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
               src={achicontwo}
              alt=""
              width="200"
              height="150"
            />
          </div>

          <div className={`ach-badge ${isVisibleAch ? 'animate' : ''}`}>
            <img
             src={achiconthree}
              alt=""
              width="250"
              height="220"
            />
          </div>

        </section>
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
                ><Link to="/contact" class="inner-header"
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