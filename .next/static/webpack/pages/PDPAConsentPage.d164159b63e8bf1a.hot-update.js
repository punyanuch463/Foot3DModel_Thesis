"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/PDPAConsentPage",{

/***/ "./pages/PDPAConsentPage.js":
/*!**********************************!*\
  !*** ./pages/PDPAConsentPage.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nvar PDPAConsentPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isChecked = ref[0], setIsChecked = ref[1];\n    var UserId = router.query.UserId;\n    var handleCheckboxClick = function() {\n        setIsChecked(!isChecked);\n    };\n    var handleNext = function() {\n        if (!isChecked) {\n            // alert(\"กรุณายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัวก่อนดำเนินการต่อ\");\n            return;\n        }\n        router.push(\"/CompletePage?UserId=\".concat(UserId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faArrowLeft,\n                className: \"back-icon\",\n                onClick: function() {\n                    return window.history.back();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"นโยบายความเป็นส่วนตัว\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-text\",\n                children: [\n                    \"การใช้บริการนี้แสดงถึงความยินยอมและการยอมรับ\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    \"ข้อกำหนดและนโยบายความเป็นส่วนตัวของเรา\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    \"ที่มีเป้าหมายเพื่อปกป้องข้อมูลส่วนบุคคลของคุณ\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    \"และให้บริการที่ดียิ่งขึ้นให้กับคุณ การเก็บรวบรวม\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    \"และใช้ข้อมูลส่วนบุคคล จะเป็นไปตามวัตถุประสงค์ที่ชัดเจนและเกี่ยวข้องกับการให้บริการของเราเท่านั้น\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-text\",\n                children: [\n                    \"คุณสามารถเข้าถึงรายละเอียดเพิ่มเติมเกี่ยวกับ\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    \"การคุ้มครองข้อมูลส่วนบุคคลของคุณได้ในเมนูการตั้งค่าบัญชีของคุณ โดยที่คุณมีสิทธิ์ในการตรวจสอบ\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    \" แก้ไข หรือลบข้อมูลของคุณ ตามที่คุณต้องการ\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-text\",\n                children: [\n                    \"นอกจากนี้เรายังมีมาตรการที่เหมาะสมเพื่อปกป้องข้อมูลของคุณจากการเข้าถึงโดยไม่ได้รับอนุญาต\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    \"หรือการใช้งานที่ไม่เหมาะสม\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-text\",\n                children: [\n                    \"การยอมรับนโยบายความเป็นส่วนตัวเป็นการสร้าง\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    \"ความไว้วางใจและความโปร่งใสระหว่างเราและคุณ\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    \"ในการใช้บริการของเรา\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-text\",\n                children: \"หากคุณมีคำถาม โปรดอ่านข้อมูลเพิ่มเติมหรือติดต่อเราได้ที่แผนกบริการลูกค้าของเรา\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"checkbox-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"checkbox-label\",\n                    onClick: handleCheckboxClick,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"custom-checkbox \".concat(isChecked ? \"checked\" : \"\"),\n                            children: isChecked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"checkmark\",\n                                children: \"✓\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                            lineNumber: 75,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"ยอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"primary-btn\",\n                // disabled={!isChecked} // ปุ่มจะถูกปิดใช้งานหากไม่ได้ติ๊ก checkbox\n                onClick: handleNext,\n                children: \"ต่อไป\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(PDPAConsentPage, \"kip7PLEoj5zu8mMumTu/W/gd4s8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PDPAConsentPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PDPAConsentPage);\nvar _c;\n$RefreshReg$(_c, \"PDPAConsentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2lDQUFPOzs7Ozs7eUJBQ3pDOzs7OztxQkFDSjswQkFFSiw4REFBQ0MsUUFBTTtnQkFDTEMsSUFBSSxFQUFDLFFBQVE7Z0JBQ2JaLFNBQVMsRUFBQyxhQUFhO2dCQUN2QixvRUFBb0U7Z0JBQ3BFRSxPQUFPLEVBQUVMLFVBQVU7MEJBQ3BCLE9BRUQ7Ozs7O3FCQUFTOzs7Ozs7YUFDTCxDQUNOO0FBQ0osQ0FBQztHQWxGS1AsZUFBZTs7UUFDSkgsa0RBQVM7OztBQURwQkcsS0FBQUEsZUFBZTtBQW9GckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9QRFBBQ29uc2VudFBhZ2UuanM/MDQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYUFycm93TGVmdCxcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5jb25zdCBQRFBBQ29uc2VudFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG4gIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBVc2VySWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDaGVja2JveENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzQ2hlY2tlZCkge1xyXG4gICAgICBcclxuICAgICAgLy8gYWxlcnQoXCLguIHguKPguLjguJPguLLguKLguK3guKHguKPguLHguJrguILguYnguK3guIHguLPguKvguJnguJTguYHguKXguLDguJnguYLguKLguJrguLLguKLguITguKfguLLguKHguYDguJvguYfguJnguKrguYjguKfguJnguJXguLHguKfguIHguYjguK3guJnguJTguLPguYDguJnguLTguJnguIHguLLguKPguJXguYjguK1cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJvdXRlci5wdXNoKGAvQ29tcGxldGVQYWdlP1VzZXJJZD0ke1VzZXJJZH1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgIGljb249e2ZhQXJyb3dMZWZ0fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJhY2staWNvblwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lmhpc3RvcnkuYmFjaygpfVxyXG4gICAgICAvPlxyXG4gICAgICA8aDE+4LiZ4LmC4Lii4Lia4Liy4Lii4LiE4Lin4Liy4Lih4LmA4Lib4LmH4LiZ4Liq4LmI4Lin4LiZ4LiV4Lix4LinPC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudC10ZXh0XCI+XHJcbiAgICAgICAg4LiB4Liy4Lij4LmD4LiK4LmJ4Lia4Lij4Li04LiB4Liy4Lij4LiZ4Li14LmJ4LmB4Liq4LiU4LiH4LiW4Li24LiH4LiE4Lin4Liy4Lih4Lii4Li04LiZ4Lii4Lit4Lih4LmB4Lil4Liw4LiB4Liy4Lij4Lii4Lit4Lih4Lij4Lix4LiaXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAg4LiC4LmJ4Lit4LiB4Liz4Lir4LiZ4LiU4LmB4Lil4Liw4LiZ4LmC4Lii4Lia4Liy4Lii4LiE4Lin4Liy4Lih4LmA4Lib4LmH4LiZ4Liq4LmI4Lin4LiZ4LiV4Lix4Lin4LiC4Lit4LiH4LmA4Lij4LiyXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAg4LiX4Li14LmI4Lih4Li14LmA4Lib4LmJ4Liy4Lir4Lih4Liy4Lii4LmA4Lie4Li34LmI4Lit4Lib4LiB4Lib4LmJ4Lit4LiH4LiC4LmJ4Lit4Lih4Li54Lil4Liq4LmI4Lin4LiZ4Lia4Li44LiE4LiE4Lil4LiC4Lit4LiH4LiE4Li44LiTXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAg4LmB4Lil4Liw4LmD4Lir4LmJ4Lia4Lij4Li04LiB4Liy4Lij4LiX4Li14LmI4LiU4Li14Lii4Li04LmI4LiH4LiC4Li24LmJ4LiZ4LmD4Lir4LmJ4LiB4Lix4Lia4LiE4Li44LiTIOC4geC4suC4o+C5gOC4geC5h+C4muC4o+C4p+C4muC4o+C4p+C4oVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIOC5geC4peC4sOC5g+C4iuC5ieC4guC5ieC4reC4oeC4ueC4peC4quC5iOC4p+C4meC4muC4uOC4hOC4hOC4pVxyXG4gICAgICAgIOC4iOC4sOC5gOC4m+C5h+C4meC5hOC4m+C4leC4suC4oeC4p+C4seC4leC4luC4uOC4m+C4o+C4sOC4quC4h+C4hOC5jOC4l+C4teC5iOC4iuC4seC4lOC5gOC4iOC4meC5geC4peC4sOC5gOC4geC4teC5iOC4ouC4p+C4guC5ieC4reC4h+C4geC4seC4muC4geC4suC4o+C5g+C4q+C5ieC4muC4o+C4tOC4geC4suC4o+C4guC4reC4h+C5gOC4o+C4suC5gOC4l+C5iOC4suC4meC4seC5ieC4mVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnQtdGV4dFwiPlxyXG4gICAgICAgIOC4hOC4uOC4k+C4quC4suC4oeC4suC4o+C4luC5gOC4guC5ieC4suC4luC4tuC4h+C4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lOC5gOC4nuC4tOC5iOC4oeC5gOC4leC4tOC4oeC5gOC4geC4teC5iOC4ouC4p+C4geC4seC4mlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIOC4geC4suC4o+C4hOC4uOC5ieC4oeC4hOC4o+C4reC4h+C4guC5ieC4reC4oeC4ueC4peC4quC5iOC4p+C4meC4muC4uOC4hOC4hOC4peC4guC4reC4h+C4hOC4uOC4k+C5hOC4lOC5ieC5g+C4meC5gOC4oeC4meC4ueC4geC4suC4o+C4leC4seC5ieC4h+C4hOC5iOC4suC4muC4seC4jeC4iuC4teC4guC4reC4h+C4hOC4uOC4k1xyXG4gICAgICAgIOC5guC4lOC4ouC4l+C4teC5iOC4hOC4uOC4k+C4oeC4teC4quC4tOC4l+C4mOC4tOC5jOC5g+C4meC4geC4suC4o+C4leC4o+C4p+C4iOC4quC4reC4mlxyXG4gICAgICAgIDxiciAvPiDguYHguIHguYnguYTguIIg4Lir4Lij4Li34Lit4Lil4Lia4LiC4LmJ4Lit4Lih4Li54Lil4LiC4Lit4LiH4LiE4Li44LiTIOC4leC4suC4oeC4l+C4teC5iOC4hOC4uOC4k+C4leC5ieC4reC4h+C4geC4suC4o1xyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnQtdGV4dFwiPlxyXG4gICAgICAgIOC4meC4reC4geC4iOC4suC4geC4meC4teC5ieC5gOC4o+C4suC4ouC4seC4h+C4oeC4teC4oeC4suC4leC4o+C4geC4suC4o+C4l+C4teC5iOC5gOC4q+C4oeC4suC4sOC4quC4oeC5gOC4nuC4t+C5iOC4reC4m+C4geC4m+C5ieC4reC4h+C4guC5ieC4reC4oeC4ueC4peC4guC4reC4h+C4hOC4uOC4k+C4iOC4suC4geC4geC4suC4o+C5gOC4guC5ieC4suC4luC4tuC4h+C5guC4lOC4ouC5hOC4oeC5iOC5hOC4lOC5ieC4o+C4seC4muC4reC4meC4uOC4jeC4suC4lXtcIiBcIn1cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICDguKvguKPguLfguK3guIHguLLguKPguYPguIrguYnguIfguLLguJnguJfguLXguYjguYTguKHguYjguYDguKvguKHguLLguLDguKrguKFcclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50LXRleHRcIj5cclxuICAgICAgICDguIHguLLguKPguKLguK3guKHguKPguLHguJrguJnguYLguKLguJrguLLguKLguITguKfguLLguKHguYDguJvguYfguJnguKrguYjguKfguJnguJXguLHguKfguYDguJvguYfguJnguIHguLLguKPguKrguKPguYnguLLguIdcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICDguITguKfguLLguKHguYTguKfguYnguKfguLLguIfguYPguIjguYHguKXguLDguITguKfguLLguKHguYLguJvguKPguYjguIfguYPguKrguKPguLDguKvguKfguYjguLLguIfguYDguKPguLLguYHguKXguLDguITguLjguJNcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICDguYPguJnguIHguLLguKPguYPguIrguYnguJrguKPguLTguIHguLLguKPguILguK3guIfguYDguKPguLJcclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50LXRleHRcIj5cclxuICAgICAgICDguKvguLLguIHguITguLjguJPguKHguLXguITguLPguJbguLLguKFcclxuICAgICAgICDguYLguJvguKPguJTguK3guYjguLLguJnguILguYnguK3guKHguLnguKXguYDguJ7guLTguYjguKHguYDguJXguLTguKHguKvguKPguLfguK3guJXguLTguJTguJXguYjguK3guYDguKPguLLguYTguJTguYnguJfguLXguYjguYHguJzguJnguIHguJrguKPguLTguIHguLLguKPguKXguLnguIHguITguYnguLLguILguK3guIfguYDguKPguLJcclxuICAgICAgPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1jb250YWluZXJcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWxhYmVsXCIgb25DbGljaz17aGFuZGxlQ2hlY2tib3hDbGlja30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjdXN0b20tY2hlY2tib3ggJHtpc0NoZWNrZWQgPyAnY2hlY2tlZCcgOiAnJ31gfT5cclxuICAgICAgICAgIHtpc0NoZWNrZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+4pyTPC9zcGFuPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIOC4ouC4reC4oeC4o+C4seC4muC4guC5ieC4reC4geC4s+C4q+C4meC4lOC5geC4peC4sOC4meC5guC4ouC4muC4suC4ouC4hOC4p+C4suC4oeC5gOC4m+C5h+C4meC4quC5iOC4p+C4meC4leC4seC4pzwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInByaW1hcnktYnRuXCJcclxuICAgICAgICAvLyBkaXNhYmxlZD17IWlzQ2hlY2tlZH0gLy8g4Lib4Li44LmI4Lih4LiI4Liw4LiW4Li54LiB4Lib4Li04LiU4LmD4LiK4LmJ4LiH4Liy4LiZ4Lir4Liy4LiB4LmE4Lih4LmI4LmE4LiU4LmJ4LiV4Li04LmK4LiBIGNoZWNrYm94XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cclxuICAgICAgPlxyXG4gICAgICAgIOC4leC5iOC4reC5hOC4m1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQRFBBQ29uc2VudFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFBcnJvd0xlZnQiLCJQRFBBQ29uc2VudFBhZ2UiLCJyb3V0ZXIiLCJpc0NoZWNrZWQiLCJzZXRJc0NoZWNrZWQiLCJVc2VySWQiLCJxdWVyeSIsImhhbmRsZUNoZWNrYm94Q2xpY2siLCJoYW5kbGVOZXh0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImljb24iLCJvbkNsaWNrIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJoMSIsInAiLCJiciIsImxhYmVsIiwic3BhbiIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/PDPAConsentPage.js\n"));

/***/ })

});