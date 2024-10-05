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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/db.js":
/*!*************************!*\
  !*** ./pages/api/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\n// สร้างการเชื่อมต่อฐานข้อมูล\nconst db = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: \"localhost\",\n    user: \"root\",\n    password: \"20032546\",\n    database: \"foot3dmodel\" // ชื่อฐานข้อมูล\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLDZCQUE2QjtBQUM3QixNQUFNQyxFQUFFLEdBQUdELGdFQUFnQixDQUFDO0lBQzFCRyxJQUFJLEVBQUUsV0FBVztJQUNqQkMsSUFBSSxFQUFFLE1BQU07SUFDWkMsUUFBUSxFQUFFLFVBQVU7SUFDcEJDLFFBQVEsRUFBRSxhQUFhLENBQUMsZ0JBQWdCO0NBQ3pDLENBQUM7QUFFRixpRUFBZUwsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1mb290M2QtbW9kZWwvLi9wYWdlcy9hcGkvZGIuanM/YjgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuLy8g4Liq4Lij4LmJ4Liy4LiH4LiB4Liy4Lij4LmA4LiK4Li34LmI4Lit4Lih4LiV4LmI4Lit4LiQ4Liy4LiZ4LiC4LmJ4Lit4Lih4Li54LilXHJcbmNvbnN0IGRiID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgaG9zdDogJ2xvY2FsaG9zdCcsIC8vIOC4iuC4t+C5iOC4reC5guC4ruC4quC4leC5jOC4guC4reC4h+C4kOC4suC4meC4guC5ieC4reC4oeC4ueC4pVxyXG4gIHVzZXI6ICdyb290JywgLy8g4LiK4Li34LmI4Lit4Lic4Li54LmJ4LmD4LiK4LmJ4LiC4Lit4LiHIE15U1FMXHJcbiAgcGFzc3dvcmQ6ICcyMDAzMjU0NicsIC8vIOC4o+C4q+C4seC4quC4nOC5iOC4suC4meC4guC4reC4hyBNeVNRTFxyXG4gIGRhdGFiYXNlOiAnZm9vdDNkbW9kZWwnIC8vIOC4iuC4t+C5iOC4reC4kOC4suC4meC4guC5ieC4reC4oeC4ueC4pVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiO1xyXG4iXSwibmFtZXMiOlsibXlzcWwiLCJkYiIsImNyZWF0ZVBvb2wiLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"(api)/./pages/api/db.js\");\n// pages/api/login.js\n // สมมติว่ามีไฟล์ db.js ที่เชื่อมกับ MySQL\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { usernameOrEmail , UserPassWord  } = req.body;\n        console.log(\"Received login request:\", {\n            usernameOrEmail,\n            UserPassWord\n        });\n        try {\n            // ตรวจสอบผู้ใช้โดยใช้ username หรือ email และ password\n            const [user] = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].execute(`SELECT * FROM User \r\n         WHERE (UserEmail = ? OR UserName = ?) \r\n         AND UserPassWord = ?`, [\n                usernameOrEmail,\n                usernameOrEmail,\n                UserPassWord\n            ]);\n            console.log(\"User records found:\", user);\n            if (user.length === 0) {\n                console.warn(\"No matching user found or password incorrect.\");\n                return res.status(400).json({\n                    message: \"ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง\"\n                });\n            }\n            return res.status(200).json({\n                message: \"เข้าสู่ระบบสำเร็จ!\",\n                user: user[0]\n            });\n        } catch (error) {\n            console.error(\"Error during login:\", error);\n            return res.status(500).json({\n                message: \"เกิดข้อผิดพลาดในระบบ\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        return res.status(405).end(`Method ${req.method} ไม่ได้รับอนุญาต`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQkFBcUI7QUFFQyxDQUFDLDBDQUEwQztBQUVsRCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNLEVBQUVDLGVBQWUsR0FBRUMsWUFBWSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtRQUVsREMsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUU7WUFBRUosZUFBZTtZQUFFQyxZQUFZO1NBQUUsQ0FBQyxDQUFDO1FBRTFFLElBQUk7WUFDRix1REFBdUQ7WUFDdkQsTUFBTSxDQUFDSSxJQUFJLENBQUMsR0FBRyxNQUFNVixtREFBVSxDQUM3QixDQUFDO2dCQUdBSyxlQUFlO2dCQUFFQSxlQUFlO2dCQUFFQyxZQUFZO2FBQUMsQ0FDakQ7WUFFREUsT0FBTyxDQUFDQyxHQUFHLENBQUM7WUFFWjtnQkFDRUQsT0FBTyxDQUFDSyxJQUFJLENBQUM7Z0JBQ2IsT0FBT1YsR0FBRyxDQUFDVyxNQUFNLENBQUM7b0JBQVlFLE9BQU8sRUFBRSxrQ0FBa0M7aUJBQUUsQ0FBQyxDQUFDO1lBQy9FLENBQUM7WUFFRCxPQUFPYjs7Z0JBQXNETyxJQUFJLEVBQUVBLElBQUksQ0FBQyxDQUFDLENBQUM7YUFBRSxDQUFDLENBQUM7UUFDaEYsRUFBRSxPQUFPTyxLQUFLLEVBQUU7WUFDZFQ7WUFDQSxPQUFPTCxHQUFHLENBQUNXO2dCQUFtQkUsT0FBTyxFQUFFLHNCQUFzQjthQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDO0lBQ0gsT0FBTztRQUNMYjtZQUF3QjtTQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPQSxHQUFHO0lBQ1osQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LWZvb3QzZC1tb2RlbC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9sb2dpbi5qc1xyXG5cclxuaW1wb3J0IGRiIGZyb20gJy4vZGInOyAvLyDguKrguKHguKHguJXguLTguKfguYjguLLguKHguLXguYTguJ/guKXguYwgZGIuanMg4LiX4Li14LmI4LmA4LiK4Li34LmI4Lit4Lih4LiB4Lix4LiaIE15U1FMXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZU9yRW1haWwsIFVzZXJQYXNzV29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIGxvZ2luIHJlcXVlc3Q6JywgeyB1c2VybmFtZU9yRW1haWwsIFVzZXJQYXNzV29yZCB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyDguJXguKPguKfguIjguKrguK3guJrguJzguLnguYnguYPguIrguYnguYLguJTguKLguYPguIrguYkgdXNlcm5hbWUg4Lir4Lij4Li34LitIGVtYWlsIOC5geC4peC4sCBwYXNzd29yZFxyXG4gICAgICBjb25zdCBbdXNlcl0gPSBhd2FpdCBkYi5leGVjdXRlKFxyXG4gICAgICAgIGBTRUxFQ1QgKiBGUk9NIFVzZXIgXHJcbiAgICAgICAgIFdIRVJFIChVc2VyRW1haWwgPSA/IE9SIFVzZXJOYW1lID0gPykgXHJcbiAgICAgICAgIEFORCBVc2VyUGFzc1dvcmQgPSA/YCxcclxuICAgICAgICBbdXNlcm5hbWVPckVtYWlsLCB1c2VybmFtZU9yRW1haWwsIFVzZXJQYXNzV29yZF1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdVc2VyIHJlY29yZHMgZm91bmQ6JywgdXNlcik7XHJcblxyXG4gICAgICBpZiAodXNlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ05vIG1hdGNoaW5nIHVzZXIgZm91bmQgb3IgcGFzc3dvcmQgaW5jb3JyZWN0LicpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICfguIrguLfguYjguK3guJzguLnguYnguYPguIrguYnguKvguKPguLfguK3guKPguKvguLHguKrguJzguYjguLLguJnguYTguKHguYjguJbguLnguIHguJXguYnguK3guIcnIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAn4LmA4LiC4LmJ4Liy4Liq4Li54LmI4Lij4Liw4Lia4Lia4Liq4Liz4LmA4Lij4LmH4LiIIScsIHVzZXI6IHVzZXJbMF0gfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgbG9naW46JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAn4LmA4LiB4Li04LiU4LiC4LmJ4Lit4Lic4Li04LiU4Lie4Lil4Liy4LiU4LmD4LiZ4Lij4Liw4Lia4LiaJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0g4LmE4Lih4LmI4LmE4LiU4LmJ4Lij4Lix4Lia4Lit4LiZ4Li44LiN4Liy4LiVYCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VybmFtZU9yRW1haWwiLCJVc2VyUGFzc1dvcmQiLCJib2R5IiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJleGVjdXRlIiwibGVuZ3RoIiwid2FybiIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();