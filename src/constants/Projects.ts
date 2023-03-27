export type ProjectProps = {
  description: string
  githubLink: string
  viewLink: string
  image: string
}

export const Projects: ProjectProps[] = [
  {
    description: 'Galeria de filmes, consumindo a api the movies db, feito usando nextjs.',
    githubLink: 'https://github.com/MatheusCardosoc0/filmcache_remake',
    viewLink: 'https://filmcache-remake.vercel.app/',
    image: '/assets/cine_see.png'
  }
]