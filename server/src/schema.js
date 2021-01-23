const { gql } = require('apollo-server');

const types = `
  type Curso {
    titulo: String
    tecnologia: String
  }

  type Tecnologia {
    tecnologia: String
  }
`

const inputs = `
  input CursoInput {
    tecnologia: String
  }
`

const queries = `
  type Query {
    obtenerCursos(input: CursoInput!): [Curso]
  }
`


const typeDefs = gql `${types}${inputs}${queries}`;

module.exports = typeDefs;
