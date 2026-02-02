# EmailJS Setup Guide

This guide will help you configure EmailJS to send contact form submissions to your Gmail account.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Select **Gmail** (or your preferred email provider)
4. Click **Connect Account** and authorize EmailJS to send emails from your Gmail
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template structure:

**Subject:**
```
New Contact Form Submission: {{subject}}
```

**Content:**
```
You have received a new message from your contact form.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)
3. Copy it

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_RECIPIENT_EMAIL=your-email@gmail.com
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Restart Your Development Server

After adding the environment variables, restart your development server:

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your Gmail inbox for the form submission

## Troubleshooting

- **"EmailJS configuration is missing"**: Make sure all environment variables are set in your `.env` file
- **Emails not received**: Check your EmailJS dashboard for error logs
- **CORS errors**: Make sure your domain is added to EmailJS allowed domains (Account > Security)
- **TypeScript errors**: Restart your IDE/TypeScript server after installing the package

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Your Public Key is safe to expose in frontend code (it's designed for client-side use)
- For production, make sure to set environment variables in your hosting platform

