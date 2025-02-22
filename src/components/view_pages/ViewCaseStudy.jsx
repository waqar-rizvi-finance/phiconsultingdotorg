import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import caseStudies from '../../data/caseStudies.json';
import eye from "../../assets/img/eye.png"
import useScrollToTop from '../../hooks/useScrollToTop';
import { Tooltip, Spin  } from 'antd';
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

import shareicon from "../../assets/img/shareicon/share.png";

const viewCaseStudy = () => {

   
    const [caseStudy, setCaseStudy] = useState(null);
    // const caseId = localStorage.getItem('currentcaseId');
    const headingSectionRef = useRef(null);
    const [darkMode, setDarkMode] = useState(false);
    const { caseId } = useParams(); // Use useParams to get the case study ID from the URL
    const [loading, setLoading] = useState(true);
    // const caseStudy = caseStudies.find(study => study.id === parseInt(id));
    const toggleDarkMode = () => setDarkMode(!darkMode);

    const copyToClipboard = () => {
        
        const textToCopy = `https://phiconsulting.org/viewcasestudy/${caseId}`;
    
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            // Success feedback
            alert('Link copied to clipboard!');
            // console.log(textToCopy);
          })
          .catch(err => {
            // Error feedback
            console.error('Failed to copy link: ', err);
          });
      };

     

     
        const fetchCaseStudy = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/cases/${caseId}`);
                // console.log(response.data)
                setCaseStudy(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching case study:', error);
                setLoading(false);
            }
        };

        
   

    useEffect(() => {
        console.log("Current caseId: ", caseId); // Debugging log
        if (caseId) {
            fetchCaseStudy();
        }
    }, [caseId]);
     
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useScrollToTop();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                console.log(entry); // Debugging log
                if (entry.isIntersecting) {
                    console.log('Element is intersecting');
                    entry.target.classList.add('fade-in-casestudy');
                    entry.target.classList.remove('fade-out-casestudy');
                } else {
                    console.log('Element is not intersecting');
                    entry.target.classList.add('fade-out-casestudy');
                }
            });
        }, { threshold: 0.5 });
    
        if (headingSectionRef.current) {
            observer.observe(headingSectionRef.current);
        }
    
        return () => {
            if (headingSectionRef.current) {
                observer.unobserve(headingSectionRef.current);
            }
        };
    }, []);

    

    if (loading) {
        return (
            <div className="spinner-container">
                <Spin size="large" />
            </div>
        );
    }
    
    if (!caseStudy) {
        return <div>Case study not found</div>;
    }
    
    const imageUrl = caseStudy.imageone && caseStudy.imageone.includes('Atob') ? atobproduct 
                    : caseStudy.imageone && caseStudy.imageone.includes('truckx') ? truckxproduct 
                    : caseStudy.imageone && caseStudy.imageone.includes('pallet') ? palletproduct 
                    : caseStudy.imageone && caseStudy.imageone.includes('solar') ? solarproduct 
                    : caseStudy.imageone && caseStudy.imageone.includes('bobtail') ? bobtailproduct 
                    : caseStudy.imageone && caseStudy.imageone.includes('joyride') ? joyrideproduct 
                    : caseStudy.imageone && caseStudy.imageone.includes('digital ocean') ? doproduct 
                    : caseStudy.imageone;
    
    const box = caseStudy.imagetwo && caseStudy.imagetwo.includes('Atob') ? atobbox 
                    : caseStudy.imagetwo && caseStudy.imagetwo.includes('truckx') ? truckxbox 
                    : caseStudy.imagetwo && caseStudy.imagetwo.includes('pallet') ? palletbox 
                    : caseStudy.imagetwo && caseStudy.imagetwo.includes('solar') ? solarbox 
                    : caseStudy.imagetwo && caseStudy.imagetwo.includes('bobtail') ? bobtailbox 
                    : caseStudy.imagetwo && caseStudy.imagetwo.includes('joyride') ? joybox 
                    : caseStudy.imagetwo && caseStudy.imagetwo.includes('digital ocean') ? dobox 
                    : caseStudy.imagetwo;


    return(
        <>
       <div className={`overlayscreen ${darkMode ? 'activate' : ''}`}></div>
        <div className="left-section-control"></div>
            <div className="right-section-control">
            <Tooltip placement="leftTop" title="Share link">
            <button onClick={copyToClipboard}><img src={shareicon} alt="eye icon" width={25} height={25}/></button>
            </Tooltip>
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
<article className="study-container">
    <section className="study-material" ref={headingSectionRef}>
        <div className="study-info-container">
            {/* <div className="study-title">
                <img src={caseStudy.imagetwo} alt="" className="study-read-logo" />
                <h3 className='case-Study-Heading-reader'>{caseStudy.title}</h3>
                <p className="caese-styudy-description-reader">{caseStudy.summary}</p>
            </div> */}
            <div className="reader-casestudy-new-container">
            <div className="reader-casestudy-logo">
                    <img src={box} alt="" className='casestudyreaderimg' />
            </div> 
            <div className="reader-casestudy-heading">
            {caseStudy.title}
            </div>
            <div className="reader-casestudy-desc-new">
            {caseStudy.summary}
            </div>
            </div>


        </div>
        <div className="study-media-container">
            <img src={imageUrl} alt="" className='product-study-img'/>
        </div>       
    </section>
    <section className="study-details-container">
    <div className="study-content">
    {caseStudy.content.map((item, index) => (
                item.type === 'paragraph' ? 
                    <p key={index} className="study-details">{item.text} </p> : <h3 key={index} className='study-heading'>{item.text}</h3>
                    
            ))}
            <div class="case-more-button-container">
                <div class="case-button-study-page-back">
                <Link to="/" className='read-study-button-back'
                  > &larr; Back</Link
                >
               </div>
                <div class="case-button-study-page"> <Link to="/case-studies" className='read-study-button-back'
                  > View More Case Studies &rarr;</Link
                > </div>
              </div>
        </div>
    </section>
</article>

        </>
    )
}

export default viewCaseStudy;