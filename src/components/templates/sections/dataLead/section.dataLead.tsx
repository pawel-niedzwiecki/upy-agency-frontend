import React, { useEffect, useContext } from "react";
import { LeadsContext } from "providers/provider.leads";

const SectionDataLeadComponent = () => {
  const { chosenServices, setServices } = useContext(LeadsContext);
  useEffect(() => console.log(chosenServices), [chosenServices]);

  return <>ok</>;
};

export default SectionDataLeadComponent;
