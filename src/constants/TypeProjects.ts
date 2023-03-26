import { RiCommandFill, RiComputerFill, RiSmartphoneFill } from 'react-icons/ri'

type TypeProjectsProps = {
  icon: any
  title: string
}

export const typeProjects: TypeProjectsProps[] = [
  {
    icon: RiComputerFill,
    title: 'Projetos web'
  },
  {
    icon: RiSmartphoneFill,
    title: 'Projetos mobile'
  }
] 