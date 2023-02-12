import { useState } from "react";
import "./contact.css"
import Enq from "./enq.png"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Contact(){

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [message, setmessage] = useState()

    

    const sendMail = ()=>{
        try{
            emailjs.send("service_m7uqy57","template_6o78rcf",{
                to_name: name,
                to: email,
                message:message
                }, "hRcKnAV69Z_70PhUZ");
            toast("Email Sent !!");
        } catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <div className="container">
                <div className="ImageRight">
                    <img src ={Enq} />
                </div>
                <div className="left">
                    <div className="title">
                        <h2>Need Help ?</h2>
                        <div className="des">
                            <div className="des1">
                                Vital Veggies is always looking to make things easier for you. Our aim is to provide our customers with the best.
                            </div>
                        </div>
                    </div>
                    <div className="querybox">
                        <label className="queryT">Type of Query:</label>
                        <input className="query1" type="radio"/>Complaint
                        <input className="query2" type="radio"/>Enquiry
                    </div>
                    <div className="formParent">
                        <form className="Form">
                            <input className="name" placeholder="Name*" required
                                onChange={(e)=>{setName(e.target.value)}}
                            />
                            <input className="email" placeholder="Email*" required
                                onChange={(e)=>{setEmail(e.target.value)}}
                            /><br/>
                            <input className="message" placeholder="Message*" required
                                onChange={(e)=>{setmessage(e.target.value)}}
                            /><br/>
                        </form>
                    </div><br/>
                    <div className="Submit">
                        <button
                            onClick={()=>{
                                sendMail()
                            }}
                        >Submit</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}