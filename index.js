var express = require('express'),
app = express(),
http = require('http'),
server = http.createServer(app),
stylus = require('stylus'),
nib = require('nib')

//definir carpeta para vistas
app.set('views', __dirname + '/vistas')

//motor de
app.set('view engine', 'jade')

//ruta estaticos
app.use(express.static('public'))

function compile(str, path) {
	return stylus(str)
	.set('filename', path)
	.use(nib())
}

//app.use(express.logger('dev'))
app.use(stylus.middleware(
	{ src: __dirname + '/public'
	, compile: compile
}
))


function inicio(request, response,next) {
	response.render('index')
}
function listadoCursos(request, response,next) {
	response.render('todosLosCursos')
}
function todosLosEjercicios(request, response,next) {
	response.render('todosLosEjercicios')
}
function ejercicioConjuntos(request, response,next) {
	response.render('ejercicios/conjuntos')
}
function ejercicioGrafos(request, response,next) {
	response.render('ejercicios/grafos')
}
function ejercicioCalculoProposicional(request, response,next) {
	response.render('ejercicios/calculoProposicional')
}
function ejercicioTablasDeVerdad(request, response,next) {
	response.render('ejercicios/tablasDeVerdad')
}
function cursoConjuntos(request, response,next) {
	response.render('cursos/conjuntos')
}
function cursoGrafos(request, response,next) {
	response.render('cursos/grafos')
}
function cursoCalculoProposicional(request, response,next) {
	response.render('cursos/calculoProposicional')
}
function cursoTablasDeVerdad(request, response,next) {
	response.render('cursos/tablasDeVerdad')
}

app.get('/',inicio)

app.get('/cursos',listadoCursos)
app.get('/cursos/conjuntos',cursoConjuntos)
app.get('/cursos/grafos',cursoGrafos)
app.get('/cursos/calculoProposicional',cursoCalculoProposicional)
app.get('/cursos/tablasDeVerdad',cursoTablasDeVerdad)

app.get('/ejercicios',todosLosEjercicios)
app.get('/ejercicioss/conjuntoss',ejercicioConjuntos)
app.get('/ejercicios/grafos',ejercicioGrafos)
app.get('/ejercicios/calculoProposicional',ejercicioCalculoProposicional)
app.get('/ejercicios/tablasDeVerdad',ejercicioTablasDeVerdad)

app.get('*', function(req, res){
	console.log("recurso no encontrado")
})

server.listen(8000,function() {
	console.log('Run server in port 8000');
})

