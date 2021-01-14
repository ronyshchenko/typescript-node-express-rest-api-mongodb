"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherModel = void 0;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var TeacherSchema = new mongoose_1.Schema({
    firstNameTeacher: { type: String, required: true },
    surNameTeacher: { type: String, required: true },
    lastNameTeacher: { type: String, required: true },
    emailTeacher: { type: String, required: true },
    //lessonId: { type: Schema.Types.ObjectId, ref: 'LessonModel' },
    ageTeacher: { type: Number, required: true },
    sexTeacher: { type: String, required: true },
    yearOfExpTeacher: { type: Number, required: true },
    workedInUniverTeacher: { type: Boolean },
    canTeachSubjects: { type: String },
});
exports.TeacherModel = mongoose.model('Teacher', TeacherSchema);
