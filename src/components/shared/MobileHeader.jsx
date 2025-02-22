import React, { useState } from 'react';
import mobileLogo from '../../assets/img/phi_logo.webp';

import homeicon from "../../assets/img/mobile_menu icons/home.webp";
import solutionsicon from "../../assets/img/mobile_menu icons/solutions.webp";
import aboutusicon from "../../assets/img/mobile_menu icons/information-button.webp";
import valuecreation from "../../assets/img/mobile_menu icons/creation.webp";
import careersicon from "../../assets/img/mobile_menu icons/career.webp";
import contactsicon from "../../assets/img/mobile_menu icons/contact-mail.webp";

import gtnicon from "../../assets/img/solutions icons/GTM.webp";
import finicon from "../../assets/img/solutions icons/fin.webp";
import invicon from "../../assets/img/solutions icons/Investor Relations.webp";

import blogicon from "../../assets/img/mobile_menu icons/blog.webp";
import casestudy from "../../assets/img/mobile_menu icons/case-study.webp"; 
import hricon from "../../assets/img/white_icons/human-resources.png"

import insight from "../../assets/img/mobile_menu icons/insight.webp";
import industry from "../../assets/img/mobile_menu icons/industry.webp";

import iot from "../../assets/img/white_industry_icons/iot.webp";
import iaas from "../../assets/img/white_industry_icons/iaas.webp";
import saas from "../../assets/img/white_industry_icons/saas.webp";
import devops from "../../assets/img/white_industry_icons/devops.webp";
import cloud from "../../assets/img/white_industry_icons/server.webp";
import fintech from "../../assets/img/white_industry_icons/cloud-computing.webp";

import leftArrow from "../../assets/img/mobile_menu icons/arrowLeft.webp";

const MobileHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
    const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
    const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((prev) => !prev);
    };
  
    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    const toggleSolutionsDropdown = () => {
      setIsSolutionsDropdownOpen(prev => !prev);
      setIsIndustryDropdownOpen(false);
      setIsInsightsDropdownOpen(false);
    };

    const toggleIndustryDropdown = () => {
      setIsIndustryDropdownOpen(prev => !prev);
      setIsInsightsDropdownOpen(false);
      setIsSolutionsDropdownOpen(false);
    };

    const toggleInsightsDropdown = () => {
      setIsInsightsDropdownOpen(prev => !prev);
      setIsIndustryDropdownOpen(false);
      setIsSolutionsDropdownOpen(false);
    };
  
    return (
      <header className="mobile-header">
        
       
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className="logo">
          <img src={mobileLogo} alt="Mobile Logo" width="70" height="60" />
        </div>
         
        {isMobileMenuOpen && (
          <>
            <div className={`overlay-rock ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
            <nav className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-animate' : ''}`} id="mobile-menu">
              <ul>
              <li className='list-element-mobile-menu'>
                <a href="" className="header-mobile-link" >
                 <img src={leftArrow} className='mobile-icons' alt="" width={40} height={40} onClick={closeMobileMenu}/> <p className='back-mobile-menu'>Back</p>
                </a>
              </li>
              <br />
              <li className='list-element-mobile-menu'>
                <a href="/home" className="header-mobile-link" onClick={closeMobileMenu}>
                 <img src={homeicon} className='mobile-icons' alt="" width={30} height={30}/> Home
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a className="header-mobile-link" onClick={toggleSolutionsDropdown}>
                <img src={solutionsicon} className='mobile-icons' alt="" width={32} height={32}/> Solutions
                </a>
                <div className={`mobile-dropdown-menu ${isSolutionsDropdownOpen ? 'mobile-dropdown-show' : ''}`}>
                    
                    <a href="/solutions/go-to-market-strategy" onClick={closeMobileMenu}>
                      <img src={gtnicon} className='dropdown-icon' alt="" width={28} height={28}/> <span>GTM Strategy</span>
                    </a>
                    <a href="/solutions/financial-consulting" onClick={closeMobileMenu}>
                      <img src={finicon} className='dropdown-icon' alt="" width={28} height={28}/> <span>Financial Consulting</span>
                    </a>
                    <a href="/solutions/investors-relation" onClick={closeMobileMenu}>
                      <img src={invicon} className='dropdown-icon' alt="" width={28} height={28}/> <span>Investor Relations</span>
                    </a>
                    <a href="/solutions/hr-recruitment" onClick={closeMobileMenu}>
                      <img src={hricon} className='dropdown-icon' alt="" width={28} height={28}/> <span>HR & Recruitment</span>
                    </a>
                  </div>
              </li>
              <li className='list-element-mobile-menu'>
                <a className="header-mobile-link" onClick={toggleIndustryDropdown}>
                <img src={industry} className='mobile-icons' alt="" width={32} height={32}/> Industry
                </a>
                <div className={`mobile-dropdown-menu ${isIndustryDropdownOpen ? 'mobile-dropdown-show' : ''}`}>
                    
                    <a href="/iot-consulting" onClick={closeMobileMenu}>
                      <img src={iot} className='dropdown-icon' alt="" width={28} height={28}/> <span>IoT Consulting</span>
                    </a>
                    <a href="/iaas-consulting" onClick={closeMobileMenu}>
                      <img src={iaas} className='dropdown-icon' alt="" width={28} height={28}/> <span>IaaS Consulting</span>
                    </a>
                    <a href="/saas-consulting" onClick={closeMobileMenu}>
                      <img src={saas} className='dropdown-icon' alt="" width={28} height={28}/> <span>SaaS Consulting</span>
                    </a>
                    <a href="/dev-ops-consulting" onClick={closeMobileMenu}>
                      <img src={devops} className='dropdown-icon' alt="" width={28} height={28}/> <span>DevOps Consulting</span>
                    </a>
                    <a href="/cloud-consulting" onClick={closeMobileMenu}>
                      <img src={cloud} className='dropdown-icon' alt="" width={28} height={28}/> <span>Cloud Consulting</span>
                    </a>
                    <a href="/fin-tech-consulting" onClick={closeMobileMenu}>
                      <img src={fintech} className='dropdown-icon' alt="" width={28} height={28}/> <span>FinTech Consulting</span>
                    </a>
                  </div>
              </li>
              <li className='list-element-mobile-menu'>
                <a className="header-mobile-link" onClick={toggleInsightsDropdown}>
                <img src={insight} className='mobile-icons' alt="" width={32} height={32}/> Insights
                </a>
                <div className={`mobile-dropdown-menu ${isInsightsDropdownOpen ? 'mobile-dropdown-show' : ''}`}>
                    
                    <a href="/blogs" onClick={closeMobileMenu}>
                      <img src={blogicon} className='dropdown-icon' alt="" width={28} height={28}/> <span>Blogs</span>
                    </a>
                   
                    
                  </div>
              </li>
              {/* <li className='list-element-mobile-menu'>
                <a href="/GTM-advisory" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={gtnicon} className='mobile-icons' alt="" width={32} height={32}/> GTM Strategy
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/financial-consulting" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={finicon} className='mobile-icons' alt="" width={32} height={32}/> Financial Consulting
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/investor-relations" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={invicon} className='mobile-icons' alt="" width={32} height={32}/> Investor Relations
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/hr-consulting" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={hricon} className='mobile-icons' alt="" width={32} height={32}/>  hr & Recruitment 
                </a>
              </li> */}
              <li className='list-element-mobile-menu'>
                {/* <a href="/value-creation" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={valuecreation} className='mobile-icons' alt="" width={32} height={32}/> Value Creation
                </a> */}
                 <a href="/case-studies" className="header-mobile-link" onClick={closeMobileMenu}>
                      <img src={casestudy} className='mobile-icons' alt="" width={32} height={32}/> <span>Case Studies</span>
                    </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/about-us" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={aboutusicon} className='mobile-icons' alt="" width={30} height={30}/> About Us
                </a>
              </li>
              {/* <li className='list-element-mobile-menu'>
                <a href="/blogs" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={blogicon} className='mobile-icons' alt="" width={32} height={32}/> Blogs
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/casestudies" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={casestudy} className='mobile-icons' alt="" width={32} height={32}/> Case Studies
                </a>
              </li> */}
              <li className='list-element-mobile-menu'>
                <a href="/careers" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={careersicon} className='mobile-icons' alt="" width={32} height={32}/> Careers
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/contact-us" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={contactsicon} className='mobile-icons' alt="" width={32} height={32}/>  Contact
                </a>
              </li>
              </ul>
            </nav>
          </>
        )}
      </header>
    );
  };
  

export default MobileHeader;
