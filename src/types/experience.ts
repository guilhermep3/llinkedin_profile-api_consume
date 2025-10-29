export interface Experience {
  id: number;
  user_id: number;
  company_id: number;
  role: string;
  description: string;
  start_date: string; // formato ISO (ex: "2023-08-01")
  end_date: string | null; // pode ser null se ainda estiver no cargo
  current: boolean;
}