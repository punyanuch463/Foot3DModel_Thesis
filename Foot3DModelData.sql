CREATE DATABASE foot3dmodel;
USE foot3dmodel;

-- create Table 

-- User
CREATE TABLE User (
    UserId INT AUTO_INCREMENT PRIMARY KEY,  -- กำหนด Primary Key และให้เพิ่มค่าอัตโนมัติ
    UserName VARCHAR(50) NOT NULL,          -- ชื่อผู้ใช้งาน (จำกัดความยาว 50 ตัวอักษร)
    UserPassWord VARCHAR(255) NOT NULL,     -- รหัสผ่าน (เข้ารหัสและจำกัดความยาว 255 ตัวอักษร)
    UserEmail VARCHAR(100),                 -- อีเมล (จำกัดความยาว 100 ตัวอักษร)
    PhoneNumber VARCHAR(15),                -- เบอร์โทร (จำกัดความยาว 15 ตัวอักษร)
    FullName VARCHAR(100),                  -- ชื่อ - นามสกุล (จำกัดความยาว 100 ตัวอักษร)
    Gender VARCHAR(10),   					-- เพศ (เลือกได้จาก ชาย, หญิง, หรือ อื่นๆ)
    Age INT,                                -- อายุ (จำนวนเต็ม)
    FootSizeCM DECIMAL(5,2),                -- ขนาดเท้า (ซม.) (จำนวนทศนิยม 2 ตำแหน่ง)
    HeightCM DECIMAL(5,2),                  -- ส่วนสูง (ซม.) (จำนวนทศนิยม 2 ตำแหน่ง)
    FootSizeEU INT                          -- ขนาดเท้า (EU) (จำนวนเต็ม)
);

-- Admin
CREATE TABLE Admin (
    AdminID INT AUTO_INCREMENT PRIMARY KEY,    -- Primary Key ที่เพิ่มค่าอัตโนมัติ
    AdminName VARCHAR(100) NOT NULL,           -- ชื่อ Admin
    AdminEmail VARCHAR(100) NOT NULL,               -- อีเมล
    AdminPassword VARCHAR(100) NOT NULL,         -- รหัสผ่าน
    PhoneNumber VARCHAR(20),                   -- เบอร์โทร
    FullName VARCHAR(100),                     -- ชื่อ - นามสกุล
    Gender  VARCHAR(20),    	   			 	-- เพศ
    BirthDate DATE,                            -- วัน-เดือน-ปีเกิด
    Height DECIMAL(5,2)                        -- ส่วนสูง (ทศนิยม 2 ตำแหน่ง)
);

CREATE TABLE EmailVerification (
    VerificationID INT AUTO_INCREMENT PRIMARY KEY,     -- Primary Key ที่เพิ่มค่าอัตโนมัติ
    UserId INT,                                        -- Foreign Key เชื่อมกับตาราง User
    VerificationCode VARCHAR(255) NOT NULL,            -- รหัสยืนยันแบบสุ่ม
    ExpirationDate DATETIME NOT NULL,                  -- วันหมดอายุของรหัสยืนยัน
    Verified BOOLEAN DEFAULT FALSE,                    -- สถานะการยืนยัน (true = ยืนยันแล้ว, false = ยังไม่ยืนยัน)
    
    -- เชื่อม Foreign Key กับตาราง User
    CONSTRAINT FK_UserID FOREIGN KEY (UserId) REFERENCES `User`(UserId) ON DELETE CASCADE
);

-- Order
CREATE TABLE `Order` (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,  -- Primary Key ที่เพิ่มค่าอัตโนมัติ
     UserId INT,							-- การเชื่อม Foreign Key กับตาราง User
    DateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,-- วันและเวลา ตั้งค่าเริ่มต้นเป็นเวลาปัจจุบัน

    -- การเชื่อม Foreign Key กับตาราง User
    CONSTRAINT FK_UserID FOREIGN KEY (UserID) REFERENCES `User`(UserID) ON DELETE CASCADE  
);


-- Notification
CREATE TABLE Notification (
    NotificationID INT AUTO_INCREMENT PRIMARY KEY,  -- กำหนด Primary Key และให้เพิ่มค่าอัตโนมัติ
    OrderID INT,                                    -- Foreign Key เชื่อมกับตาราง Order
   UserId INT,										-- การเชื่อม Foreign Key กับตาราง User
   AdminID INT ,									-- การเชื่อม Foreign Key กับตาราง Admin
   Username VARCHAR(50) NOT NULL,                  -- ชื่อผู้ใช้งาน (จำกัดความยาว 50 ตัวอักษร)
    NotificationDateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- วัน-เวลา (ตั้งค่าเริ่มต้นเป็นเวลา ณ ปัจจุบัน)
    Status VARCHAR(20) NOT NULL,                    -- สถานะของการแจ้งเตือน เช่น "ส่งแล้ว", "ล้มเหลว", "สำเร็จ"
    
    -- การเชื่อม Foreign Key กับตาราง Order
    CONSTRAINT FK_OrderID FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID) ON DELETE CASCADE,

    -- การเชื่อม Foreign Key กับตาราง User
    CONSTRAINT FK_UserID FOREIGN KEY (UserID) REFERENCES `User`(UserID) ON DELETE CASCADE,

    -- การเชื่อม Foreign Key กับตาราง Admin
    CONSTRAINT FK_AdminID FOREIGN KEY (AdminID) REFERENCES Admin(adminID) ON DELETE CASCADE
);

-- OrderDetailed
CREATE TABLE OrderDetailed (
 OrderDetailedID INT AUTO_INCREMENT PRIMARY KEY,  
    OrderID INT,                                -- Foreign Key เชื่อมกับตาราง Order
    FootImageID INT,                        -- Foreign Key เชื่อมกับตาราง ImageCategory
    
    -- การเชื่อม Foreign Key กับตารางต่างๆ
    CONSTRAINT FK_OrderID FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID) ON DELETE CASCADE,
    CONSTRAINT FK_FootImageID FOREIGN KEY (FootImageID) REFERENCES `FootImage`(FootImageID) ON DELETE CASCADE
   );


-- FootData
CREATE TABLE FootData (
    FootDataID INT AUTO_INCREMENT PRIMARY KEY,     -- Primary Key ที่เพิ่มค่าอัตโนมัติ
    OrderID INT,                                  -- Foreign Key เชื่อมกับตาราง Order
    FootLength DECIMAL(5,2),                      -- ความยาวเท้า (หน่วย ซม. มีทศนิยม 2 ตำแหน่ง)
    HeelToDistalMetatarsal DECIMAL(5,2),          -- ระยะจากส้นเท้าถึงปลายกระดูกฝ่าเท้า
    MiddleFootWidth DECIMAL(5,2),                 -- ความกว้างของเท้าตรงกลาง
    ApexOf1stMTH DECIMAL(5,2),                    -- ระยะจากส้นเท้าถึงหัวกระดูกฝ่าเท้าแรก
    ApexOf5thMTH DECIMAL(5,2),                    -- ระยะจากส้นเท้าถึงหัวกระดูกฝ่าเท้าที่ห้า
    ApexOf1stTo5thMTH DECIMAL(5,2),               -- ระยะระหว่างหัวกระดูกฝ่าเท้าลำดับที่ 1 และ 5
    HeelWidth DECIMAL(5,2),                       -- ความกว้างของส้นเท้า
    ArchHeight DECIMAL(5,2),                      -- ความสูงของอุ้งเท้า
    HeelToMiddleFoot DECIMAL(5,2),                -- ระยะจากส้นเท้าถึงกลางฝ่าเท้า
    Side  VARCHAR(20)  NOT NULL,           -- ฝั่งเท้า (ซ้าย/ขวา)
    
    -- เชื่อม Foreign Key กับตาราง Order
    CONSTRAINT FK_OrderID FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID) ON DELETE CASCADE
);


-- FootImage
CREATE TABLE FootImage (
    FootImageID INT AUTO_INCREMENT PRIMARY KEY,    -- Primary Key ที่เพิ่มค่าอัตโนมัติ
    ImageCategoryID INT,                          -- Foreign Key เชื่อมกับตาราง ImageCategory
    Side VARCHAR(20)  NOT NULL,           -- ฝั่งเท้า (ซ้าย/ขวา)
    Path VARCHAR(255) NOT NULL,                   -- ที่อยู่ของภาพถ่าย (Path)
    
    -- เชื่อม Foreign Key กับตาราง ImageCategory
    CONSTRAINT FK_ImageCategoryID FOREIGN KEY (ImageCategoryID) REFERENCES `ImageCategory`(ImageCategoryID) ON DELETE CASCADE
);

-- ImageCategory
CREATE TABLE ImageCategory (
    ImageCategoryID INT AUTO_INCREMENT PRIMARY KEY,  -- Primary Key ที่เพิ่มค่าอัตโนมัติ
    Description VARCHAR(255) NOT NULL                -- คำอธิบายประเภทของภาพถ่าย
);


-- insert data

select * from  EmailVerification ;
select * from User ;
DELETE FROM User WHERE UserName='punyanuch';
DELETE FROM User;
DROP TABLE User;
DROP TABLE EmailVerification;


INSERT INTO User (UserName, UserPassWord, UserEmail, PhoneNumber, FullName, Gender, Age, FootSizeCM, HeightCM, FootSizeEU) 
VALUES 
('Kornnaphat', 'Kornnaphat123', 'Kornnaphat.Seth@gmail.com', '0987654321', 'กรณ์นภัส เศรษฐรัตนพงศ์', 'Female', 21, 24, 165, 38),
('user2', 'password2', 'user2@example.com', '0987654321', 'Jane Doe', 'Female', 28, 25.0, 160.25, 39);


INSERT INTO Admin (AdminName, AdminEmail, AdminPassword, PhoneNumber, FullName, Gender, BirthDate, Height) 
VALUES 
('admin1', 'admin1@example.com', 'adminpass1', '1122334455', 'Admin User1', 'Male', '1980-01-01', 180.50),
('admin2', 'admin2@example.com', 'adminpass2', '2233445566', 'Admin User2', 'Female', '1985-02-15', 165.30);



INSERT INTO `Order` (UserId) 
VALUES 
(1), 
(2);  -- UserId จากตาราง User

INSERT INTO FootData (OrderID, FootLength, HeelToDistalMetatarsal, MiddleFootWidth, ApexOf1stMTH, ApexOf5thMTH, ApexOf1stTo5thMTH, HeelWidth, ArchHeight, HeelToMiddleFoot, Side) 
VALUES 
(1, 27.5, 20.5, 9.0, 7.5, 6.8, 13.0, 6.5, 4.5, 12.0, 'Left'),
(2, 25.0, 19.0, 8.5, 7.0, 6.2, 12.5, 6.0, 4.2, 11.5, 'Right');



INSERT INTO ImageCategory (ImageCategoryID ,Description) 
VALUES 
(1,'มุมข้างเท้าด้านในข้างซ้าย'), 
(2,'มุมฝ่าเท้าข้างซ้าย'), 
(3,'มุมหลังเท้าบนกระดาษข้างซ้าย'),
(4,'วาดเท้าบนกระดาษข้างซ้าย'),
(5,'มุมข้างเท้าด้านในข้างขวา'),
(6,'มุมฝ่าเท้าข้างขวา'), 
(7,'มุมหลังเท้าบนกระดาษข้างขวา'),
(8,'วาดเท้าบนกระดาษข้างขวา');


INSERT INTO FootImage (ImageCategoryID, Side, Path) 
VALUES 
(1, 'Left', '/path/to/left_top_view.jpg'),
(5, 'Right', '/path/to/right_side_view.jpg');

INSERT INTO OrderDetailed (OrderID, FootImageID) 
VALUES 
(1, 1), 
(2, 2);  -- เชื่อมกับ Order และ FootImage

INSERT INTO Notification (OrderID, UserID, AdminID, Username, Status) 
VALUES 
(1, 1, 1, 'user1', 'Success'), 
(2, 2, 2, 'user2', 'Failed');


