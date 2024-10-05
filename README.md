# Foot3DModel_Thesis

## วิธี start เด้อ

- ตัว node_modules ได้อัปไปเเล้วว npm install อาจจะไม่ต้อง

```

npm install react-icons
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-solid-svg-icons
npm install react-datepicker
npm install @fortawesome/free-regular-svg-icons
npm install jsonwebtoken  
npm install  nodemailer 

$env:NODE_OPTIONS="--openssl-legacy-provider"
npm run dev

```



## ทดลอง ฝั่ง back เด้อออออ


      https://www.loom.com/share/8384b21c07204d9abe43b0341643df6f?sid=563a467c-4516-4035-b360-4fe64c26655f




* 1.  index.js 
    ส่วนก่อนจะเข้าสู่ระบบ
    error จะเเสดง ในส่วนของ div page เลย
    ส่วน ที่จะไปหน้าถัดไปจะอยู่ในส่วน alert popup



เรื่องที่จะถาม คือเราควรจะใช้ error msg. เป็นภาษาไทยทั้งหมดเลยเนอะ

* 2.settingAcc.js
    error จะเเสดง ในส่วนของ div page เลย
    จะไม่ได้บังคับส่วนของ image profile เด้อออ


* 3.PDPA.js
  error จะเเสดง ในส่วนของ div page เลย

* 4.Comple__.js
    error จะเเสดง ในส่วนของ div page เลย
     ตัวฟอร์มที่ส่งคือเเบบนี้
    {punyanuch} เป็น Username จาก หน้าเเรกเลย

    Hello {punyanuch},
    
    Your verification code is: XZHGTW
    
    This code will expire in 1 hour.
    
    Thank you!
    
    
    {XZHGTW} -- > อันนี้ Generate มา เเต่ส่วนนี้คือเก็บได้เเค่ 1 ชม.



* 5.login.js

  ก็ตรวจสอบ User table เหมือนเดิม
  เดียวไปเเก้ให้ทำเเบบ 1-4 ให้



## set .env

![image](https://github.com/user-attachments/assets/7c5498d0-5b06-4c45-aa9e-3e253e4817b9)

* วิธีเเก้ set .env ใหม่ เราจะทำ backให้สามารถส่ง เมลได้จากขั้นตอนนี้


      https://www.loom.com/share/0d40f48de2874e858c4b40fc9f50d083?sid=8308e627-3c86-4d16-9924-509b25382204



1. เข้ามาดู link นี้
https://support.google.com/accounts/answer/185839?sjid=10816039124386079957-AP&authuser=2 

ทำตามที่บอก เปิดยืนยัน 2 ขั้นตอน พอเปิดเเล้วจะใช้งานตัว Add passwords ได้




2.เข้า link นี้
https://myaccount.google.com/u/2/apppasswords?pli=1&rapt=AEjHL4Mf2I6NlR6_Kb9U-puLDI8xlfgTLo_dwiMAab2cJAn6u-m7bAwpxwgBOrG60xUXV4k8Lv6s598qT3bzkIFh5W4i1n2XYeeYJq2EQTXdyd7RPYleOAw&pageId=none 

จะเป็นตัว Add passwords
หลังจากนั้น เพิ่มชื่อ มันจะ generate code ให้



3.ไปที่ project เข้าไปที่ .env


EMAIL_USER= email ที่เราลงทะเบียน 
EMAIL_PASS= รหัสจาก Add passwords


วิธีการลงทะเบียนเพื่อใช้งาน email 
https://support.google.com/accounts/answer/185839?sjid=10816039124386079957-AP&authuser=2 

![image](https://github.com/user-attachments/assets/92da9089-9b82-4bef-b514-525a1e0837c2)

 
https://myaccount.google.com/u/2/apppasswords?pli=1&rapt=AEjHL4Mf2I6NlR6_Kb9U-puLDI8xlfgTLo_dwiMAab2cJAn6u-m7bAwpxwgBOrG60xUXV4k8Lv6s598qT3bzkIFh5W4i1n2XYeeYJq2EQTXdyd7RPYleOAw&pageId=none 

 
![image](https://github.com/user-attachments/assets/dfa6219c-ae64-4f13-b838-bfafe84d8316)




## set db ของ mysql

[db.js]

![image](https://github.com/user-attachments/assets/2fff2786-6ea9-4d63-838c-6a7ce88b484a)


เปลี่ยนในนี้เลยย

      const db = mysql.createPool({
        host: 'localhost', // ชื่อโฮสต์ของฐานข้อมูล
        user: 'root', // ชื่อผู้ใช้ของ MySQL
        password: 'เปลี่ยนเป็นของตัวเองงง', // รหัสผ่านของ MySQL
        database: 'foot3dmodel' // ชื่อฐานข้อมูล
      });



