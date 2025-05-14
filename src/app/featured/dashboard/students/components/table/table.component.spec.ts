import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { StudentsService } from '../../../../../core/services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Student } from '../../interfaces/Student';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let mockStudentsService: jasmine.SpyObj<StudentsService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  const mockStudents: Student[] = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'juan@mail.com',
      isActive: true,
      course: 'Angular'
    }
  ];

  beforeEach(async () => {
    mockStudentsService = jasmine.createSpyObj('StudentsService', [
      'students$',
      'fetchStudentsFromApi',
      'editStudent',
      'deleteStudent'
    ]);
    mockStudentsService.students$ = of(mockStudents);

    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      providers: [
        { provide: StudentsService, useValue: mockStudentsService },
        { provide: MatDialog, useValue: mockDialog },
        { provide: 'TITLE', useValue: 'Listado de Estudiantes' }
      ],
      schemas: [NO_ERRORS_SCHEMA] // para ignorar componentes de Angular Material
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar estudiantes desde el servicio', () => {
    expect(component.dataSource.length).toBe(1);
    expect(component.dataSource[0].firstName).toBe('Juan');
  });

  it('debería llamar a fetchStudentsFromApi en ngOnInit', () => {
    expect(mockStudentsService.fetchStudentsFromApi).toHaveBeenCalled();
  });

  it('debería abrir el diálogo de confirmación al eliminar un estudiante', () => {
    mockDialog.open.and.returnValue({
      afterClosed: () => of(true)
    } as any);

    component.deleteStudent(1);
    expect(mockDialog.open).toHaveBeenCalled();
  });

  it('debería abrir el diálogo de edición al editar un estudiante', () => {
    const student = mockStudents[0];
    mockDialog.open.and.returnValue({
      afterClosed: () => of({ firstName: 'Modificado' })
    } as any);

    component.editStudent(student);
    expect(mockDialog.open).toHaveBeenCalled();
  });
});
