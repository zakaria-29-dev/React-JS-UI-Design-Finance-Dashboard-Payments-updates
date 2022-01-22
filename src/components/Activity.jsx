import React from 'react'
import styled from 'styled-components'
import { MdOutlineWaterDrop } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiOutlineWifi } from "react-icons/ai";


function Activity() {
    return (
        <Section>
            <div className='title'>
                <h4>Recent Activities</h4>
                <h6>10 Jan 2022</h6>
            </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <MdOutlineWaterDrop />
                </div>
                <div className="content">
                    <h5>Water Bill</h5>
                    <h5 className='color'>Successfully</h5>
                </div>
               
            </div>
            <div className="money">
                    <h5>$120</h5>
                   
                </div>
          
        </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <GiPayMoney />
                </div>
                <div className="content">
                    <h5>Income Salary</h5>
                    <h5 className='color'>Received</h5>
                </div>
                
            </div>
            <div className="money">
                    <h5>$4500</h5>
                   
                </div>
          
        </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <AiOutlineThunderbolt />
                </div>
                <div className="content">
                    <h5>Electric Bill</h5>
                    <h5 className='color'>Successfully</h5>
                </div>
               
            </div>
            <div className="money">
                    <h5>$150</h5>
                   
                </div>
          
        </div>
        <div className="analytic ">
            <div className="design">
                <div className="logo">
                    <AiOutlineWifi />
                </div>
                <div className="content">
                    <h5>Internet Bill</h5>
                    <h5 className='color'>Successfully</h5>
                </div>
                
            </div>
            <div className="money">
                    <h5>$60</h5>
                   
                </div>
          
        </div>
        
        
      
        
   
    </Section>
    )
}

export default Activity
const Section = styled.section `
    display: grid;
    gap: 0.2rem;
    .title{
        margin-left: 15px;
        h4{
            font-weight:bold;
        }
        h6{
            color: grey;
        }
    }
    .analytic {
        padding: 0.3rem 0.8rem 0.3rem 1.2rem;
        
        color: black;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
        transition: 0.5s ease-in-out;
        &:hover {
            background-color: #F5F5FD;
            color: black;
            svg {
                color: black;
            }
        }
        float: both;
        .design{
            display: flex;
            align-items: center;  
            gap:1rem;
            .logo{
                background-color: white;
                border-radius: 1rem;
                border: 1px solid white;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.5rem;
                svg{
                    font-size: 1.5rem;
                }

            }
            .color{
                color: grey
            }
        }
        .money{
            h5{
                float: right;
                margin-top: -30px;
            }
        }
        
        
        
    }
    
`;
