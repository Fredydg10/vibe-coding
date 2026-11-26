const request = require('supertest');

describe('API de Tareas', () => {
  let app;

  beforeEach(() => {
    jest.resetModules();
    app = require('../server');
  });

  it('POST /api/tareas crea una tarea', async () => {
    const res = await request(app).post('/api/tareas')
      .send({ titulo: 'Test E2E', descripcion: 'Descripción' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.titulo).toBe('Test E2E');
  });

  it('GET /api/tareas devuelve la lista de tareas', async () => {
    await request(app).post('/api/tareas').send({ titulo: 'Tarea de lista' });
    const res = await request(app).get('/api/tareas');
    expect(res.status).toBe(200);
    expect(res.body.total).toBe(1);
    expect(Array.isArray(res.body.tareas)).toBe(true);
  });

  it('POST /api/tareas rechaza un título vacío', async () => {
    const res = await request(app).post('/api/tareas').send({ titulo: '   ' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('El título es obligatorio');
  });
});
