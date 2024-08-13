//import { createServer } from 'node:http'

//const server = createServer((request, response) => {
    
//    response.write("galo")
    
//    return response.end()
//})

//server.listen(3333)

import { fastify } from "fastify";

const server = fastify()

server.get("/", () => {
    return "Hello World!"
})

server.get("/rasca", () => {
    return "Hello Rasca!"
})

server.get("/sula", () => {
    return "Hello Sulas!"
})

server.listen({
    port: 3333,
})