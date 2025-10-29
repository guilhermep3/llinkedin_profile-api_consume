export interface User {
  id: number
  name: string
  username: string
  email: string
  password: string
  phone?: string | null
  birth_date?: string | null
  country?: string | null
  state?: string | null
  city?: string | null
  profession: string
  bio?: string | null
  about?: string | null
  website?: string | null
  avatar?: string
  cover?: string
  verified: boolean
  created_at: string
}

export interface UserSkill {
  id: number;
  user_id: number;
  name: string;
  level: "Júnior" | "Pleno" | "Sênior";
  created_at: string;
  users?: User;
  experience_skills?: ExperienceSkill[];
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface ExperienceSkill {
  id: number;
  user_skill_id: number;
  experience_id: number;
  created_at: string;
}
