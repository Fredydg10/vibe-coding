const crearRespuesta = () => ({
  statusCode: 200,
  body: null,
  status(code) {
    this.statusCode = code;
    return this;
  },
  json(body) {
    this.body = body;
    return this;
  }
});

describe('crearTarea', () => {
  let crearTarea;

  beforeEach(() => {
    jest.resetModules();
    ({ crearTarea } = require('./tareas'));
  });

  it('crea una tarea y devuelve estado 201', () => {
    const res = crearRespuesta();
    crearTarea({ body: { titulo: ' Comprar leche ', descripcion: ' En el mercado ' } }, res);
    expect(res.statusCode).toBe(201);
    expect(res.body.titulo).toBe('Comprar leche');
    expect(res.body.descripcion).toBe('En el mercado');
  });

  it('rechaza un título vacío con estado 400', () => {
    const res = crearRespuesta();
    crearTarea({ body: { titulo: '   ', descripcion: 'Sin título' } }, res);
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('El título es obligatorio');
  });
});

describe('listarTareas', () => {
  let listarTareas;
  let crearTarea;

  beforeEach(() => {
    jest.resetModules();
    ({ listarTareas, crearTarea } = require('./tareas'));
  });

  it('lista las tareas existentes', () => {
    const resCrear = crearRespuesta();
    crearTarea({ body: { titulo: 'Estudiar', descripcion: '' } }, resCrear);
    const res = crearRespuesta();
    listarTareas({}, res);
    expect(res.statusCode).toBe(200);
    expect(res.body.total).toBe(1);
  });

  it('devuelve una lista vacía al inicio', () => {
    const res = crearRespuesta();
    listarTareas({}, res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ total: 0, tareas: [] });
  });
});

describe('completarTarea', () => {
  let completarTarea;
  let crearTarea;

  beforeEach(() => {
    jest.resetModules();
    ({ completarTarea, crearTarea } = require('./tareas'));
  });

  it('marca una tarea existente como completada', () => {
    crearTarea({ body: { titulo: 'Leer', descripcion: '' } }, crearRespuesta());
    const res = crearRespuesta();
    completarTarea({ params: { id: '1' } }, res);
    expect(res.statusCode).toBe(200);
    expect(res.body.tarea.completada).toBe(true);
  });

  it('rechaza un ID que no es numérico', () => {
    const res = crearRespuesta();
    completarTarea({ params: { id: 'abc' } }, res);
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('El ID debe ser un número válido');
  });

  it('devuelve 404 cuando la tarea no existe', () => {
    const res = crearRespuesta();
    completarTarea({ params: { id: '999' } }, res);
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toContain('no encontrada');
  });
});

describe('obtenerTareaPorId', () => {
  let obtenerTareaPorId;
  let crearTarea;

  beforeEach(() => {
    jest.resetModules();
    ({ obtenerTareaPorId, crearTarea } = require('./tareas'));
  });

  it('obtiene una tarea existente por su ID', () => {
    crearTarea({ body: { titulo: 'Correr', descripcion: '' } }, crearRespuesta());
    const res = crearRespuesta();
    obtenerTareaPorId({ params: { id: '1' } }, res);
    expect(res.statusCode).toBe(200);
    expect(res.body.titulo).toBe('Correr');
  });

  it('rechaza un ID inválido', () => {
    const res = crearRespuesta();
    obtenerTareaPorId({ params: { id: 'texto' } }, res);
    expect(res.statusCode).toBe(400);
  });

  it('devuelve 404 si el ID no corresponde a una tarea', () => {
    const res = crearRespuesta();
    obtenerTareaPorId({ params: { id: '999' } }, res);
    expect(res.statusCode).toBe(404);
  });
});
