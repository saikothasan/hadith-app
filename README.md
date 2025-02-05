# Random Hadith Generator

A modern, responsive web application built with Next.js 13 that allows users to discover authentic hadiths from various collections. The application provides both random and specific hadith generation capabilities.

![Random Hadith Generator](https://your-domain.com/screenshot.png)

## Features

- 🎲 Random hadith generation
- 🔍 Specific hadith lookup by number
- 📚 Multiple hadith collections support:
  - Sahih al-Bukhari
  - Sahih Muslim
  - Sunan Abu Dawud
  - Jami' at-Tirmidhi
  - Sunan Ibn Majah
  - Sunan an-Nasa'i
- 💫 Beautiful UI with animations
- 📱 Fully responsive design
- ⚡ Server-side rendering for optimal performance
- 🌙 Modern glass-morphism design

## Tech Stack

- [Next.js 13](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Beautiful icons

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/saikothasan/hadith-app.git
cd hadith-app
```

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
hadith-app/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── HadithGenerator.tsx
│   ├── HadithDisplay.tsx
│   └── ui/
├── lib/
│   └── api.ts
├── types/
│   └── hadith.ts
└── public/
```

## API Reference

The application uses the Random Hadith Generator API:

Base URL: `https://random-hadith-generator.vercel.app`

### Endpoints

- GET `/{collection}` - Get a random hadith from the specified collection
- GET `/{collection}/{number}` - Get a specific hadith by number from the specified collection

Available collections:
- bukhari
- muslim
- abudawud
- tirmidhi
- ibnmajah
- nasai

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- API provided by [Random Hadith Generator](https://random-hadith-generator.vercel.app/)
- Created by [@Drkingbd](https://t.me/drkingbd)

## Deploy

You can deploy this app to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsaikothasan%2Fhadith-app)

---

Made with ❤️ by [@Drkingbd](https://t.me/drkingbd)
```
