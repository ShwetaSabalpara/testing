export default [
  {
    key: 'fireehr',
    name: 'FireEHR',
    customer: 'API First Solutions',
    category: 'Software Development',
    startDate: 'February 20, 2020',
    endDate: '-',
    status: 'In-Progress',
    link: 'https://fireehr.apifirstsolutions.com',
    linkText: 'fireehr.apifirstsolutions.com',
    platform: 'Web, Desktop, Mobile',
    images: [
      { key: 'fireehr-login', image: '/images/projects-fireehr-login.jpg' },
      { key: 'fireehr-home', image:  '/images/projects-fireehr-home.jpg' },
    ],
    content: `
      <h3>HL7.org FHIR Specification</h3>

      <p>
          <a href="https://hl7.org/FHIR/" target="_blank">FHIR</a> is a standard developed by HL7 in response to the growing use of electronic health records (EHRs) 
          and aims to <i>“simplify implementation without sacrificing information integrity.”</i>
          To do this, FHIR <i>“leverages existing logical and theoretical models to provide a consistent, 
          easy to implement, and rigorous mechanism for exchanging data between healthcare applications.”</i> 
          The goal is to build a base set of resources that satisfy the majority of common use cases. 
          FHIR can be used as a stand-alone data exchange standard or in conjunction with existing standards.    
          FireEHR adheres to FHIR Specifications.
      </p>
      
      <blockquote className="wp-block-quote">
          <p className="mb-0">
              FireEHR is an integrated, scalable, secure and multi-platform Electronic Health Record Solution that can be installed locally or in the Cloud.</p>
      </blockquote>

      <h3>Features</h3>
      <div>
          <ul>
              <li>Scheduling and Appointments</li>
              <li>Patient Information and History</li>
              <li>Encounter and Clinical Observations Recording</li>
              <li>Medical and Referral Forms</li>
              <li>Billing</li>
              <li>Online Consultations</li>
              <li>Web, Desktop and Mobile platform support</li>
              <li>Mobile App for Patients</li>
              <li>On-premise or Cloud deployment options</li>
              <li>Data Security with Encryption</li>
          </ul>
          
      </div>
    `
  },

  {
    key: 'larapaymongo',
    name: 'LaraPaymongo',
    customer: 'PepperTech',
    category: 'Software Development',
    startDate: 'December 20, 2020',
    endDate: 'February 11, 2021',
    status: 'Completed',
    link: 'https://github.com/francisfueconcillo/larapaymongo',
    linkText: 'LaraPaymongo on GitHub',
    platform: 'Web',
    images: [
      { key: 'larapaymongo', image: '/images/projects-larapaymongo.jpg' },
    ],
    content: `
      <h3>Paymongo integration with Laravel</h3>

      <p>
        Paymongo is a payment gateway available in the Philippines that currently supports payments for Credit/Debit Cards, GCash and GrabPay. 
        LaraPaymongo provides an easy way to integrate Laravel website with Paymongo.
      </p>
      
      <blockquote className="wp-block-quote">
          <p className="mb-0">
            LaraPaymongo makes it easier to process online payments for e-commerce websites 
            in the Philippines using PayMongo.  
          </p>
      </blockquote>

      <h3>Features</h3>
      <div>
          <ul>
              <li>Ready-made Payment Pages and Purchase Button UI component</li>
              <li>Laravel routes, controllers views are ready-made - almost plug-and-play.</li>
              <li>Developers just need to define their application's logic before and after payments are made.
              </li>

          </ul>
          
      </div>
    `
  },



];