"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/CompletePage",{

/***/ "./pages/CompletePage.js":
/*!*******************************!*\
  !*** ./pages/CompletePage.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nvar CompletePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), verificationCode = ref[0], setVerificationCode = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), errorMessage = ref1[0], setErrorMessage = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var UserId = router.query.UserId;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!UserId) {\n            setErrorMessage(\"UserId is missing.\");\n        }\n    }, [\n        UserId\n    ]);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref2[0], setMessage = ref2[1];\n    var handleNext = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var userIdNumber, response, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!UserId) {\n                            setErrorMessage(\"Invalid UserId.\");\n                            return [\n                                2\n                            ];\n                        }\n                        userIdNumber = parseInt(UserId, 10);\n                        if (isNaN(userIdNumber)) {\n                            setErrorMessage(\"Invalid UserId.\");\n                            return [\n                                2\n                            ];\n                        }\n                        console.log(\"Sending verification request with:\", {\n                            UserId: userIdNumber,\n                            code: verificationCode\n                        });\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            fetch(\"/api/verifyCode\", {\n                                method: \"POST\",\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify({\n                                    UserId: userIdNumber,\n                                    code: verificationCode\n                                })\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        if (response.ok) {\n                            // setMessage('ยืนยันสำเร็จ! กำลังนำทางไปยังหน้า Login...');\n                            router.push(\"/LoginPage\");\n                        } else {\n                            // เปลี่ยนจาก data.message เป็น data.error\n                            setMessage(\"เกิดข้อผิดพลาด: \".concat(data.error));\n                        }\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error:\", error);\n                        setMessage(\"เกิดข้อผิดพลาดในการส่งข้อมูล\");\n                        return [\n                            3,\n                            5\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleNext() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faArrowLeft,\n                className: \"back-icon\",\n                onClick: function() {\n                    return window.history.back();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"status-bar\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle complete\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCheck\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle complete\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCheck\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"circle\",\n                        children: \"3\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"ยืนยัน\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"alert\",\n                children: message\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                lineNumber: 77,\n                columnNumber: 19\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"center-circle-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"center-circle\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCheck\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"center-circle-text\",\n                children: \"ระบบได้ทำการส่งรหัสยืนยันไปที่อีเมลท่านแล้ว\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"input-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"verificationCode\",\n                        children: \"กรอกรหัสยืนยัน\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"input-wrapper\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"verificationCode\",\n                            value: verificationCode,\n                            onChange: function(e) {\n                                return setVerificationCode(e.target.value);\n                            },\n                            placeholder: \"Enter verification code\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"primary-btn\",\n                onClick: handleNext,\n                children: \"ต่อไป\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n                lineNumber: 102,\n                columnNumber: 8\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\CompletePage.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, _this);\n};\n_s(CompletePage, \"78ZKAjRnB/aJ6Yh+6cmhNukvKe8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CompletePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CompletePage);\nvar _c;\n$RefreshReg$(_c, \"CompletePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQUNDLE9BQU8sRUFBQyxrQkFBa0I7a0NBQUMsZ0JBQWM7Ozs7OzZCQUFRO2tDQUN4RCw4REFBQ1YsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGVBQWU7a0NBQzVCLDRFQUFDVSxPQUFLOzRCQUNKQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEMsRUFBRSxFQUFDLGtCQUFrQjs0QkFDckJDLEtBQUssRUFBRTFDLGdCQUFnQjs0QkFDdkIyQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzt1Q0FBSzNDLG1CQUFtQixDQUFDMkMsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBQzs2QkFBQTs0QkFDcERJLFdBQVcsRUFBQyx5QkFBeUI7Ozs7O2lDQUNyQzs7Ozs7NkJBQ0U7Ozs7OztxQkFDRjswQkFFTCw4REFBQ0MsUUFBTTtnQkFBQ1AsSUFBSSxFQUFDLFFBQVE7Z0JBQUNYLFNBQVMsRUFBQyxhQUFhO2dCQUFDRSxPQUFPLEVBQUV0QixVQUFVOzBCQUFFLE9BRXBFOzs7OztxQkFBUzs7Ozs7O2FBQ0wsQ0FDTjtBQUNKLENBQUM7R0FuR0tWLFlBQVk7O1FBR0RKLGtEQUFTOzs7QUFIcEJJLEtBQUFBLFlBQVk7QUFxR2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcGxldGVQYWdlLmpzPzE3ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFBcnJvd0xlZnQsIGZhQ2hlY2sgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5jb25zdCBDb21wbGV0ZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3ZlcmlmaWNhdGlvbkNvZGUsIHNldFZlcmlmaWNhdGlvbkNvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBVc2VySWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghVXNlcklkKSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnVXNlcklkIGlzIG1pc3NpbmcuJyk7XHJcbiAgICB9XHJcbiAgfSwgW1VzZXJJZF0pO1xyXG5cclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIVVzZXJJZCkge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ0ludmFsaWQgVXNlcklkLicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlcklkTnVtYmVyID0gcGFyc2VJbnQoVXNlcklkLCAxMCk7XHJcbiAgICBpZiAoaXNOYU4odXNlcklkTnVtYmVyKSkge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ0ludmFsaWQgVXNlcklkLicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1NlbmRpbmcgdmVyaWZpY2F0aW9uIHJlcXVlc3Qgd2l0aDonLCB7IFVzZXJJZDogdXNlcklkTnVtYmVyLCBjb2RlOiB2ZXJpZmljYXRpb25Db2RlIH0pO1xyXG4gICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdmVyaWZ5Q29kZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFVzZXJJZDogdXNlcklkTnVtYmVyLCBjb2RlOiB2ZXJpZmljYXRpb25Db2RlIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBzZXRNZXNzYWdlKCfguKLguLfguJnguKLguLHguJnguKrguLPguYDguKPguYfguIghIOC4geC4s+C4peC4seC4h+C4meC4s+C4l+C4suC4h+C5hOC4m+C4ouC4seC4h+C4q+C4meC5ieC4siBMb2dpbi4uLicpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL0xvZ2luUGFnZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDguYDguJvguKXguLXguYjguKLguJnguIjguLLguIEgZGF0YS5tZXNzYWdlIOC5gOC4m+C5h+C4mSBkYXRhLmVycm9yXHJcbiAgICAgICAgc2V0TWVzc2FnZShg4LmA4LiB4Li04LiU4LiC4LmJ4Lit4Lic4Li04LiU4Lie4Lil4Liy4LiUOiAke2RhdGEuZXJyb3J9YCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgc2V0TWVzc2FnZSgn4LmA4LiB4Li04LiU4LiC4LmJ4Lit4Lic4Li04LiU4Lie4Lil4Liy4LiU4LmD4LiZ4LiB4Liy4Lij4Liq4LmI4LiH4LiC4LmJ4Lit4Lih4Li54LilJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICBpY29uPXtmYUFycm93TGVmdH1cclxuICAgICAgICBjbGFzc05hbWU9XCJiYWNrLWljb25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5oaXN0b3J5LmJhY2soKX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXMtYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUgY29tcGxldGVcIj5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaGVja30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZSBjb21wbGV0ZVwiPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+MzwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgxPuC4ouC4t+C4meC4ouC4seC4mTwvaDE+XHJcbiAgICAgIFxyXG4gICAgICB7bWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9J2FsZXJ0Jz57bWVzc2FnZX08L3A+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXItY2lyY2xlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNpcmNsZVwiPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWNpcmNsZS10ZXh0XCI+XHJcbiAgICAgICAg4Lij4Liw4Lia4Lia4LmE4LiU4LmJ4LiX4Liz4LiB4Liy4Lij4Liq4LmI4LiH4Lij4Lir4Lix4Liq4Lii4Li34LiZ4Lii4Lix4LiZ4LmE4Lib4LiX4Li14LmI4Lit4Li14LmA4Lih4Lil4LiX4LmI4Liy4LiZ4LmB4Lil4LmJ4LinXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmVyaWZpY2F0aW9uQ29kZVwiPuC4geC4o+C4reC4geC4o+C4q+C4seC4quC4ouC4t+C4meC4ouC4seC4mTwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInZlcmlmaWNhdGlvbkNvZGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmVyaWZpY2F0aW9uQ29kZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWZXJpZmljYXRpb25Db2RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB2ZXJpZmljYXRpb24gY29kZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0blwiIG9uQ2xpY2s9e2hhbmRsZU5leHR9PlxyXG4gICAgICAgIOC4leC5iOC4reC5hOC4m1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0ZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFBcnJvd0xlZnQiLCJmYUNoZWNrIiwiQ29tcGxldGVQYWdlIiwidmVyaWZpY2F0aW9uQ29kZSIsInNldFZlcmlmaWNhdGlvbkNvZGUiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJyb3V0ZXIiLCJVc2VySWQiLCJxdWVyeSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlTmV4dCIsInVzZXJJZE51bWJlciIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwicGFyc2VJbnQiLCJpc05hTiIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwib2siLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJoaXN0b3J5IiwiYmFjayIsImgxIiwicCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/CompletePage.js\n"));

/***/ })

});