export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  issue_date: string | null;
  user_id: number;
  image?: string;
  credential: string;
}
