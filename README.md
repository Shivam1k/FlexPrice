# FlexPrice - Interactive Pricing Component

A modern, interactive pricing component built with Next.js, TypeScript, and Tailwind CSS. This application demonstrates a subscription-based pricing model with dynamic pricing tiers and billing options.

## 🌟 Features

- **Dynamic Pricing Calculator**
  - Adjustable pageview tiers (10K to 1M)
  - Monthly and yearly billing options
  - 25% discount for yearly subscriptions
  - Real-time price updates

- **Modern UI/UX**
  - Dark/Light theme support
  - Responsive design
  - Smooth animations and transitions
  - Loading states
  - Accessible components

- **Pricing Tiers**
  - 10K pageviews: $8/month
  - 50K pageviews: $12/month
  - 100K pageviews: $16/month
  - 500K pageviews: $24/month
  - 1M pageviews: $36/month

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shivam1k/FlexPrice.git
   cd flexprice
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
project/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components
│   └── theme-provider.tsx # Theme context provider
├── lib/                   # Utility functions and configurations
└── public/               # Static assets
```

## 🎨 Features in Detail

### Pricing Component
- Interactive slider to select pageview tiers
- Real-time price updates
- Monthly/Yearly billing toggle with discount
- Clear pricing display

### UI Components
- Responsive card layout
- Animated theme toggle
- Loading states
- Feature list with checkmarks
- Call-to-action button

### Theme Support
- Dark/Light mode toggle
- Persistent theme preference
- Smooth theme transitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/) 