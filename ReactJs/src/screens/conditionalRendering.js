"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function ConditionalRendering() {
    function handleRegister(event) {
        event.preventDefault();
    }
    let email = "ayushmaanshukla274@gmail.com";
    let amount = 700;
    return (react_1.default.createElement("form", null, email == "ayushmaanshukla274@gmail.com" && amount > 500 ? (react_1.default.createElement("div", null,
        react_1.default.createElement("input", { type: "email", placeholder: "Enter email" }),
        react_1.default.createElement("button", { onClick: handleRegister }, "Submit"))) : (react_1.default.createElement("h1", null, "No services for donations below 500"))));
}
exports.default = ConditionalRendering;
