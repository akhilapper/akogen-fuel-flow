
# Setting up EmailJS for Contact Form

To complete the setup of the email service for your contact form, follow these steps:

1. **Create an EmailJS account**:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Verify your account

2. **Create an email service**:
   - Add your email service provider (Gmail, Outlook, etc.)
   - Follow the EmailJS instructions to connect your email account

3. **Create an email template**:
   - Go to Email Templates and create a new template
   - Use the following variables in your template:
     - `{{to_email}}` - The recipient's email (akhil1999bhatt@gmail.com)
     - `{{from_name}}` - The sender's name
     - `{{from_email}}` - The sender's email
     - `{{phone}}` - The sender's phone number
     - `{{business_type}}` - The type of business
     - `{{message}}` - The message content

4. **Get your credentials**:
   - Find your Service ID in the "Email Services" section
   - Find your Template ID in the "Email Templates" section
   - Find your User ID in the "Integration" section under "API Keys"

5. **Update the code**:
   - Replace the placeholder values in the ContactSection.tsx file:
     ```javascript
     const serviceId = 'your_service_id';  // Replace with your actual service ID
     const templateId = 'your_template_id'; // Replace with your actual template ID
     const userId = 'your_user_id';         // Replace with your actual user ID
     ```

For security reasons, in a production environment, these values should be stored as environment variables rather than hard-coded in the source.
