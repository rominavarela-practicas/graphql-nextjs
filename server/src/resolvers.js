const data = [
  {
    titulo: 'curso 1',
    tecnologia: 'react',
  },
  {
    titulo: 'curso 2',
    tecnologia: 'node',
  },
  {
    titulo: 'curso 3',
    tecnologia: 'js',
  }
]

const resolvers = {
  Query: {
    obtenerCursos: (_, args, context) => data.filter(curso => curso.tecnologia === args.input.tecnologia),
  }
};

module.exports = resolvers;
