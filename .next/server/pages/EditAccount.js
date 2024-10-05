"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/EditAccount";
exports.ids = ["pages/EditAccount"];
exports.modules = {

/***/ "./pages/EditAccount.js":
/*!******************************!*\
  !*** ./pages/EditAccount.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);\n_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\"use client\";\n\n\n\n\n\nconst EditAccount = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: isGenderOpen , 1: setIsGenderOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: profileImage , 1: setProfileImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleNext = ()=>{\n        router.push(\"/HomePage\");\n    };\n    const toggleGenderVisibility = ()=>{\n        setIsGenderOpen(!isGenderOpen);\n    };\n    const handleImageChange = (e)=>{\n        const file = e.target.files?.[0];\n        const reader = new FileReader();\n        reader.onloadend = ()=>{\n            setProfileImage(reader.result);\n        };\n        if (file) {\n            reader.readAsDataURL(file);\n        }\n    };\n    const { 0: isChecked , 1: setIsChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCheckboxClick = ()=>{\n        setIsChecked(!isChecked);\n    };\n    const handleSpanClick = ()=>{\n        router.push(\"/PDPAConsentPage\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faArrowLeft,\n                className: \"back-icon\",\n                onClick: ()=>window.history.back()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"ตั้งค่าบัญชี\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"profile-image-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \"image/*\",\n                        id: \"profileImage\",\n                        onChange: handleImageChange,\n                        style: {\n                            display: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"profileImage\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"profile-image\",\n                            style: {\n                                backgroundImage: `url(${profileImage || \"default-profile.png\"})`\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"fullName\",\n                        children: \"ชื่อ-นามสกุล\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"fullName\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"gender\",\n                        children: \"เพศ\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"select-wrapper-setting\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"gender\",\n                                className: isGenderOpen ? \"open\" : \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"choose\",\n                                        children: \"เลือกเพศ\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"male\",\n                                        children: \"ชาย\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"female\",\n                                        children: \"หญิง\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"other\",\n                                        children: \"อื่นๆ\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faChevronDown,\n                                className: \"select-icon\",\n                                onClick: toggleGenderVisibility\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"age\",\n                        children: \"อายุ\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"age\",\n                        id: \"age\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"heightCM\",\n                        children: \"ส่วนสูง (เซนติเมตร)\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"heightCM\",\n                        id: \"heightCM\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"shoeSizeEU\",\n                        children: \"ขนาดเท้า (EU)\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"shoeSizeEU\",\n                        id: \"shoeSizeEU\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"shoeSizeCM\",\n                        children: \"ขนาดเท้า (เซนติเมตร)\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"shoeSizeCM\",\n                        id: \"shoeSizeCM\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"primary-btn\",\n                onClick: handleNext,\n                children: \"ยืนยัน\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\EditAccount.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditAccount);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxVQUFVO2tDQUFDLHFCQUFtQjs7Ozs7aUNBQVE7a0NBQ3JELDhEQUFDUixPQUFLO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0UsRUFBRSxFQUFDLFVBQVU7Ozs7O2lDQUFHOzs7Ozs7eUJBQ25DOzBCQUVOLDhEQUFDWCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsYUFBYTs7a0NBQzFCLDhEQUFDYyxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsWUFBWTtrQ0FBQyxlQUFhOzs7OztpQ0FBUTtrQ0FDakQsOERBQUNSLE9BQUs7d0JBQUNDLElBQUksRUFBQyxZQUFZO3dCQUFDRSxFQUFFLEVBQUMsWUFBWTs7Ozs7aUNBQUc7Ozs7Ozt5QkFDdkM7MEJBRU4sOERBQUNYLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxhQUFhOztrQ0FDMUIsOERBQUNjLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxZQUFZO2tDQUFDLHNCQUFvQjs7Ozs7aUNBQVE7a0NBQ3hELDhEQUFDUixPQUFLO3dCQUFDQyxJQUFJLEVBQUMsWUFBWTt3QkFBQ0UsRUFBRSxFQUFDLFlBQVk7Ozs7O2lDQUFHOzs7Ozs7eUJBQ3ZDOzBCQUVOLDhEQUFDVSxRQUFNO2dCQUFDWixJQUFJLEVBQUMsUUFBUTtnQkFBQ1IsU0FBUyxFQUFDLGFBQWE7Z0JBQUNFLE9BQU8sRUFBRXBCLFVBQVU7MEJBQUUsUUFFbkU7Ozs7O3lCQUFTOzs7Ozs7aUJBQ0wsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZU4sV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1mb290M2QtbW9kZWwvLi9wYWdlcy9FZGl0QWNjb3VudC5qcz83NDFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhQXJyb3dMZWZ0LCBmYUNoZXZyb25Eb3duLCBmYUNoZWNrIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuY29uc3QgRWRpdEFjY291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2lzR2VuZGVyT3Blbiwgc2V0SXNHZW5kZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJvZmlsZUltYWdlLCBzZXRQcm9maWxlSW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9Ib21lUGFnZVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVHZW5kZXJWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNHZW5kZXJPcGVuKCFpc0dlbmRlck9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlcz8uWzBdO1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIHNldFByb2ZpbGVJbWFnZShyZWFkZXIucmVzdWx0KTtcclxuICAgIH07XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVja2JveENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNwYW5DbGljayA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL1BEUEFDb25zZW50UGFnZVwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgIGljb249e2ZhQXJyb3dMZWZ0fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJhY2staWNvblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lmhpc3RvcnkuYmFjaygpfVxyXG4gICAgICAvPlxyXG4gICAgICA8aDE+4LiV4Lix4LmJ4LiH4LiE4LmI4Liy4Lia4Lix4LiN4LiK4Li1PC9oMT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIGlkPVwicHJvZmlsZUltYWdlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX1cclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb2ZpbGVJbWFnZVwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9maWxlLWltYWdlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwcm9maWxlSW1hZ2UgfHwgXCJkZWZhdWx0LXByb2ZpbGUucG5nXCJ9KWAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmdWxsTmFtZVwiPuC4iuC4t+C5iOC4rS3guJnguLLguKHguKrguIHguLjguKU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZnVsbE5hbWVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbmRlclwiPuC5gOC4nuC4qDwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Qtd3JhcHBlci1zZXR0aW5nXCI+XHJcbiAgICAgICAgICA8c2VsZWN0IGlkPVwiZ2VuZGVyXCIgY2xhc3NOYW1lPXtpc0dlbmRlck9wZW4gPyBcIm9wZW5cIiA6IFwiXCJ9PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hvb3NlXCI+4LmA4Lil4Li34Lit4LiB4LmA4Lie4LioPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYWxlXCI+4LiK4Liy4LiiPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZW1hbGVcIj7guKvguI3guLTguIc8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90aGVyXCI+4Lit4Li34LmI4LiZ4LmGPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgaWNvbj17ZmFDaGV2cm9uRG93bn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0LWljb25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVHZW5kZXJWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VcIj7guK3guLLguKLguLg8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYWdlXCIgaWQ9XCJhZ2VcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhlaWdodENNXCI+4Liq4LmI4Lin4LiZ4Liq4Li54LiHICjguYDguIvguJnguJXguLTguYDguKHguJXguKMpPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImhlaWdodENNXCIgaWQ9XCJoZWlnaHRDTVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2hvZVNpemVFVVwiPuC4guC4meC4suC4lOC5gOC4l+C5ieC4siAoRVUpPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInNob2VTaXplRVVcIiBpZD1cInNob2VTaXplRVVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNob2VTaXplQ01cIj7guILguJnguLLguJTguYDguJfguYnguLIgKOC5gOC4i+C4meC4leC4tOC5gOC4oeC4leC4oyk8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic2hvZVNpemVDTVwiIGlkPVwic2hvZVNpemVDTVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicHJpbWFyeS1idG5cIiBvbkNsaWNrPXtoYW5kbGVOZXh0fT5cclxuICAgICAgICDguKLguLfguJnguKLguLHguJlcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdEFjY291bnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFBcnJvd0xlZnQiLCJmYUNoZXZyb25Eb3duIiwiZmFDaGVjayIsIkVkaXRBY2NvdW50Iiwicm91dGVyIiwiaXNHZW5kZXJPcGVuIiwic2V0SXNHZW5kZXJPcGVuIiwicHJvZmlsZUltYWdlIiwic2V0UHJvZmlsZUltYWdlIiwiaGFuZGxlTmV4dCIsInB1c2giLCJ0b2dnbGVHZW5kZXJWaXNpYmlsaXR5IiwiaGFuZGxlSW1hZ2VDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJoYW5kbGVDaGVja2JveENsaWNrIiwiaGFuZGxlU3BhbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJoaXN0b3J5IiwiYmFjayIsImgxIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0IiwiaWQiLCJvbkNoYW5nZSIsInN0eWxlIiwiZGlzcGxheSIsImxhYmVsIiwiaHRtbEZvciIsImJhY2tncm91bmRJbWFnZSIsInNlbGVjdCIsIm9wdGlvbiIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/EditAccount.js\n");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/EditAccount.js"));
module.exports = __webpack_exports__;

})();