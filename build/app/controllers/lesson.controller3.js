"use strict";
//import { ILesson, LessonModel } from '../models/lesson.model';
//import { ITeacher, TeacherModel } from '../models/teacher.model';
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
exports.LessonController = void 0;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var TeacherSchema = new mongoose_1.Schema({
    firstNameTeacher: { type: String, required: true },
    surNameTeacher: { type: String, required: true },
    lastNameTeacher: { type: String, required: true },
    emailTeacher: { type: String, required: true, unique: true },
    //lessonId: { type: Schema.Types.ObjectId, ref: 'LessonModel' },
    ageTeacher: { type: Number, required: true },
    sexTeacher: { type: String, required: true },
    yearOfExpTeacher: { type: Number, required: true },
    workedInUniverTeacher: { type: Boolean },
    canTeachSubjects: { type: Boolean },
});
var TeacherModel = mongoose.model('Teacher', TeacherSchema);
var LessonSchema = new mongoose_1.Schema({
    lessonName: { type: String, required: true },
    lessonDayOfWeek: { type: String, required: true },
    numberOfSemester: { type: Number, required: true },
    nameOfGroupStudents: { type: String, required: true },
    lessonTime: { type: String, required: true },
    chatIdLesson: { type: String, required: true },
    emailTeacher: { type: String, required: true, unique: true },
    numberClassRoom: { type: Number, required: true, unique: true },
    teacherId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Teacher' }],
});
var LessonModel = mongoose.model('Lesson', LessonSchema);
exports.LessonController = {
    createLesson: function (_a) {
        var lessonName = _a.lessonName, lessonDayOfWeek = _a.lessonDayOfWeek, numberOfSemester = _a.numberOfSemester, nameOfGroupStudents = _a.nameOfGroupStudents, lessonTime = _a.lessonTime, chatIdLesson = _a.chatIdLesson, emailTeacher = _a.emailTeacher, teacherId = _a.teacherId, numberClassRoom = _a.numberClassRoom;
        return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, LessonModel.create({
                        lessonName: lessonName,
                        lessonDayOfWeek: lessonDayOfWeek,
                        numberOfSemester: numberOfSemester,
                        nameOfGroupStudents: nameOfGroupStudents,
                        lessonTime: lessonTime,
                        chatIdLesson: chatIdLesson,
                        emailTeacher: emailTeacher,
                        teacherId: teacherId,
                        numberClassRoom: numberClassRoom,
                    })
                        .then(function (data) {
                        return data;
                    })
                        .catch(function (error) {
                        throw error;
                    })];
            });
        });
    },
    getAllLesson: function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, LessonModel.find({})
                    .then(function (data) {
                    return data;
                })
                    .catch(function (error) {
                    throw error;
                })];
        });
    }); },
    getLessonById: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // console.log(id) 
            return [2 /*return*/, LessonModel.findById(id).populate('teacherId')
                    .then(function (data) {
                    console.log(data);
                    return data;
                })
                    .catch(function (error) {
                    throw error;
                })];
        });
    }); },
    // getLessonById: async (id: string): Promise<ILesson> => {
    //  // console.log(id) 
    //   return LessonModel.findById(id).populate('lastNameTeacher' )
    //     .then((data: ILesson) => {
    //       console.log(data)
    //       return data;
    //     })
    //     .catch((error: Error) => {
    //       throw error;
    //     })
    //   },
    removeLessonById: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log(id);
            return [2 /*return*/, LessonModel.findByIdAndRemove(id)
                    .then(function (data) {
                    return data;
                })
                    .catch(function (error) {
                    throw error;
                })];
        });
    }); },
    updateLessonById: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log(id);
            return [2 /*return*/, LessonModel.findByIdAndUpdate(id, { lessonName: "matem", lessonTime: "10:10" })
                    .then(function (data) {
                    return data;
                })
                    .catch(function (error) {
                    throw error;
                })];
        });
    }); }
};
