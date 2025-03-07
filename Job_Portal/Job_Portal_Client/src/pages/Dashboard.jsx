import React, { useEffect, useState } from 'react'
import { API } from '../config/API'
import { RxCross2 } from "react-icons/rx";
import { ImCheckboxChecked } from "react-icons/im";
const Dashboard = () => {
  const [companies, setCompanies] = useState([])
  const getCompany = async () => {
    try {
      let res = await API.get("/companies/admin/unverified")
      console.log(res);
      setCompanies(res.data)
    } catch (error) {
      console.log(error);

    }

  }
  const approved = async (id) => {
    let res = await API.put(`/companies/${id}`, { isVerified: true });
    console.log(res);

  }
  useEffect(() => {
    getCompany();
  }, []);


  return (
    <div>
      <h1>Company List</h1>
      {
        // companyName location number
        companies.map(({ companyName, location, number, _id }) => (
          <div>
            <h1>{companyName}</h1>
            <p>{location}</p>
            <p>{number}</p>
            <div>
              <button onClick={() => approved(_id)}>approved  <ImCheckboxChecked /> </button>
              <button>reject   <RxCross2 color='red' /></button>

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Dashboard