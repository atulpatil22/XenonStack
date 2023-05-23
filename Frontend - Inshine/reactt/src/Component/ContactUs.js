import React from "react";
import '../Css/ContactUs.css';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Api from "../Api";
import '../Css/Login.css'

function ContactUs() {
    let navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(Api + 'contact',data).then((result)=>{
            console.log(result);
            navigate('/');
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>


            <body>
                
            <form action="/contact" method="Post" enctype = "multipart/form-data"  onSubmit={handleSubmit(onSubmit)}>

<input type="email" class="form-control" name="contact_email" placeholder="Enter your Email Id" {...register("contact_email", { required: true })}/>
{errors.contact_email?.type === 'required' && <p role="alert">Email Id is required*</p>}
<input type="tel" class="form-control" name="contact_phone" placeholder="Enter your Mobile No" {...register("contact_phone", { required: true })}/>
{errors.contact_phone?.type === 'required' && <p role="alert">Mobile Number is required*</p>}
<input type="text" class="form-control" name="contact_message" placeholder="Enter your Message" {...register("contact_message", { required: true })}/>
{errors.contact_message?.type === 'required' && <p role="alert">Message is required*</p>}

<br/>
<button class="btn btn-primary">Submit</button>
<br/>
<br/>
</form>



            </body>

        </div>
    );
}

export default ContactUs;
