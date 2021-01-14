"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var teacher_controller_1 = require("../controllers/teacher.controller");
var Lesson_controller_1 = require("../controllers/Lesson.controller");
var Classroom_controller_1 = require("../controllers/Classroom.controller");
var routes = function (_a) {
    var app = _a.app;
    app.post('/api/teacher', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var teacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, teacher_controller_1.TeacherController.createTeacher({
                        firstNameTeacher: req.body.firstNameTeacher,
                        surNameTeacher: req.body.surNameTeacher,
                        lastNameTeacher: req.body.lastNameTeacher,
                        emailTeacher: req.body.emailTeacher,
                        ageTeacher: req.body.ageTeacher,
                        sexTeacher: req.body.sexTeacher,
                        yearOfExpTeacher: req.body.yearOfExpTeacher,
                        workedInUniverTeacher: req.body.workedInUniverTeacher,
                        canTeachSubjects: req.body.canTeachSubjects,
                    })];
                case 1:
                    teacher = _a.sent();
                    return [2 /*return*/, res.send(teacher)];
            }
        });
    }); }),
        app.put('/api/teacher/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var teacher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, teacher_controller_1.TeacherController.updateTeacherById(req.params.id)];
                    case 1:
                        teacher = _a.sent();
                        return [2 /*return*/, res.send(teacher)];
                }
            });
        }); }),
        app.get('/api/teacher', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var teacher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, teacher_controller_1.TeacherController.getAllTeacher()];
                    case 1:
                        teacher = _a.sent();
                        return [2 /*return*/, res.send(teacher)];
                }
            });
        }); }),
        app.get('/api/teacher-by-condition', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var teacher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, teacher_controller_1.TeacherController.getTeacherByCondition()];
                    case 1:
                        teacher = _a.sent();
                        return [2 /*return*/, res.send(teacher)];
                }
            });
        }); }),
        app.get('/api/teacher/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var teacher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, teacher_controller_1.TeacherController.getTeacherById(req.params.id)];
                    case 1:
                        teacher = _a.sent();
                        return [2 /*return*/, res.send(teacher)];
                }
            });
        }); }),
        app.delete('/api/teacher/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var teacher;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, teacher_controller_1.TeacherController.removeTeacherById(req.params.id)];
                    case 1:
                        teacher = _a.sent();
                        return [2 /*return*/, res.send(teacher)];
                }
            });
        }); }),
        app.post('/api/lesson', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var lesson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Lesson_controller_1.LessonController.createLesson({
                            lessonName: req.body.lessonName,
                            lessonDayOfWeek: req.body.lessonDayOfWeek,
                            numberOfSemester: req.body.numberOfSemester,
                            nameOfGroupStudents: req.body.nameOfGroupStudents,
                            lessonTime: req.body.lessonTime,
                            chatIdLesson: req.body.chatIdLesson,
                            teacherId: req.body.teacherId,
                            classRoomId: req.body.classRoomId
                        })];
                    case 1:
                        lesson = _a.sent();
                        return [2 /*return*/, res.send(lesson)];
                }
            });
        }); }),
        app.put('/api/lesson/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var lesson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Lesson_controller_1.LessonController.updateLessonById(req.params.id)];
                    case 1:
                        lesson = _a.sent();
                        return [2 /*return*/, res.send(lesson)];
                }
            });
        }); }),
        app.get('/api/lesson/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var lesson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Lesson_controller_1.LessonController.getLessonById(req.params.id)];
                    case 1:
                        lesson = _a.sent();
                        return [2 /*return*/, res.send(lesson)];
                }
            });
        }); }),
        app.get('/api/lesson/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var lesson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Lesson_controller_1.LessonController.getAllLesson()];
                    case 1:
                        lesson = _a.sent();
                        return [2 /*return*/, res.send(lesson)];
                }
            });
        }); }),
        app.delete('/api/lesson/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var lesson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Lesson_controller_1.LessonController.removeLessonById(req.params.id)];
                    case 1:
                        lesson = _a.sent();
                        return [2 /*return*/, res.send(lesson)];
                }
            });
        }); }),
        app.post('/api/classroom', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var classroom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Classroom_controller_1.ClassroomController.createClassroom({
                            numberClassRoom: req.body.numberClassRoom,
                            nameClassRoom: req.body.nameClassRoom,
                            numberFloorClassRoom: req.body.numberFloorClassRoom,
                            capacityClassRoom: req.body.capacityClassRoom,
                        })];
                    case 1:
                        classroom = _a.sent();
                        return [2 /*return*/, res.send(classroom)];
                }
            });
        }); }),
        app.put('/api/classroom/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var classroom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Classroom_controller_1.ClassroomController.updateClassroomById(req.params.id)];
                    case 1:
                        classroom = _a.sent();
                        return [2 /*return*/, res.send(classroom)];
                }
            });
        }); }),
        app.get('/api/classroom', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var classroom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Classroom_controller_1.ClassroomController.getAllClassroom()];
                    case 1:
                        classroom = _a.sent();
                        return [2 /*return*/, res.send(classroom)];
                }
            });
        }); }),
        app.get('/api/classroom/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var classroom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Classroom_controller_1.ClassroomController.getClassroomById(req.params.id)];
                    case 1:
                        classroom = _a.sent();
                        return [2 /*return*/, res.send(classroom)];
                }
            });
        }); }),
        app.delete('/api/classroom/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
            var classroom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Classroom_controller_1.ClassroomController.removeClassroomById(req.params.id)];
                    case 1:
                        classroom = _a.sent();
                        return [2 /*return*/, res.send(classroom)];
                }
            });
        }); });
};
exports.routes = routes;
