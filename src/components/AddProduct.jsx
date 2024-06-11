import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddProduct = () => {
    const [data, setData] = useState(
        {
            "ptitle":"",
            "pcode":"",
            "pdescription":"",
            "pprice":"",
            "dname":""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully")

                } else {
                    alert("Error")

                }
            }
        ).catch()
    }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <h1>
                                <u>
                                    <center>Product Details</center>
                                </u>
                            </h1>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Product Title</label>
                                <input type="text" className="form-control" name='ptitle' value={data.ptitle} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Product Code</label>
                                <input type="text" className="form-control" name='pcode' value={data.pcode} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Product Description</label>
                                <input type="text" className="form-control" name='pdescription' value={data.pdescription} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Price</label>
                                <input type="text" className="form-control" name='pprice' value={data.pprice} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                                <label htmlFor="" className="form-label">Distributor Name</label>
                                <input type="text" className="form-control" name='dname' value={data.dname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct