import { TeacherController } from '../controllers/teacher.controller';
import { LessonController } from '../controllers/Lesson.controller';
import { ClassroomController } from '../controllers/Classroom.controller';
import { RoutesOptionsType } from '../types/routes';

export const routes = ({app}: RoutesOptionsType) => {

  app.post('/api/teacher', async (req, res) => {
    const teacher = await TeacherController.createTeacher({
      firstNameTeacher: req.body.firstNameTeacher,
      surNameTeacher: req.body.surNameTeacher,
      lastNameTeacher: req.body.lastNameTeacher,
      emailTeacher: req.body.emailTeacher,
      ageTeacher: req.body.ageTeacher,
      sexTeacher: req.body.sexTeacher,
      yearOfExpTeacher: req.body.yearOfExpTeacher,
      workedInUniverTeacher: req.body.workedInUniverTeacher,
      canTeachSubjects: req.body.canTeachSubjects,
    });

    return res.send(teacher);
  }),

  app.put('/api/teacher/:id', async (req, res) => {
    const teacher = await TeacherController.updateTeacherById(req.params.id);

    return res.send(teacher);
  }),

  app.get('/api/teacher', async (req, res) => {
    const teacher = await TeacherController.getAllTeacher();

    return res.send(teacher);
  }),

  app.get('/api/teacher-by-condition', async (req, res) => {
    const teacher = await TeacherController.getTeacherByCondition();

    return res.send(teacher);
  }),

  app.get('/api/teacher/:id', async (req, res) => {
    const teacher = await TeacherController.getTeacherById(req.params.id);

    return res.send(teacher);
  }),


  app.delete('/api/teacher/:id', async (req, res) => {
    const teacher = await TeacherController.removeTeacherById(req.params.id);

    return res.send(teacher); 
  }),

  app.post('/api/lesson', async (req, res) => {
    const lesson = await LessonController.createLesson({
      lessonName: req.body.lessonName,
      lessonDayOfWeek: req.body.lessonDayOfWeek,
      numberOfSemester: req.body.numberOfSemester,
      nameOfGroupStudents: req.body.nameOfGroupStudents,
      lessonTime: req.body.lessonTime,
      chatIdLesson: req.body.chatIdLesson,
      teacherId: req.body.teacherId,
      classRoomId: req.body.classRoomId
    });

    return res.send(lesson);
  }),

  app.put('/api/lesson/:id', async (req, res) => {
    const lesson = await LessonController.updateLessonById(req.params.id);

    return res.send(lesson);
  }),

  app.get('/api/lesson/:id', async (req, res) => {
    const lesson = await LessonController.getLessonById(req.params.id);

    return res.send(lesson);
  }),

  app.get('/api/lesson/', async (req, res) => {
    const lesson = await LessonController.getAllLesson();

    return res.send(lesson);
  }),

  app.delete('/api/lesson/:id', async (req, res) => {
    const lesson = await LessonController.removeLessonById(req.params.id);

    return res.send(lesson); 
  }),

  app.post('/api/classroom', async (req, res) => {
    const classroom = await ClassroomController.createClassroom({
      numberClassRoom: req.body.numberClassRoom,
      nameClassRoom: req.body.nameClassRoom,
      numberFloorClassRoom: req.body.numberFloorClassRoom,
      capacityClassRoom: req.body.capacityClassRoom,
    });

    return res.send(classroom);
  }),

  app.put('/api/classroom/:id', async (req, res) => {
    const classroom = await ClassroomController.updateClassroomById(req.params.id);

    return res.send(classroom);
  }),

  app.get('/api/classroom', async (req, res) => {
    const classroom = await ClassroomController.getAllClassroom();

    return res.send(classroom);
  }),

  app.get('/api/classroom/:id', async (req, res) => {
    const classroom = await ClassroomController.getClassroomById(req.params.id);

    return res.send(classroom);
  }),

  app.delete('/api/classroom/:id', async (req, res) => {
    const classroom = await ClassroomController.removeClassroomById(req.params.id);

    return res.send(classroom); 
  })
}