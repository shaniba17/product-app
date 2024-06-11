import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewProduct = () => {
    const [data, changedata] = useState([])
    const fetchData = () => {
        axios.get("").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
  return (
    <div>
         <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product Title</th>
                        <th scope="col">Product Code</th>
                        <th scope="col">Product Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Distributor Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (value, index) => {
                                return <tr>
                                    <td>{value.ptitle}</td>
                                    <td>{value.pcode}</td>
                                    <td>{value.pdescription}</td>
                                    <td>{value.pprice}</td>
                                    <td>{value.dname}</td>
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
    </div>
  )
}

export default ViewProduct