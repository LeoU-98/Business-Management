import React , {Component} from 'react'
import './Services.css'
import b  from  './Images/b.jpg';
import f  from  './Images/f.jpg';
import ro from  './Images/ro.jpg';



export default function Services () {
    return (
        <div className="div-5">

        <div className="div-51">

            <div className="div-image-1">
                <img src={b} />
            </div>

            <div className="div-text-1">
                <h2>Tax & Book keeping</h2>
                <p>
                    Our business managers offer myriad tax and bookkeeping services that
                    address each client's unique financial, lifestyle, and/or professional
                    concerns including, but not limited to recording monthly cash-flow,
                    managing contractual and financial arrangements, ensuring IRS
                    compliance, and developing forward-thinking tax strategies.
                </p>
                <a href="https://en.wikipedia.org/wiki/Tax">
                    <button className="btn"> READ MORE</button>
                </a>
            </div>

        </div>




        <div className="div-52">

            <div className="div-image-2">
                <img src={f} />
            </div>


            <div className="div-text-2">
                <h2>Financial & Lifestyle Planning</h2>
                <p>
                    Financial & Lifestyle Planning is about just that – your lifestyle. We
                    work with you to establish your short- and long-term goals and then
                    map out a customized strategy to get you there
                </p>
                <a href="https://en.wikipedia.org/wiki/Financial_planner">
                    <button className="btn">READ MORE</button>
                </a>

            </div>

        </div>


        <div className="div-53">

            <div className="div-image-3">
                <img src={ro} />
            </div>


            <div className="div-text-3">
                <h2>Investment Administration</h2>
                <p>
                    Acting in a coordinating capacity, we also offer investment
                    administration services. Our business managers work closely with your
                    investment professionals to provide a high-level perspective. These
                    services include reviewing monthly investment reports, determining if
                    current allocations meet expressed investment goals, and identifying
                    possible duplicative strategies that create inefficiencies and
                    potential additional risk.
                </p>
                <a
                    href="https://en.wikipedia.org/wiki/Investment_management">
                    <button className="btn">READ MORE</button></a>

            </div>


        </div>





    </div>
    )
}



