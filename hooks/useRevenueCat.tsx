import Purchases, { CustomerInfo, PurchasesOffering } from 'react-native-purchases';
import {useState} from "react";
import { useEffect } from 'react';
import {Platform, StyleSheet} from 'react-native';

// Just random keys, do not work, replace with your own :)
const APIKeys = {
  apple: "sk_test_welvlAXoNfPNGpKKeOAIljKJycHcv",
  google: "sk_test_welvlAXoNfPNGpKKeOAIljKJycHcv"
}

const typesOfMembership = {
  monthly: "proMonthly",
  yearly: "proYearly"
}
function useRevenueCat() {
  const [currentOffering, setCurrentOffering] = useState<PurchasesOffering | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const isProMember = customerInfo?.activeSubscriptions.includes(typesOfMembership.yearly) || customerInfo?.activeSubscriptions.includes(typesOfMembership.monthly);

  useEffect(() => {
    const fetchData = async () => {
      Purchases.setDebugLogsEnabled(true);

      if(Platform.OS === "android") {
        await Purchases.configure({ apiKey: APIKeys.google});
      } else {
        await Purchases.configure({ apiKey: APIKeys.apple});
      }

      const offerings = await Purchases.getOfferings();
      const customerInfo = await Purchases.getCustomerInfo();
      setCurrentOffering(offerings.current);
      setCustomerInfo(customerInfo);
    }
    fetchData().catch((e) => console.log(e));
  }, [])
}

export default useRevenueCat;
