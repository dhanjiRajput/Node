import React, { useEffect, useState } from "react";
import { API } from "../config/API";
import { RxCross2 } from "react-icons/rx";
import { ImCheckboxChecked } from "react-icons/im";

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);

  const getCompany = async () => {
    try {
      let res = await API.get("/companies/admin/unverified");
      setCompanies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const approveCompany = async (id) => {
    try {
      await API.put(`/companies/${id}`, { isVerified: true });
      setCompanies(companies.filter(company => company._id !== id)); // Remove from list after approval
      alert("Company approved successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to approve company");
    }
  };

  useEffect(() => {
    getCompany();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Company List</h1>
      <div className="row">
        {companies.length > 0 ? (
          companies.map(({ companyName, location, number, _id }) => (
            <div key={_id} className="col-md-4">
              <div 
                className="card p-3 shadow"
                style={{ borderRadius: "12px", backgroundColor: "#f8f9fa" }}
              >
                <h5 className="mb-2">{companyName}</h5>
                <p className="mb-1"><strong>Location:</strong> {location}</p>
                <p className="mb-3"><strong>Contact:</strong> {number}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-success"
                    onClick={() => approveCompany(_id)}
                  >
                    Approve <ImCheckboxChecked className="ms-1" />
                  </button>
                  <button className="btn btn-danger">
                    Reject <RxCross2 className="ms-1" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No unverified companies found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
