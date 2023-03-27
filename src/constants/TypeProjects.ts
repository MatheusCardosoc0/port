import { RiComputerFill, RiSmartphoneFill } from 'react-icons/ri'

type TypeProjectsProps = {
  icon: any
  title: string
}

export const typeProjects: TypeProjectsProps[] = [
  {
    icon: RiComputerFill,
    title: 'Desenvolvimento web'
  },
  {
    icon: RiSmartphoneFill,
    title: 'Desenvolvimeto mobile'
  }
] 