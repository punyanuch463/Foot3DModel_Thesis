import React, { useState } from 'react';

const EmailForm = () => {
    const [userEmail, setUserEmail] = useState('');

    const handleSendEmail = async () => {
        const response = await fetch('/api/sendVerificationEmail', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail }), 
        });
    
        const data = await response.json();
        if (response.ok) {
            console.log(data.message);
        } else {
            console.error(data.error);
        }
    };
    

    return (
        <div>
            <h1>ส่งรหัสยืนยันไปยังอีเมล</h1>
            <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="กรุณากรอกอีเมล"
            />
            <button onClick={handleSendEmail}>ส่งอีเมล</button>
        </div>
    );
};

export default EmailForm;
