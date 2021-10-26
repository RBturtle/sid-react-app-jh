import React, { useState, useEffect } from "react";
import PatientListItem from "./PatientListItem";

const PatientsList = () => {
  const [patients, setPatients] = useState(null);

  const fetchPatients = () => {
    // fetch("http://localhost:4000/v1/patients")
    fetch(`https://salty-fortress-39510.herokuapp.com/v1/doctors`) // doctor exercise node
      .then((response) => response.json())
      .then((result) => setPatients(result));
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <>
      <h2>Patients List</h2>
      {patients &&
        patients.map((patient) => (
          <PatientListItem key={patient.id} patient={patient} />
        ))}
    </>
  );
};

export default PatientsList;
