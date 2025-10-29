import { Bell, BriefcaseBusiness, Group, House } from "lucide-react";

export const headerNavData = [
  {
    id: 1,
    name: 'Início',
    pathname: '/feed',
    icon: House
  },
  {
    id: 2,
    name: 'Grupos',
    pathname: '/groups',
    icon: Group
  },
  {
    id: 3,
    name: 'Vagas',
    pathname: '/vacancies',
    icon: BriefcaseBusiness
  },
  {
    id: 4,
    name: 'Notificações',
    pathname: '/notifications',
    icon: Bell
  },
]