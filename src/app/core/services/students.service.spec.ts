import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentsService } from './students.service';
import { Student } from '../../featured/dashboard/students/interfaces/Student';
import { environment } from '../../../environments/environment.development';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpMock: HttpTestingController;

  const mockStudents: Student[] = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'juan@mail.com',
      isActive: true,
      course: 'Angular'
    },
    {
      id: 2,
      firstName: 'Ana',
      lastName: 'Gómez',
      email: 'ana@mail.com',
      isActive: false,
      course: 'React'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentsService],
    });

    service = TestBed.inject(StudentsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('debería crearse', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener estudiantes desde la API y actualizar el BehaviorSubject', () => {
    service.fetchStudentsFromApi();

    const req = httpMock.expectOne(`${environment.apiUrl}/students`);
    expect(req.request.method).toBe('GET');

    req.flush(mockStudents);

    service.students$.subscribe((students) => {
      expect(students).toEqual(mockStudents);
    });
  });

  it('debería hacer POST y luego refrescar estudiantes', () => {
    const nuevo: Student = {
      id: 3,
      firstName: 'Luis',
      lastName: 'Martínez',
      email: 'luis@mail.com',
      isActive: true,
      course: 'Vue'
    };

    service.addStudent(nuevo);

    const postReq = httpMock.expectOne(`${environment.apiUrl}/students`);
    expect(postReq.request.method).toBe('POST');
    postReq.flush(nuevo);

    const getReq = httpMock.expectOne(`${environment.apiUrl}/students`);
    expect(getReq.request.method).toBe('GET');
    getReq.flush([...mockStudents, nuevo]);
  });

  it('debería hacer PUT y luego refrescar estudiantes', () => {
    const modificado: Student = {
      id: 1,
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'juan@mail.com',
      isActive: true,
      course: 'Angular'
    };

    service.editStudent(modificado);

    const putReq = httpMock.expectOne(`${environment.apiUrl}/students/1`);
    expect(putReq.request.method).toBe('PUT');
    putReq.flush(modificado);

    const getReq = httpMock.expectOne(`${environment.apiUrl}/students`);
    expect(getReq.request.method).toBe('GET');
    getReq.flush([modificado]);
  });

  it('debería hacer DELETE y luego refrescar estudiantes', () => {
    service.deleteStudent(2);

    const delReq = httpMock.expectOne(`${environment.apiUrl}/students/2`);
    expect(delReq.request.method).toBe('DELETE');
    delReq.flush({});

    const getReq = httpMock.expectOne(`${environment.apiUrl}/students`);
    expect(getReq.request.method).toBe('GET');
    getReq.flush(mockStudents.filter(s => s.id !== 2));
  });

  it('debería devolver estudiantes como promesa', async () => {
    const promise = service.getStudentsPromise();

    const req = httpMock.expectOne(`${environment.apiUrl}/students`);
    expect(req.request.method).toBe('GET');
    req.flush(mockStudents);

    const result = await promise;
    expect(result).toEqual(mockStudents);
  });
});
