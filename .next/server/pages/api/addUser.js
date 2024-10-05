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
exports.id = "pages/api/addUser";
exports.ids = ["pages/api/addUser"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/addUser.js":
/*!******************************!*\
  !*** ./pages/api/addUser.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"(api)/./pages/api/db.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// ฟังก์ชันในการสร้างรหัสยืนยันแบบสุ่ม\nconst generateCode = ()=>{\n    return Math.random().toString(36).substring(2, 8).toUpperCase(); // สุ่มรหัส 6 หลัก\n};\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { UserName , UserPassWord , UserEmail , PhoneNumber  } = req.body;\n        // ตรวจสอบฟิลด์ที่จำเป็น\n        if (!UserName || !UserPassWord || !UserEmail) {\n            return res.status(400).json({\n                message: \"Missing required fields\"\n            });\n        }\n        // ตรวจสอบรูปแบบอีเมล\n        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        if (!emailRegex.test(UserEmail)) {\n            return res.status(400).json({\n                message: \"Invalid email format\"\n            });\n        }\n        // ตรวจสอบความยาวรหัสผ่าน\n        if (UserPassWord.length < 6) {\n            return res.status(400).json({\n                message: \"Password must be at least 6 characters long\"\n            });\n        }\n        // Hash รหัสผ่านก่อนเก็บ (แนะนำให้ใช้ bcrypt หรือ library อื่นๆ)\n        // ตัวอย่างใช้ bcrypt\n        // const bcrypt = require('bcrypt');\n        // const saltRounds = 10;\n        // const hashedPassword = await bcrypt.hash(UserPassWord, saltRounds);\n        const connection = await _db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getConnection(); // สมมติว่า db.getConnection() คืนค่า Promise ของการเชื่อมต่อ\n        try {\n            // เริ่ม Transaction\n            await connection.beginTransaction();\n            // ตรวจสอบว่ามีผู้ใช้ที่มีอีเมลเดียวกันหรือไม่\n            const [existingUsers] = await connection.execute(\"SELECT * FROM User WHERE UserEmail = ?\", [\n                UserEmail\n            ]);\n            if (existingUsers.length > 0) {\n                await connection.rollback();\n                return res.status(400).json({\n                    message: \"Email already exists\"\n                });\n            }\n            // เพิ่มผู้ใช้ใหม่ในตาราง User\n            const insertUserQuery = `\r\n        INSERT INTO User (UserName, UserPassWord, UserEmail, PhoneNumber) \r\n        VALUES (?, ?, ?, ?)\r\n      `;\n            const userValues = [\n                UserName,\n                UserPassWord,\n                UserEmail,\n                PhoneNumber || null\n            ];\n            const [userResult] = await connection.execute(insertUserQuery, userValues);\n            const newUserId = userResult.insertId;\n            // สร้างรหัสยืนยันและวันหมดอายุ\n            const verificationCode = generateCode();\n            const expirationDate = new Date(Date.now() + 60 * 60 * 1000); // 1 ชั่วโมงจากนี้\n            // เพิ่มรายการยืนยันในตาราง EmailVerification\n            const insertVerificationQuery = `\r\n        INSERT INTO EmailVerification (UserId, VerificationCode, ExpirationDate, Verified)\r\n        VALUES (?, ?, ?, FALSE)\r\n      `;\n            await connection.execute(insertVerificationQuery, [\n                newUserId,\n                verificationCode,\n                expirationDate\n            ]);\n            // ส่งอีเมลยืนยัน\n            const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1___default().createTransport({\n                service: \"Gmail\",\n                auth: {\n                    user: process.env.EMAIL_USER,\n                    pass: process.env.EMAIL_PASS\n                }\n            });\n            const mailOptions = {\n                from: process.env.EMAIL_USER,\n                to: UserEmail,\n                subject: \"Email Verification\",\n                text: `Hello ${UserName},\\n\\nYour verification code is: ${verificationCode}\\n\\nThis code will expire in 1 hour.\\n\\nThank you!`\n            };\n            await transporter.sendMail(mailOptions);\n            // หากทุกอย่างสำเร็จ ให้ Commit Transaction\n            await connection.commit();\n            res.status(201).json({\n                message: \"User registered successfully. Verification email sent.\",\n                UserId: newUserId\n            });\n        } catch (error) {\n            // ในกรณีที่เกิดข้อผิดพลาด ให้ Rollback Transaction\n            await connection.rollback();\n            console.error(\"Error during user registration and email verification:\", error);\n            res.status(500).json({\n                message: \"Internal server error\",\n                error: error.message\n            });\n        } finally{\n            // ปลดการเชื่อมต่อ\n            connection.release();\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        return res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxjQUFjO2FBQUMsQ0FBQyxDQUFDOztZQUdqRyxNQUFNSSxXQUFXLEdBQUd0QyxVQUFVLENBQUN1QyxlQUFlLENBQUM7Z0JBQzdDQyxPQUFPLEVBQUU7Z0JBQ1RDLElBQUksRUFBRTtvQkFDSkMsSUFBSSxFQUFFQzs7aUJBRVA7YUFDRixDQUFDO1lBRUYsTUFBTUssV0FBVyxHQUFHO2dCQUNsQkMsSUFBSSxFQUFFTjtnQkFDTk8sRUFBRSxFQUFFckMsU0FBUztnQkFDYnNDLE9BQU8sRUFBRSxvQkFBb0I7Z0JBQzdCQzthQUNEO1lBRUQsTUFBTWQsV0FBVyxDQUFDZTtZQUVsQjtZQUNBLE1BQU0vQixVQUFVLENBQUNnQztZQUVqQjdDLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSx3REFBd0Q7O2FBQXFCLENBQUMsQ0FBQztRQUNqSCxFQUFFLE9BQU9zQyxLQUFLLEVBQUU7WUFDZDtZQUNBLE1BQU1sQyxVQUFVLENBQUNLO1lBQ2pCOEIsT0FBTyxDQUFDRCxLQUFLLENBQUMsd0RBQXdEO1lBQ3RFL0MsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQzs7Z0JBQW9DdUMsS0FBSyxFQUFFQTthQUFlLENBQUMsQ0FBQztRQUNuRixDQUFDLFFBQVM7WUFDUixrQkFBa0I7WUFDbEJsQyxVQUFVLENBQUNvQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0gsT0FBTztRQUNMakQsR0FBRyxDQUFDa0Q7WUFBb0IsTUFBTTtTQUFDLENBQUMsQ0FBQztRQUNqQyxPQUFPbEQsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM0QztJQUN6QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtZm9vdDNkLW1vZGVsLy4vcGFnZXMvYXBpL2FkZFVzZXIuanM/OTFkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGIgZnJvbSAnLi9kYic7XHJcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xyXG5cclxuLy8g4Lif4Lix4LiH4LiB4LmM4LiK4Lix4LiZ4LmD4LiZ4LiB4Liy4Lij4Liq4Lij4LmJ4Liy4LiH4Lij4Lir4Lix4Liq4Lii4Li34LiZ4Lii4Lix4LiZ4LmB4Lia4Lia4Liq4Li44LmI4LihXHJcbmNvbnN0IGdlbmVyYXRlQ29kZSA9ICgpID0+IHtcclxuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDgpLnRvVXBwZXJDYXNlKCk7IC8vIOC4quC4uOC5iOC4oeC4o+C4q+C4seC4qiA2IOC4q+C4peC4seC4gVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHsgVXNlck5hbWUsIFVzZXJQYXNzV29yZCwgVXNlckVtYWlsLCBQaG9uZU51bWJlciB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgLy8g4LiV4Lij4Lin4LiI4Liq4Lit4Lia4Lif4Li04Lil4LiU4LmM4LiX4Li14LmI4LiI4Liz4LmA4Lib4LmH4LiZXHJcbiAgICBpZiAoIVVzZXJOYW1lIHx8ICFVc2VyUGFzc1dvcmQgfHwgIVVzZXJFbWFpbCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnTWlzc2luZyByZXF1aXJlZCBmaWVsZHMnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOC4leC4o+C4p+C4iOC4quC4reC4muC4o+C4ueC4m+C5geC4muC4muC4reC4teC5gOC4oeC4pVxyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoVXNlckVtYWlsKSkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBlbWFpbCBmb3JtYXQnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOC4leC4o+C4p+C4iOC4quC4reC4muC4hOC4p+C4suC4oeC4ouC4suC4p+C4o+C4q+C4seC4quC4nOC5iOC4suC4mVxyXG4gICAgaWYgKFVzZXJQYXNzV29yZC5sZW5ndGggPCA2KSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIYXNoIOC4o+C4q+C4seC4quC4nOC5iOC4suC4meC4geC5iOC4reC4meC5gOC4geC5h+C4miAo4LmB4LiZ4Liw4LiZ4Liz4LmD4Lir4LmJ4LmD4LiK4LmJIGJjcnlwdCDguKvguKPguLfguK0gbGlicmFyeSDguK3guLfguYjguJnguYYpXHJcbiAgICAvLyDguJXguLHguKfguK3guKLguYjguLLguIfguYPguIrguYkgYmNyeXB0XHJcbiAgICAvLyBjb25zdCBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHQnKTtcclxuICAgIC8vIGNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcclxuICAgIC8vIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goVXNlclBhc3NXb3JkLCBzYWx0Um91bmRzKTtcclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgZGIuZ2V0Q29ubmVjdGlvbigpOyAvLyDguKrguKHguKHguJXguLTguKfguYjguLIgZGIuZ2V0Q29ubmVjdGlvbigpIOC4hOC4t+C4meC4hOC5iOC4siBQcm9taXNlIOC4guC4reC4h+C4geC4suC4o+C5gOC4iuC4t+C5iOC4reC4oeC4leC5iOC4rVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIOC5gOC4o+C4tOC5iOC4oSBUcmFuc2FjdGlvblxyXG4gICAgICBhd2FpdCBjb25uZWN0aW9uLmJlZ2luVHJhbnNhY3Rpb24oKTtcclxuXHJcbiAgICAgIC8vIOC4leC4o+C4p+C4iOC4quC4reC4muC4p+C5iOC4suC4oeC4teC4nOC4ueC5ieC5g+C4iuC5ieC4l+C4teC5iOC4oeC4teC4reC4teC5gOC4oeC4peC5gOC4lOC4teC4ouC4p+C4geC4seC4meC4q+C4o+C4t+C4reC5hOC4oeC5iFxyXG4gICAgICBjb25zdCBbZXhpc3RpbmdVc2Vyc10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoJ1NFTEVDVCAqIEZST00gVXNlciBXSEVSRSBVc2VyRW1haWwgPSA/JywgW1VzZXJFbWFpbF0pO1xyXG4gICAgICBpZiAoZXhpc3RpbmdVc2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdGlvbi5yb2xsYmFjaygpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdFbWFpbCBhbHJlYWR5IGV4aXN0cycgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOC5gOC4nuC4tOC5iOC4oeC4nOC4ueC5ieC5g+C4iuC5ieC5g+C4q+C4oeC5iOC5g+C4meC4leC4suC4o+C4suC4hyBVc2VyXHJcbiAgICAgIGNvbnN0IGluc2VydFVzZXJRdWVyeSA9IGBcclxuICAgICAgICBJTlNFUlQgSU5UTyBVc2VyIChVc2VyTmFtZSwgVXNlclBhc3NXb3JkLCBVc2VyRW1haWwsIFBob25lTnVtYmVyKSBcclxuICAgICAgICBWQUxVRVMgKD8sID8sID8sID8pXHJcbiAgICAgIGA7XHJcbiAgICAgIGNvbnN0IHVzZXJWYWx1ZXMgPSBbVXNlck5hbWUsIFVzZXJQYXNzV29yZCwgVXNlckVtYWlsLCBQaG9uZU51bWJlciB8fCBudWxsXTtcclxuICAgICAgY29uc3QgW3VzZXJSZXN1bHRdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKGluc2VydFVzZXJRdWVyeSwgdXNlclZhbHVlcyk7XHJcbiAgICAgIGNvbnN0IG5ld1VzZXJJZCA9IHVzZXJSZXN1bHQuaW5zZXJ0SWQ7XHJcblxyXG4gICAgICAvLyDguKrguKPguYnguLLguIfguKPguKvguLHguKrguKLguLfguJnguKLguLHguJnguYHguKXguLDguKfguLHguJnguKvguKHguJTguK3guLLguKLguLhcclxuICAgICAgY29uc3QgdmVyaWZpY2F0aW9uQ29kZSA9IGdlbmVyYXRlQ29kZSgpO1xyXG4gICAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkgKyA2MCAqIDYwICogMTAwMCk7IC8vIDEg4LiK4Lix4LmI4Lin4LmC4Lih4LiH4LiI4Liy4LiB4LiZ4Li14LmJXHJcblxyXG4gICAgICAvLyDguYDguJ7guLTguYjguKHguKPguLLguKLguIHguLLguKPguKLguLfguJnguKLguLHguJnguYPguJnguJXguLLguKPguLLguIcgRW1haWxWZXJpZmljYXRpb25cclxuICAgICAgY29uc3QgaW5zZXJ0VmVyaWZpY2F0aW9uUXVlcnkgPSBgXHJcbiAgICAgICAgSU5TRVJUIElOVE8gRW1haWxWZXJpZmljYXRpb24gKFVzZXJJZCwgVmVyaWZpY2F0aW9uQ29kZSwgRXhwaXJhdGlvbkRhdGUsIFZlcmlmaWVkKVxyXG4gICAgICAgIFZBTFVFUyAoPywgPywgPywgRkFMU0UpXHJcbiAgICAgIGA7XHJcbiAgICAgIGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShpbnNlcnRWZXJpZmljYXRpb25RdWVyeSwgW25ld1VzZXJJZCwgdmVyaWZpY2F0aW9uQ29kZSwgZXhwaXJhdGlvbkRhdGVdKTtcclxuXHJcbiAgICAgIC8vIOC4quC5iOC4h+C4reC4teC5gOC4oeC4peC4ouC4t+C4meC4ouC4seC4mVxyXG4gICAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgICAgICBzZXJ2aWNlOiAnR21haWwnLFxyXG4gICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsIC8vIOC4reC4teC5gOC4oeC4peC4guC4reC4h+C4hOC4uOC4k1xyXG4gICAgICAgICAgcGFzczogcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUywgLy8g4Lij4Lir4Lix4Liq4Lic4LmI4Liy4LiZ4LmB4Lit4LibIEdtYWlsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcclxuICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxyXG4gICAgICAgIHRvOiBVc2VyRW1haWwsXHJcbiAgICAgICAgc3ViamVjdDogJ0VtYWlsIFZlcmlmaWNhdGlvbicsXHJcbiAgICAgICAgdGV4dDogYEhlbGxvICR7VXNlck5hbWV9LFxcblxcbllvdXIgdmVyaWZpY2F0aW9uIGNvZGUgaXM6ICR7dmVyaWZpY2F0aW9uQ29kZX1cXG5cXG5UaGlzIGNvZGUgd2lsbCBleHBpcmUgaW4gMSBob3VyLlxcblxcblRoYW5rIHlvdSFgLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xyXG5cclxuICAgICAgLy8g4Lir4Liy4LiB4LiX4Li44LiB4Lit4Lii4LmI4Liy4LiH4Liq4Liz4LmA4Lij4LmH4LiIIOC5g+C4q+C5iSBDb21taXQgVHJhbnNhY3Rpb25cclxuICAgICAgYXdhaXQgY29ubmVjdGlvbi5jb21taXQoKTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkuIFZlcmlmaWNhdGlvbiBlbWFpbCBzZW50LicsIFVzZXJJZDogbmV3VXNlcklkIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8g4LmD4LiZ4LiB4Lij4LiT4Li14LiX4Li14LmI4LmA4LiB4Li04LiU4LiC4LmJ4Lit4Lic4Li04LiU4Lie4Lil4Liy4LiUIOC5g+C4q+C5iSBSb2xsYmFjayBUcmFuc2FjdGlvblxyXG4gICAgICBhd2FpdCBjb25uZWN0aW9uLnJvbGxiYWNrKCk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyB1c2VyIHJlZ2lzdHJhdGlvbiBhbmQgZW1haWwgdmVyaWZpY2F0aW9uOicsIGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICAvLyDguJvguKXguJTguIHguLLguKPguYDguIrguLfguYjguK3guKHguJXguYjguK1cclxuICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsIm5vZGVtYWlsZXIiLCJnZW5lcmF0ZUNvZGUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJVc2VyTmFtZSIsIlVzZXJQYXNzV29yZCIsIlVzZXJFbWFpbCIsIlBob25lTnVtYmVyIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZW1haWxSZWdleCIsInRlc3QiLCJsZW5ndGgiLCJjb25uZWN0aW9uIiwiZ2V0Q29ubmVjdGlvbiIsImJlZ2luVHJhbnNhY3Rpb24iLCJleGlzdGluZ1VzZXJzIiwiZXhlY3V0ZSIsInJvbGxiYWNrIiwiaW5zZXJ0VXNlclF1ZXJ5IiwidXNlclZhbHVlcyIsInVzZXJSZXN1bHQiLCJuZXdVc2VySWQiLCJpbnNlcnRJZCIsInZlcmlmaWNhdGlvbkNvZGUiLCJleHBpcmF0aW9uRGF0ZSIsIkRhdGUiLCJub3ciLCJpbnNlcnRWZXJpZmljYXRpb25RdWVyeSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1VTRVIiLCJwYXNzIiwiRU1BSUxfUEFTUyIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsInRleHQiLCJzZW5kTWFpbCIsImNvbW1pdCIsIlVzZXJJZCIsImVycm9yIiwiY29uc29sZSIsInJlbGVhc2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/addUser.js\n");

/***/ }),

/***/ "(api)/./pages/api/db.js":
/*!*************************!*\
  !*** ./pages/api/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\n// สร้างการเชื่อมต่อฐานข้อมูล\nconst db = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: \"localhost\",\n    user: \"root\",\n    password: \"20032546\",\n    database: \"foot3dmodel\" // ชื่อฐานข้อมูล\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLDZCQUE2QjtBQUM3QixNQUFNQyxFQUFFLEdBQUdELGdFQUFnQixDQUFDO0lBQzFCRyxJQUFJLEVBQUUsV0FBVztJQUNqQkMsSUFBSSxFQUFFLE1BQU07SUFDWkMsUUFBUSxFQUFFLFVBQVU7SUFDcEJDLFFBQVEsRUFBRSxhQUFhLENBQUMsZ0JBQWdCO0NBQ3pDLENBQUM7QUFFRixpRUFBZUwsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1mb290M2QtbW9kZWwvLi9wYWdlcy9hcGkvZGIuanM/YjgxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuLy8g4Liq4Lij4LmJ4Liy4LiH4LiB4Liy4Lij4LmA4LiK4Li34LmI4Lit4Lih4LiV4LmI4Lit4LiQ4Liy4LiZ4LiC4LmJ4Lit4Lih4Li54LilXHJcbmNvbnN0IGRiID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgaG9zdDogJ2xvY2FsaG9zdCcsIC8vIOC4iuC4t+C5iOC4reC5guC4ruC4quC4leC5jOC4guC4reC4h+C4kOC4suC4meC4guC5ieC4reC4oeC4ueC4pVxyXG4gIHVzZXI6ICdyb290JywgLy8g4LiK4Li34LmI4Lit4Lic4Li54LmJ4LmD4LiK4LmJ4LiC4Lit4LiHIE15U1FMXHJcbiAgcGFzc3dvcmQ6ICcyMDAzMjU0NicsIC8vIOC4o+C4q+C4seC4quC4nOC5iOC4suC4meC4guC4reC4hyBNeVNRTFxyXG4gIGRhdGFiYXNlOiAnZm9vdDNkbW9kZWwnIC8vIOC4iuC4t+C5iOC4reC4kOC4suC4meC4guC5ieC4reC4oeC4ueC4pVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiO1xyXG4iXSwibmFtZXMiOlsibXlzcWwiLCJkYiIsImNyZWF0ZVBvb2wiLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addUser.js"));
module.exports = __webpack_exports__;

})();