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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const flowers_schema_1 = __importDefault(require("../models/flowers.schema"));
const route = (0, express_1.Router)();
route.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.query;
    return flowers_schema_1.default
        .find({ type })
        .then((response) => {
        res.status(200).json({
            message: "success",
            data: response,
        });
    })
        .catch(() => {
        res.status(400).json({
            message: "fail",
        });
    });
}));
route.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { image, title, description, type } = req.body;
    return flowers_schema_1.default
        .create({ image, title, description, type })
        .then(() => {
        res.status(200).json({
            message: "success",
        });
    })
        .catch(() => {
        res.status(400).json({
            message: "fail",
        });
    });
}));
route.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { image, title, description, type } = req.body;
    return flowers_schema_1.default
        .updateOne({ _id: id }, { $set: { image, title, description, type } }, { new: true })
        .then(() => {
        res.status(200).json({
            message: "success",
        });
    })
        .catch(() => {
        res.status(400).json({
            message: "fail",
        });
    });
}));
route.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("delete flower/:id");
    const { id } = req.params;
    return flowers_schema_1.default
        .findByIdAndDelete(id)
        .then((response) => {
        res.status(200).json({
            message: "success",
        });
    })
        .catch(() => {
        res.status(400).json({
            message: "fail",
        });
    });
}));
exports.default = route;
