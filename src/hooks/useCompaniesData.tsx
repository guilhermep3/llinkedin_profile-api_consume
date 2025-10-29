import { Company } from "@/types/company";
import axios from "axios";
import { useEffect, useState } from "react";

export function useCompaniesData() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [companies, setCompanies] = useState<Company[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const companiesData = await axios.get("/data/companies.json");
        setCompanies(companiesData.data);
      } catch (error: any) {
        console.log("erro ao pegar dados das empresas: ", error)
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])

  return { isLoading, companies }
}