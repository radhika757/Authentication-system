import nodemailer from 'nodemailer';

// Enter the admin email id
const adminEmail = '';

// Create transporter object using SMTP ransport 
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-gmail@gmail.com",
        pass: "your-app-password"
    }
})

// Function to send emails to user and admin 
export const sendWelcomeEmails = (userEmail, userName) => {
    const welcomeMailOptions = {
        from: '"Auth System" <your-email@gmail.com>',
        to: userEmail,
        subject: "Welcome to Auth System",
        text: "We're excited to have you on board",
        html: "<p>Welcome to our platform</p>"
    }

    // Notification email for the admin
    const adminMailOptions = {
        from: '"Auth System" <your-email@gmail.com>', // Sender address
        to: adminEmail, // Admin's email address
        subject: 'New User Registered', // Subject line
        text: `Admin,\n\nA new user has registered on the platform. Here are the details:\n\nName: ${userName}\nEmail: ${userEmail}\n\nBest regards,\nYour Platform`, // Plain text body
        html: `<p>Admin,</p><p>A new user has registered on the platform. Here are the details:</p><p><strong>Name:</strong> ${userName}<br><strong>Email:</strong> ${userEmail}</p><p>Best regards,<br>Your Platform</p>`, // HTML body
    };

    transporter.sendMail(welcomeMailOptions, (error, info) => {
        if (error) {
            return console.log('Error sending welcome email:', error);
        }
        console.log('Welcome email sent:', info.response);
    });

    // Step 4: Send the notification email to the admin
    transporter.sendMail(adminMailOptions, (error, info) => {
        if (error) {
            return console.log('Error sending admin email:', error);
        }
        console.log('Admin notification email sent:', info.response);
    });
} 