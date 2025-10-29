export interface Education {
  id: number;
  user_id: number;
  institution: string;
  diploma: string;
  field_of_study: string;
  grade: string | null;
  description: string;
  start_date: string;
  end_date: string | null;
  current: boolean;
}
