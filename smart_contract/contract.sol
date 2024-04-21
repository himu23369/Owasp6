// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ehr {
    struct Doctor {
        uint256 id;
        string name;
        string specialisation;
        uint256 phoneNumber;
        string doctorAddress;
    }

    struct Patient {
        uint256 id;
        string name;
        uint256 age;
        string gender;
        uint256 phoneNo;
        string emailId;
        string date;
        uint256 doctorId;
        string diagnosis;
        string treatment;
    }

    mapping(uint256 => Doctor) public doctors;
    mapping(uint256 => Patient) public patients;
    uint256 public totalDoctors;
    uint256 public totalPatients;

    function addDoctor(
        string memory _name,
        string memory _specialisation,
        uint256 _phoneNumber,
        string memory _doctorAddress
    ) public {
        totalDoctors++;
        doctors[totalDoctors] = Doctor({
            id: totalDoctors,
            name: _name,
            specialisation: _specialisation,
            phoneNumber: _phoneNumber,
            doctorAddress: _doctorAddress
        });
    }

    function addPatient(
        string memory _name,
        uint256 _age,
        string memory _gender,
        uint256 _phoneNo,
        string memory _emailId,
        string memory _date,
        uint256 _doctorId
    ) public {
        require(doctors[_doctorId].id != 0, "Invalid doctor ID"); // Check if the doctor with given ID exists
        totalPatients++;
        uint256 id = totalPatients;
        patients[id] = Patient({
            id: id,
            name: _name,
            age: _age,
            gender: _gender,
            phoneNo: _phoneNo,
            emailId: _emailId,
            date: _date,
            doctorId: _doctorId,
            diagnosis: "-",
            treatment: "-"
        });
    }

    function updateDiagnosis(uint256 _patientId, string memory _diagnosis) public {
        require(_patientId <= totalPatients && _patientId > 0, "Invalid patient ID");
        patients[_patientId].diagnosis = _diagnosis;
    }

    function updateTreatment(uint256 _patientId, string memory _treatment) public {
        require(_patientId <= totalPatients && _patientId > 0, "Invalid patient ID");
        patients[_patientId].treatment = _treatment;
    }

    function getDoctorDetails(uint256 _id) public view returns (
        uint256 id,
        string memory name,
        string memory specialisation,
        uint256 phoneNumber,
        string memory doctorAddress
    ) {
        Doctor memory doctor = doctors[_id];
        return (
            doctor.id,
            doctor.name,
            doctor.specialisation,
            doctor.phoneNumber,
            doctor.doctorAddress
        );
    }

    function getPatientDetails(uint256 _id) public view returns (
        uint256 id,
        string memory name,
        uint256 age,
        string memory gender,
        uint256 phoneNo,
        string memory emailId,
        string memory date,
        uint256 doctorId,
        string memory diagnosis,
        string memory treatment
    ) {
        Patient memory patient = patients[_id];
        return (
            patient.id,
            patient.name,
            patient.age,
            patient.gender,
            patient.phoneNo,
            patient.emailId,
            patient.date,
            patient.doctorId,
            patient.diagnosis,
            patient.treatment
        );
    }

    function getDoctorCount() public view returns (uint256) {
        return totalDoctors;
    }

    function getPatientCount() public view returns (uint256) {
        return totalPatients;
    }

    function getAllPatientDetails() public view returns (Patient[] memory) {
        Patient[] memory allPatients = new Patient[](totalPatients);

        for (uint256 i = 1; i <= totalPatients; i++) {
            allPatients[i - 1] = patients[i];
        }

        return allPatients;
    }

    function deletePatient(uint256 _patientId) public {
    require(_patientId <= totalPatients && _patientId > 0, "Invalid patient ID");
    
    patients[_patientId] = patients[totalPatients];
    delete patients[totalPatients];
    totalPatients--;
    
    for (uint256 i = _patientId; i <= totalPatients; i++) {
        patients[i].id = i;
    }
}

}