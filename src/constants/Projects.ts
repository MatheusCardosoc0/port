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
  },
  {
    description: 'Pokedex listando todos os pokemons na pokeApi, com sistema de busca e um sistema de filtros por tipo, peso e altura.',
    githubLink: 'https://github.com/MatheusCardosoc0/pokemon_project',
    image: '/assets/pokedex.png',
    viewLink: 'https://pokemon-project-liart.vercel.app/'
  }
]