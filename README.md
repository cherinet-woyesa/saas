# AI Content Generator

A powerful AI-powered content generation tool built with Next.js and OpenAI's GPT-3.5 API. Generate engaging social media posts based on different goals and topics.

## Features

- AI-powered content generation
- Multiple content generation goals (engagement, product promotion, traffic, etc.)
- User authentication system
- Clean and modern UI
- Real-time content generation
- Error handling and loading states

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `/app` - Main application pages and routes
  - `/signup` - User registration page
  - `/login` - User login page
  - `/ai-generator` - AI content generation interface
  - `/dashboard` - User dashboard
- `/components` - Reusable React components
- `/context` - React context providers (Authentication)
- `/lib` - Utility functions and configurations

## Technologies Used

- Next.js 15.3.1
- React 19
- TypeScript
- OpenAI API
- Tailwind CSS
- Turbopack (development)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
OPENAI_API_KEY=your_api_key_here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
