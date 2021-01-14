"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomModel = void 0;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var ClassroomSchema = new mongoose_1.Schema({
    numberClassRoom: { type: String, required: true },
    nameClassRoom: { type: String, required: true },
    numberFloorClassRoom: { type: Number, required: true },
    capacityClassRoom: { type: Number, required: true },
});
exports.ClassroomModel = mongoose.model('Classroom', ClassroomSchema);
