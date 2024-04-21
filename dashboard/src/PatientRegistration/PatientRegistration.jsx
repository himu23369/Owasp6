import PatientRegistrationData from "../PatientRegistrationData/PatientRegistrationData";
import PatientRegistrationForm from "../PatientRegistrationForm/PatientRegistrationForm";
import NavbarBlockchain from "../NavbarBockchain/NavbarBlockchain";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  loadAccount,
  loadAllData,
  loadMedical,
  loadNetwork,
  loadProvider,
  subscribeToEvents,
} from "../store/interactions";

import config from "../config.json";
import PatientRegistrationAlert from "../PatientRegistrationAlert/PatientRegistrationAlert";
function PatientRegistration() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeBlockchainData = async () => {
      // Load provider and network information
      const provider = loadProvider(dispatch);
      if (!provider) {
        console.error("Provider is undefined");
        return;
      }
      const chainId = await loadNetwork(provider, dispatch);

      // Set up event listeners
      window.ethereum.on("accountsChanged", () => {
        loadAccount(provider, dispatch);
      });
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      // Load account and medical data
      await loadAccount(provider, dispatch);
      const medicalConfig = config[chainId]?.MedicalRecords;
      if (!medicalConfig) {
        console.error(`Medical config not found for chainId: ${chainId}`);
        return;
      }
      const medical = loadMedical(provider, medicalConfig.address, dispatch);
      loadAllData(provider, medical, dispatch);
      subscribeToEvents(medical, dispatch);
    };

    initializeBlockchainData();
  }, [dispatch]);
  return (
    <>
      <NavbarBlockchain />
      <PatientRegistrationForm />
      <PatientRegistrationData />
      <PatientRegistrationAlert />
    </>
  );
}

export default PatientRegistration;
