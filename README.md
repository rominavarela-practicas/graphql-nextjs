# React Avanzado: Fullstack Next.js, Apollo, MongoDB y GraphQL

https://www.udemy.com/course/fullstack-react-graphql-y-apollo-de-principiante-a-experto/

## Playground Queries

### Basic Synthax

Query:
```
query {
  obtenerCursos(input: { tecnologia: "js"}) {
    titulo
    tecnologia
  }
}
```

### With Variables

Query:
```
query obtenerCursos($input: CursoInput!) {
  obtenerCursos(input: $input) {
    titulo
    tecnologia
  }
}
```

Query Variables:
```
{
  "input": {
  	"tecnologia": "js"
	}
}
```
