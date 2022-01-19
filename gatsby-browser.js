import React from "react";
import LeadsContext from "providers/provider.leads";

export const wrapRootElement = ({ element }) => <LeadsContext>{element}</LeadsContext>;
