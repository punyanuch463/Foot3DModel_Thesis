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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\"use client\";\n\n\n\n\nvar PDPAConsentPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isChecked = ref[0], setIsChecked = ref[1];\n    var UserId = router.query.UserId;\n    var handleCheckboxClick = function() {\n        setIsChecked(!isChecked);\n    };\n    var handleNext = function() {\n        if (!isChecked) {\n            toast.error(\"กรุณายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัวก่อนดำเนินการต่อ\");\n            // alert(\"กรุณายอมรับข้อกำหนดและนโยบายความเป็นส่วนตัวก่อนดำเนินการต่อ\");\n            return;\n        }\n        router.push(\"/CompletePage?UserId=\".concat(UserId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faArrowLeft,\n                className: \"back-icon\",\n                onClick: function() {\n                    return window.history.back();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"นโยบายความเป็นส่วนตัว\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-text\",\n                children: [\n                    \"การใช้บริการนี้แสดงถึงความยินยอมและการยอมรับ\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    \"ข้อกำหนดและนโยบายความเป็นส่วนตัวของเรา\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    \"ที่มีเป้าหมายเพื่อปกป้องข้อมูลส่วนบุคคลของคุณ\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    \"และให้บริการที่ดียิ่งขึ้นให้กับคุณ การเก็บรวบรวม\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    \"และใช้ข้อมูลส่วนบุคคล จะเป็นไปตามวัตถุประสงค์ที่ชัดเจนและเกี่ยวข้องกับการให้บริการของเราเท่านั้น\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-text\",\n                children: [\n                    \"คุณสามารถเข้าถึงรายละเอียดเพิ่มเติมเกี่ยวกับ\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    \"การคุ้มครองข้อมูลส่วนบุคคลของคุณได้ในเมนูการตั้งค่าบัญชีของคุณ โดยที่คุณมีสิทธิ์ในการตรวจสอบ\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    \" แก้ไข หรือลบข้อมูลของคุณ ตามที่คุณต้องการ\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-text\",\n                children: [\n                    \"นอกจากนี้เรายังมีมาตรการที่เหมาะสมเพื่อปกป้องข้อมูลของคุณจากการเข้าถึงโดยไม่ได้รับอนุญาต\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    \"หรือการใช้งานที่ไม่เหมาะสม\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-text\",\n                children: [\n                    \"การยอมรับนโยบายความเป็นส่วนตัวเป็นการสร้าง\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    \"ความไว้วางใจและความโปร่งใสระหว่างเราและคุณ\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    \"ในการใช้บริการของเรา\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"content-text\",\n                children: \"หากคุณมีคำถาม โปรดอ่านข้อมูลเพิ่มเติมหรือติดต่อเราได้ที่แผนกบริการลูกค้าของเรา\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"checkbox-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"checkbox-label\",\n                    onClick: handleCheckboxClick,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"custom-checkbox \".concat(isChecked ? \"checked\" : \"\"),\n                            children: isChecked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"checkmark\",\n                                children: \"✓\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                            lineNumber: 75,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"ยอมรับข้อกำหนดและนโยบายความเป็นส่วนตัว\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"primary-btn\",\n                // disabled={!isChecked} // ปุ่มจะถูกปิดใช้งานหากไม่ได้ติ๊ก checkbox\n                onClick: handleNext,\n                children: \"ต่อไป\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\punyanuch\\\\Desktop\\\\Senior Project\\\\Thesis\\\\Foot3DModel_Thesis\\\\pages\\\\PDPAConsentPage.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(PDPAConsentPage, \"kip7PLEoj5zu8mMumTu/W/gd4s8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PDPAConsentPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PDPAConsentPage);\nvar _c;\n$RefreshReg$(_c, \"PDPAConsentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87Ozs7O2lDQUM5QztzQ0FDTiw4REFBQ1UsTUFBSTtzQ0FBQyx3Q0FDa0M7Ozs7O2lDQUFPOzs7Ozs7eUJBQ3pDOzs7OztxQkFDSjswQkFFSiw4REFBQ0MsUUFBTTtnQkFDTEMsSUFBSSxFQUFDLFFBQVE7Z0JBQ2JaLFNBQVMsRUFBQyxhQUFhO2dCQUN2QixvRUFBb0U7Z0JBQ3BFRSxPQUFPLEVBQUVQLFVBQVU7MEJBQ3BCLE9BRUQ7Ozs7O3FCQUFTOzs7Ozs7YUFDTCxDQUNOO0FBQ0osQ0FBQztHQWxGS1AsZUFBZTs7UUFDSkgsa0RBQVM7OztBQURwQkcsS0FBQUEsZUFBZTtBQW9GckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9QRFBBQ29uc2VudFBhZ2UuanM/MDQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYUFycm93TGVmdCxcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5jb25zdCBQRFBBQ29uc2VudFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG4gIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyBVc2VySWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDaGVja2JveENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCLguIHguKPguLjguJPguLLguKLguK3guKHguKPguLHguJrguILguYnguK3guIHguLPguKvguJnguJTguYHguKXguLDguJnguYLguKLguJrguLLguKLguITguKfguLLguKHguYDguJvguYfguJnguKrguYjguKfguJnguJXguLHguKfguIHguYjguK3guJnguJTguLPguYDguJnguLTguJnguIHguLLguKPguJXguYjguK1cIik7XHJcbiAgICAgIC8vIGFsZXJ0KFwi4LiB4Lij4Li44LiT4Liy4Lii4Lit4Lih4Lij4Lix4Lia4LiC4LmJ4Lit4LiB4Liz4Lir4LiZ4LiU4LmB4Lil4Liw4LiZ4LmC4Lii4Lia4Liy4Lii4LiE4Lin4Liy4Lih4LmA4Lib4LmH4LiZ4Liq4LmI4Lin4LiZ4LiV4Lix4Lin4LiB4LmI4Lit4LiZ4LiU4Liz4LmA4LiZ4Li04LiZ4LiB4Liy4Lij4LiV4LmI4LitXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByb3V0ZXIucHVzaChgL0NvbXBsZXRlUGFnZT9Vc2VySWQ9JHtVc2VySWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICBpY29uPXtmYUFycm93TGVmdH1cclxuICAgICAgICBjbGFzc05hbWU9XCJiYWNrLWljb25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5oaXN0b3J5LmJhY2soKX1cclxuICAgICAgLz5cclxuICAgICAgPGgxPuC4meC5guC4ouC4muC4suC4ouC4hOC4p+C4suC4oeC5gOC4m+C5h+C4meC4quC5iOC4p+C4meC4leC4seC4pzwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnQtdGV4dFwiPlxyXG4gICAgICAgIOC4geC4suC4o+C5g+C4iuC5ieC4muC4o+C4tOC4geC4suC4o+C4meC4teC5ieC5geC4quC4lOC4h+C4luC4tuC4h+C4hOC4p+C4suC4oeC4ouC4tOC4meC4ouC4reC4oeC5geC4peC4sOC4geC4suC4o+C4ouC4reC4oeC4o+C4seC4mlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIOC4guC5ieC4reC4geC4s+C4q+C4meC4lOC5geC4peC4sOC4meC5guC4ouC4muC4suC4ouC4hOC4p+C4suC4oeC5gOC4m+C5h+C4meC4quC5iOC4p+C4meC4leC4seC4p+C4guC4reC4h+C5gOC4o+C4slxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIOC4l+C4teC5iOC4oeC4teC5gOC4m+C5ieC4suC4q+C4oeC4suC4ouC5gOC4nuC4t+C5iOC4reC4m+C4geC4m+C5ieC4reC4h+C4guC5ieC4reC4oeC4ueC4peC4quC5iOC4p+C4meC4muC4uOC4hOC4hOC4peC4guC4reC4h+C4hOC4uOC4k1xyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIOC5geC4peC4sOC5g+C4q+C5ieC4muC4o+C4tOC4geC4suC4o+C4l+C4teC5iOC4lOC4teC4ouC4tOC5iOC4h+C4guC4tuC5ieC4meC5g+C4q+C5ieC4geC4seC4muC4hOC4uOC4kyDguIHguLLguKPguYDguIHguYfguJrguKPguKfguJrguKPguKfguKFcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICDguYHguKXguLDguYPguIrguYnguILguYnguK3guKHguLnguKXguKrguYjguKfguJnguJrguLjguITguITguKVcclxuICAgICAgICDguIjguLDguYDguJvguYfguJnguYTguJvguJXguLLguKHguKfguLHguJXguJbguLjguJvguKPguLDguKrguIfguITguYzguJfguLXguYjguIrguLHguJTguYDguIjguJnguYHguKXguLDguYDguIHguLXguYjguKLguKfguILguYnguK3guIfguIHguLHguJrguIHguLLguKPguYPguKvguYnguJrguKPguLTguIHguLLguKPguILguK3guIfguYDguKPguLLguYDguJfguYjguLLguJnguLHguYnguJlcclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50LXRleHRcIj5cclxuICAgICAgICDguITguLjguJPguKrguLLguKHguLLguKPguJbguYDguILguYnguLLguJbguLbguIfguKPguLLguKLguKXguLDguYDguK3guLXguKLguJTguYDguJ7guLTguYjguKHguYDguJXguLTguKHguYDguIHguLXguYjguKLguKfguIHguLHguJpcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICDguIHguLLguKPguITguLjguYnguKHguITguKPguK3guIfguILguYnguK3guKHguLnguKXguKrguYjguKfguJnguJrguLjguITguITguKXguILguK3guIfguITguLjguJPguYTguJTguYnguYPguJnguYDguKHguJnguLnguIHguLLguKPguJXguLHguYnguIfguITguYjguLLguJrguLHguI3guIrguLXguILguK3guIfguITguLjguJNcclxuICAgICAgICDguYLguJTguKLguJfguLXguYjguITguLjguJPguKHguLXguKrguLTguJfguJjguLTguYzguYPguJnguIHguLLguKPguJXguKPguKfguIjguKrguK3guJpcclxuICAgICAgICA8YnIgLz4g4LmB4LiB4LmJ4LmE4LiCIOC4q+C4o+C4t+C4reC4peC4muC4guC5ieC4reC4oeC4ueC4peC4guC4reC4h+C4hOC4uOC4kyDguJXguLLguKHguJfguLXguYjguITguLjguJPguJXguYnguK3guIfguIHguLLguKNcclxuICAgICAgPC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50LXRleHRcIj5cclxuICAgICAgICDguJnguK3guIHguIjguLLguIHguJnguLXguYnguYDguKPguLLguKLguLHguIfguKHguLXguKHguLLguJXguKPguIHguLLguKPguJfguLXguYjguYDguKvguKHguLLguLDguKrguKHguYDguJ7guLfguYjguK3guJvguIHguJvguYnguK3guIfguILguYnguK3guKHguLnguKXguILguK3guIfguITguLjguJPguIjguLLguIHguIHguLLguKPguYDguILguYnguLLguJbguLbguIfguYLguJTguKLguYTguKHguYjguYTguJTguYnguKPguLHguJrguK3guJnguLjguI3guLLguJV7XCIgXCJ9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAg4Lir4Lij4Li34Lit4LiB4Liy4Lij4LmD4LiK4LmJ4LiH4Liy4LiZ4LiX4Li14LmI4LmE4Lih4LmI4LmA4Lir4Lih4Liy4Liw4Liq4LihXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudC10ZXh0XCI+XHJcbiAgICAgICAg4LiB4Liy4Lij4Lii4Lit4Lih4Lij4Lix4Lia4LiZ4LmC4Lii4Lia4Liy4Lii4LiE4Lin4Liy4Lih4LmA4Lib4LmH4LiZ4Liq4LmI4Lin4LiZ4LiV4Lix4Lin4LmA4Lib4LmH4LiZ4LiB4Liy4Lij4Liq4Lij4LmJ4Liy4LiHXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAg4LiE4Lin4Liy4Lih4LmE4Lin4LmJ4Lin4Liy4LiH4LmD4LiI4LmB4Lil4Liw4LiE4Lin4Liy4Lih4LmC4Lib4Lij4LmI4LiH4LmD4Liq4Lij4Liw4Lir4Lin4LmI4Liy4LiH4LmA4Lij4Liy4LmB4Lil4Liw4LiE4Li44LiTXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAg4LmD4LiZ4LiB4Liy4Lij4LmD4LiK4LmJ4Lia4Lij4Li04LiB4Liy4Lij4LiC4Lit4LiH4LmA4Lij4LiyXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudC10ZXh0XCI+XHJcbiAgICAgICAg4Lir4Liy4LiB4LiE4Li44LiT4Lih4Li14LiE4Liz4LiW4Liy4LihXHJcbiAgICAgICAg4LmC4Lib4Lij4LiU4Lit4LmI4Liy4LiZ4LiC4LmJ4Lit4Lih4Li54Lil4LmA4Lie4Li04LmI4Lih4LmA4LiV4Li04Lih4Lir4Lij4Li34Lit4LiV4Li04LiU4LiV4LmI4Lit4LmA4Lij4Liy4LmE4LiU4LmJ4LiX4Li14LmI4LmB4Lic4LiZ4LiB4Lia4Lij4Li04LiB4Liy4Lij4Lil4Li54LiB4LiE4LmJ4Liy4LiC4Lit4LiH4LmA4Lij4LiyXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtY29udGFpbmVyXCI+XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1sYWJlbFwiIG9uQ2xpY2s9e2hhbmRsZUNoZWNrYm94Q2xpY2t9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY3VzdG9tLWNoZWNrYm94ICR7aXNDaGVja2VkID8gJ2NoZWNrZWQnIDogJyd9YH0+XHJcbiAgICAgICAgICB7aXNDaGVja2VkICYmIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrbWFya1wiPuKckzwvc3Bhbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICDguKLguK3guKHguKPguLHguJrguILguYnguK3guIHguLPguKvguJnguJTguYHguKXguLDguJnguYLguKLguJrguLLguKLguITguKfguLLguKHguYDguJvguYfguJnguKrguYjguKfguJnguJXguLHguKc8L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0blwiXHJcbiAgICAgICAgLy8gZGlzYWJsZWQ9eyFpc0NoZWNrZWR9IC8vIOC4m+C4uOC5iOC4oeC4iOC4sOC4luC4ueC4geC4m+C4tOC4lOC5g+C4iuC5ieC4h+C4suC4meC4q+C4suC4geC5hOC4oeC5iOC5hOC4lOC5ieC4leC4tOC5iuC4gSBjaGVja2JveFxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcbiAgICAgID5cclxuICAgICAgICDguJXguYjguK3guYTguJtcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUERQQUNvbnNlbnRQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQXJyb3dMZWZ0IiwiUERQQUNvbnNlbnRQYWdlIiwicm91dGVyIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwiVXNlcklkIiwicXVlcnkiLCJoYW5kbGVDaGVja2JveENsaWNrIiwiaGFuZGxlTmV4dCIsInRvYXN0IiwiZXJyb3IiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJoaXN0b3J5IiwiYmFjayIsImgxIiwicCIsImJyIiwibGFiZWwiLCJzcGFuIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/PDPAConsentPage.js\n"));

/***/ })

});