import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
    const [emails, setEmails] = useState('');
    const [emailLogs, setEmailLogs] = useState([]);

    const fetchEmailLogs = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/email/logs', {
            headers: { Authorization: `Bearer ${token}` },
        });
        setEmailLogs(response.data);
    };

    const handleSendEmails = async () => {
        const token = localStorage.getItem('token');
        const emailArray = emails.split(',').map(email => email.trim());
        await axios.post('http://localhost:5000/api/email/send', { emails: emailArray }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        fetchEmailLogs();
    };

    useEffect(() => {
        fetchEmailLogs();
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <textarea
                placeholder="Enter company emails separated by commas"
                value={emails}
                onChange={(e) => setEmails(e.target.value)}
            />
            <button onClick={handleSendEmails}>Send Emails</button>

            <h3>Email Logs</h3>
            <ul>
                {emailLogs.map(log => (
                    <li key={log._id}>
                        <span>{log.companyEmail}</span> - Status: {log.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
