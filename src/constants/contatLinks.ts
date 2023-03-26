import { BsGithub, BsLinkedin } from 'react-icons/bs'

type ContactLinksProps = {
  name: string
  link: string
  color: string
  icon: any
}

export const ContactLinks: ContactLinksProps[] = [
  {
    name: 'Github',
    color: 'bg-[#171515]',
    link: 'https://github.com/MatheusCardosoc0',
    icon: BsGithub
  },
  {
    name: 'Linkedin',
    color: 'bg-[#0e76a8]',
    link: 'https://www.linkedin.com/in/matheus-cardoso-026488244/',
    icon: BsLinkedin
  }
]