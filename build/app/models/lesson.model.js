"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonModel = void 0;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var LessonSchema = new mongoose_1.Schema({
    lessonName: { type: String, required: true },
    lessonDayOfWeek: { type: String, required: true },
    numberOfSemester: { type: Number, required: true },
    nameOfGroupStudents: { type: String, required: true },
    lessonTime: { type: Number, required: true },
    chatIdLesson: { type: String, required: true },
    teacherId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Teacher' },
    classRoomId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Classroom' },
});
exports.LessonModel = mongoose.model('Lesson', LessonSchema);
