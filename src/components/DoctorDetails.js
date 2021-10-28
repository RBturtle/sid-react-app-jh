import React from "react";

const DoctorDetails = ({ name, dob, specialty, address }) => {
  const { street, city, province, postal_code } = address;

  return (
    <>
      <h5>Testing - name: {name}</h5>
      <h5>Date of Birth: {dob}</h5>
      <h5>Specialty: {specialty}</h5>
      <h5>
        Address: {street}, {city}, {province} {postal_code}
      </h5>
    </>
  );
};

export default DoctorDetails;
