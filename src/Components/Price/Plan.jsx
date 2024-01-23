import React from 'react';
import './plan.css';
import { Link } from 'react-router-dom';

const data = [
    {
      type: 'STARTUP PACKAGE 💼',
      price: '50,000 (+18% GST)',
      details: [
        'Own Domain (www.abc.com/in).',
        '20 pages Responsive website.',
        
        'Control Panel.',
        '120 conference calls in one year (10 per month). 📞',
        '24 samples in one year (2 per month). 📦',
        'Google Local Listing. 🌐',
  
        'Basic SEO. 🔍',
   
        'Language converter. 🌐',
        'Social Media Account creation. 📱',
        'No. Of products/services displayed on the website – 100. 🛒',
        'Support Person. 👩‍💼',
        '24*7 Support. 🌐',
      ],
    },
    {
      type: 'GOLD MEMBERSHIP 🏅',
      price: '25,000 (+18% GST)',
      details: [
        'Own domain (www.abc.com/in).',
        '10 pages Responsive website.',
        'No. Of products/services displayed on the website – 60. 🛒',
        '60 Conference Call in one year (5 per Month) 📞',
        '12 samples in One year (1 per month). 📦',
        'Google Local Listing. 🌐',
        'Language Converter. 🌐',
        '24*7 Support. 🌐',
      ],
    },
    {
      type: 'SUPER PACKAGE 🚀',
      price: '75,000 (+18% GST)',
      details: [
        'Own domain (www.abc.com/in).',
        '30 pages Responsive website.',
        'No. Of products/services displayed on the website – 150. 🛒',
        '240 Conference Call in one year (20 per Month). 📞',
        '60 samples in One year (5 per month). 📦',
        'Control Panel. 🎛️',
        'Payment Gateway create with integration. 💳',
        'Google Local Listing. 🌐',
        '5MB Video. 🎥',
        '10 Keywords SEO. 🔍',
        'Trust Stamp. 🛡️',
        '6 Pages Flipbook. 📖',
        'Home page Banner(1 month). 🏠',
        'Language converter. 🌐',
        'Social Media creation. 📱',
        '4 Keyword premium listing on confirm buyers.com. 🔝',
        '5 Festival Posts. 🎉',
        'Support Person. 👩‍💼',
        '24*7 Support. 🌐',
      ],
    },
   
    {
      type: 'GLOBAL PACKAGE 🌍',
      price: ' 1,40,000 (+18% GST)',
      details: [
        '📧 Three POP Email IDs',
        '🌐 B2C Integration (Amazon, Flipkart, Mesho, etc.)',
        '🌐 Documents Showcase (GST, ISO, IEC) 📄',
        '📱 Social Media Management (FB, Insta)',
        '🎉 Domestic Leads (5 Conferences/Month)',
        '🎉 Festival Posts',
        '🔍 Basic SEO',
        '📍 Google Local Listing',
        '💳 Payment Gateway Integration',
        '🔐 Trust Stamp',
        '🔄 Language Converter',
        '🌍 50 International Leads/Year',
        '📊 Visitor Hit Counter',
        '🔑 Two Premium Keywords Listing on Confirm Buyers',
      ],
    },
    {
      type: 'EXPORT PLAN 🌐',
      price: '2,50,000 (+18% GST)',
      details: [
        '🌐 Comprehensive 25-Page Website',
        '📧 Three POP Email IDs',
        '🛍️ B2C Integration (Amazon, Flipkart, Mesho, etc.)',
        '📄 Document Showcase (GST, ISO, IEC)',
        '📱 Expert Social Media Management (FB, Insta)',
        '🎉 Domestic Leads Generation (5 Conferences/Month)',
        '🎉 Festival Posts for Every Occasion',
        '🔍 Essential SEO Implementation',
        '📍 Google Local Listing for Local Visibility',
        '💳 Seamless Payment Gateway Integration',
        '🔐 Trust Stamp for Credibility',
        '🔄 Language Converter for Global Accessibility',
        '🌍 Target 50 International Leads Annually',
        '📊 Visitor Hit Counter for Website Performance Tracking',
        '🔑 Two Premium Keywords Listing on Confirm Buyers',
        '🌐 72 Guaranteed Export Buyers for Your Product',
        '🏠 Home Page Banner on confirmBuyers.com for 6 Months',
        '🛡️ Global Trust Stamp for Enhanced Trustworthiness',
        ],
    },
    {
      type:'EXPORT PLAN ',
      price:'1,75,00 (+18% Gst) ' ,
      details: [
        '🌐 Comprehensive Document Creation (GST+ ISO + IEC)',
        '🌍 Promotion in 5 Countries',
        '🚚 Shipment Solution (Start to Port)',
        '📄 50 Pages Website',
        '🔍 SEO – 15 Keywords',
        '📧 5 POP Email IDs',
        '💳 Payment Gateway Integration',
        '🏠 Home Page Banner on confirmBuyers.com for 6 Months',
        '🛍 72 Guaranteed Export Buyers of Your Product',
        '⏳ Validity: Guaranteed Buyer Otherwise Carry Forward for Future Services',
        '🛡️ Trust Stamp (Global Trust Stamp)'
      ]
    }
  ];
  

const Plans = () => {
  return (
    <div className='Plans_container'>
      <div className='plans-main'>
        <div className='plans_head'>
          <h2>Our Plans</h2>

        </div>
        <div className='Plan-container'>
          {data.map((plan, index) => (
            <div key={index} className='plan'>
              <div className='plan_head'>{plan.type}</div>
              <div className='plan_price'>{plan.price}</div>
              <ul>
                {plan.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
