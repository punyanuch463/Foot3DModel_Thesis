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
exports.id = "pages/api/verifyCode";
exports.ids = ["pages/api/verifyCode"];
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

/***/ "(api)/./pages/api/verifyCode.js":
/*!*********************************!*\
  !*** ./pages/api/verifyCode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"(api)/./pages/api/db.js\");\n// pages/api/verifyCode.js\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { UserId , code  } = req.body;\n        console.log(\"Received verification request:\", {\n            UserId,\n            code\n        });\n        // ตรวจสอบว่ามี UserId และ code หรือไม่\n        if (!UserId || !code) {\n            console.warn(\"Missing UserId or code in the request body.\");\n            return res.status(400).json({\n                error: \"กรุณากรอก Verification Code  .\"\n            });\n        }\n        // // ตรวจสอบว่า UserId เป็นตัวเลข\n        // if (typeof UserId !== 'number') {\n        //   console.warn('Invalid UserId type:', UserId);\n        //   return res.status(400).json({ error: 'UserId must be a number.'});\n        // }\n        try {\n            const [verificationRecords] = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].execute(`SELECT * FROM EmailVerification \r\n         WHERE UserId = ? AND VerificationCode = ? \r\n          `, [\n                UserId,\n                code\n            ]);\n            console.log(\"Verification records found:\", verificationRecords);\n            if (verificationRecords.length === 0) {\n                console.warn(\"No matching verification records found.\");\n                return res.status(400).json({\n                    error: \" Verification code ไม่ถูกต้องหรือหมดอายุ.\"\n                });\n            }\n            return res.status(200).json({\n                message: \"Verification successful!\"\n            });\n        } catch (error) {\n            console.error(\"Error verifying code:\", error);\n            return res.status(500).json({\n                error: \"Internal server error during verification.\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        return res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmVyaWZ5Q29kZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBCQUEwQjtBQUVKO0FBRVAsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTSxFQUFFQyxNQUFNLEdBQUVDLElBQUksR0FBRSxHQUFHSixHQUFHLENBQUNLLElBQUk7UUFFakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdDQUFnQyxFQUFFO1lBQUVKLE1BQU07WUFBRUMsSUFBSTtTQUFFLENBQUMsQ0FBQztRQUVoRSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDRCxNQUFNLElBQUksQ0FBQ0MsSUFBSSxFQUFFO1lBQ3BCRSxPQUFPLENBQUNFLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1lBQzVELE9BQU9QLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxnQ0FBZ0M7YUFBRSxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUVELGtDQUFrQztRQUNsQyxvQ0FBb0M7UUFDcEMsa0RBQWtEO1FBQ2xELHVFQUF1RTtRQUN2RSxJQUFJO1FBRUosSUFBSTtZQUNGLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUMsR0FBRyxNQUFNZCxtREFBVSxDQUM1QyxDQUFDO2dCQUdBSyxNQUFNOzthQUFPLENBQ2Y7WUFFREcsT0FBTyxDQUFDQztZQUVSO2dCQUNFRCxPQUFPLENBQUNFLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPUCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUUsMkNBQTJDO2lCQUFFLENBQUMsQ0FBQztZQUN0RixDQUFDO1lBRUQsT0FBT1Y7O2FBQTRELENBQUMsQ0FBQztRQUN2RSxFQUFFLE9BQU9VLEtBQUssRUFBRTtZQUNkTDtZQUNBLE9BQU9MLEdBQUcsQ0FBQ1E7Z0JBQW1CRSxLQUFLLEVBQUU7YUFBOEMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7SUFDSCxPQUFPO1FBQ0xWO1lBQXdCO1NBQU8sQ0FBQyxDQUFDO1FBQ2pDLE9BQU9BLEdBQUc7SUFDWixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZm9vdDNkLW1vZGVsLy4vcGFnZXMvYXBpL3ZlcmlmeUNvZGUuanM/YWEyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvdmVyaWZ5Q29kZS5qc1xyXG5cclxuaW1wb3J0IGRiIGZyb20gJy4vZGInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHsgVXNlcklkLCBjb2RlIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgdmVyaWZpY2F0aW9uIHJlcXVlc3Q6JywgeyBVc2VySWQsIGNvZGUgfSk7XHJcblxyXG4gICAgLy8g4LiV4Lij4Lin4LiI4Liq4Lit4Lia4Lin4LmI4Liy4Lih4Li1IFVzZXJJZCDguYHguKXguLAgY29kZSDguKvguKPguLfguK3guYTguKHguYhcclxuICAgIGlmICghVXNlcklkIHx8ICFjb2RlKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBVc2VySWQgb3IgY29kZSBpbiB0aGUgcmVxdWVzdCBib2R5LicpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ+C4geC4o+C4uOC4k+C4suC4geC4o+C4reC4gSBWZXJpZmljYXRpb24gQ29kZSAgLicgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLy8g4LiV4Lij4Lin4LiI4Liq4Lit4Lia4Lin4LmI4LiyIFVzZXJJZCDguYDguJvguYfguJnguJXguLHguKfguYDguKXguIJcclxuICAgIC8vIGlmICh0eXBlb2YgVXNlcklkICE9PSAnbnVtYmVyJykge1xyXG4gICAgLy8gICBjb25zb2xlLndhcm4oJ0ludmFsaWQgVXNlcklkIHR5cGU6JywgVXNlcklkKTtcclxuICAgIC8vICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdVc2VySWQgbXVzdCBiZSBhIG51bWJlci4nfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgW3ZlcmlmaWNhdGlvblJlY29yZHNdID0gYXdhaXQgZGIuZXhlY3V0ZShcclxuICAgICAgICBgU0VMRUNUICogRlJPTSBFbWFpbFZlcmlmaWNhdGlvbiBcclxuICAgICAgICAgV0hFUkUgVXNlcklkID0gPyBBTkQgVmVyaWZpY2F0aW9uQ29kZSA9ID8gXHJcbiAgICAgICAgICBgLFxyXG4gICAgICAgIFtVc2VySWQsIGNvZGVdXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnVmVyaWZpY2F0aW9uIHJlY29yZHMgZm91bmQ6JywgdmVyaWZpY2F0aW9uUmVjb3Jkcyk7XHJcblxyXG4gICAgICBpZiAodmVyaWZpY2F0aW9uUmVjb3Jkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ05vIG1hdGNoaW5nIHZlcmlmaWNhdGlvbiByZWNvcmRzIGZvdW5kLicpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnIFZlcmlmaWNhdGlvbiBjb2RlIOC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h+C4q+C4o+C4t+C4reC4q+C4oeC4lOC4reC4suC4ouC4uC4nIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnVmVyaWZpY2F0aW9uIHN1Y2Nlc3NmdWwhJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZlcmlmeWluZyBjb2RlOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3IgZHVyaW5nIHZlcmlmaWNhdGlvbi4nIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiVXNlcklkIiwiY29kZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwid2FybiIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInZlcmlmaWNhdGlvblJlY29yZHMiLCJleGVjdXRlIiwibGVuZ3RoIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/verifyCode.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/verifyCode.js"));
module.exports = __webpack_exports__;

})();