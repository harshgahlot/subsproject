import React, { useState } from "react";
import '../src/home.css';



function Home(){
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
        setIsYearly(!isYearly);
    };

    const handleColHover = (index) => {
        if (index > 0) {
            const tableRows = document.querySelectorAll(".tab tr");
            
            tableRows.forEach((row) => {
                const cells = row.querySelectorAll("td");
                if (cells[index]) {
                    cells[index].classList.add("col-hover");
                }
            });
        }
    };

    const handleColLeave = () => {
        const tableCells = document.querySelectorAll(".tab td");
        tableCells.forEach((cell) => {
            cell.classList.remove("col-hover");
        });
    };


    return(

        <div>
        <h4>Choose the right plan for you</h4>

        <div className="con">
            <div className="but">
            <div className="slider-container" onClick={handleToggle}>
            <div className={`slider ${isYearly ? 'yearly' : 'monthly'}`}></div>
            <div className="options">
            <span className={`option ${isYearly ? 'yearly-text' : 'monthly-text'}`}>Monthly</span>
                <span className={`option ${isYearly ? 'monthly-text' : 'yearly-text'}`}>Yearly</span>
            </div>
        </div>
           
       </div>
       <div className="container">
                <div className="row">
                    <div className="col-sm" onMouseEnter={() => handleColHover(1)} onMouseLeave={handleColLeave}>
                        Mobile
                    </div>
                    <div className="col-sm" onMouseEnter={() => handleColHover(2)} onMouseLeave={handleColLeave}>
                        Basic
                    </div>
                    <div className="col-sm" onMouseEnter={() => handleColHover(3)} onMouseLeave={handleColLeave}>
                        Standard
                    </div>
                    <div className="col-sm" onMouseEnter={() => handleColHover(4)} onMouseLeave={handleColLeave}>
                        Premium
                    </div>
                </div>
            </div>
</div>
<div className="cont">
<div className="table-wrapper">
    <table className="tab">
        <tr>
            <td>{isYearly ? "Yearly Price" : "Monthly Price"}</td>        
            <td>{isYearly ? "1000" : "100"}</td>
            <td>{isYearly ? "2000" : "200"}</td>
            <td>{isYearly ? "5000" : "500"}</td>
            <td>{isYearly ? "7000" : "700"}</td>
        </tr>
        <tr>
            <td>video quality</td>
            <td>Good</td>
            <td>Good</td>
            <td>Better</td>
            <td>Best</td>
        </tr>
        <tr>
            <td>Resolution</td>
            <td>480p</td>
            <td>480p</td>
            <td>1080p</td>
            <td>4k+HDR</td>
        </tr>
        <tr>
            <td>Devices you can use to watch</td>
            <td>Phone</td>
            <td>Phone</td>
            <td>Phone</td>
            <td>Phone</td>
        </tr>
        <tr>
            <td></td>
            <td>Tablet</td>
            <td>Tablet</td>
            <td>Tablet</td>
            <td>Tablet</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Computer</td>
            <td>Computer</td>
            <td>Computer</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>TV</td>
            <td>TV</td>
            <td>TV</td>
        </tr>
    </table>
</div>
</div>
<div className="bn">
<button className="butn">Next</button>
</div>
</div>

    )
}

export default Home;