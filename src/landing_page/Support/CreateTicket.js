import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container fw-light'>
            <h1 className='text-muted fs-5 mt-5 mb-5'>To create a ticket, select a relevant topic</h1>
            <div className='row'>
                <div className='col'>
                    <h2 className='fs-4 mb-4 ticket-topic'>
                        <a href='' className='text-decoration-none text-reset'> 
                           <i class="fa-solid fa-circle-plus me-2"></i>
                            Account Opening
                        </a>
                    </h2>
                    <ul className='list-unstyled lh-lg ps-4 fw-normal'>
                        <li><a href='' className='text-decoration-none'>Getting started</a></li>
                        <li><a href='' className='text-decoration-none'>Online</a></li>
                        <li><a href='' className='text-decoration-none'>Offline</a></li>
                        <li><a href='' className='text-decoration-none'>Charges</a></li>
                        <li><a href='' className='text-decoration-none'>Company, Partnership and HUF</a></li>
                        <li><a href='' className='text-decoration-none'>Non Resident Indian (NRI)</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <h2 className='fs-4 mb-4 ticket-topic'>
                        <a href='' className='text-decoration-none text-reset'> 
                        <i class="fa-regular fa-user me-2"></i>
                            Your AlphaTrade Account
                        </a>
                    </h2>
                    <ul className='list-unstyled lh-lg ps-4 fw-normal' >
                        <li><a href='' className='text-decoration-none'>Login credentials</a></li>
                        <li><a href='' className='text-decoration-none'>Account modification and segment addition</a></li>
                        <li><a href='' className='text-decoration-none'>CMR & DP ID</a></li>
                        <li><a href='' className='text-decoration-none'>Nomination</a></li>
                        <li><a href='' className='text-decoration-none'>Transfer and conversion of shares</a></li>
                        
                    </ul>
                </div>
                <div className='col'>
                    <h2 className='fs-4 mb-4 ticket-topic'>
                        <a href='' className='text-decoration-none text-reset'> 
                        <i class="fa-solid fa-chart-simple me-2"></i>
                           Trading and Markets
                        </a>
                    </h2>
                    <ul className='list-unstyled lh-lg ps-4 fw-normal'>
                        <li><a href='' className='text-decoration-none'>Trading FAQs</a></li>
                        <li><a href='' className='text-decoration-none'>AlphaKite</a></li>
                        <li><a href='' className='text-decoration-none'>Margins</a></li>
                        <li><a href='' className='text-decoration-none'>Product and order types</a></li>
                        <li><a href='' className='text-decoration-none'>Corporate actions</a></li>
                        <li><a href='' className='text-decoration-none'>AlphaKite features</a></li>
                        
                    </ul>
                </div>

            </div>


            <div className='row mt-5 mb-5'>
                <div className='col'>
                    <h2 className='fs-4 mb-4 ticket-topic'>
                        <a href='' className='text-decoration-none text-reset'> 
                        <i class="fa-solid fa-wallet me-2"></i>
                           Funds
                        </a>
                    </h2>
                    <ul className='list-unstyled lh-lg ps-4 fw-normal'>
                        <li><a href='' className='text-decoration-none'>Fund withdrawal</a></li>
                        <li><a href='' className='text-decoration-none'>Adding funds</a></li>
                        <li><a href='' className='text-decoration-none'>Adding bank accounts</a></li>
                        <li><a href='' className='text-decoration-none'>eMandates</a></li>
                        
                    </ul>
                </div>
                <div className='col'>
                    <h2 className='fs-4 mb-4 ticket-topic'>
                        <a href='' className='text-decoration-none text-reset'> 
                        <i class="fa-brands fa-chrome me-2"></i>
                           Console
                        </a>
                    </h2>
                    <ul className='list-unstyled lh-lg ps-4 fw-normal' >
                        <li><a href='' className='text-decoration-none'>IPO</a></li>
                        <li><a href='' className='text-decoration-none'>Portfolio</a></li>
                        <li><a href='' className='text-decoration-none'>Funds statement</a></li>
                        <li><a href='' className='text-decoration-none'>Profile</a></li>
                        <li><a href='' className='text-decoration-none'>Reports</a></li>
                        <li><a href='' className='text-decoration-none'>Referral program</a></li>
                        
                    </ul>
                </div>
                <div className='col'>
                    <h2 className='fs-4 mb-4 ticket-topic'>
                        <a href='' className='text-decoration-none text-reset'> 
                        <i class="fa-regular fa-circle me-2"></i>
                           Coin
                        </a>
                    </h2>
                    <ul className='list-unstyled lh-lg ps-4 fw-normal'>
                        <li><a href='' className='text-decoration-none'>Understanding mutual funds and Coin</a></li>
                        <li><a href='' className='text-decoration-none'>Coin app</a></li>
                        <li><a href='' className='text-decoration-none'>Coin web</a></li>
                        <li><a href='' className='text-decoration-none'>Transactions and reports</a></li>
                        <li><a href='' className='text-decoration-none'>Corporate actions</a></li>
                        <li><a href='' className='text-decoration-none'>National Pension Scheme (NPS)
                        </a></li>
                        
                    </ul>
                </div>

            </div>
        </div>
     );
}

export default CreateTicket;