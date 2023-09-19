import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          hero: "url('/assets/backgrounds/hero.png')",
          hero_mobile: "url('/assets/backgrounds/hero_mobile.png')",
          offer: "url('/assets/backgrounds/offer_bg.jpg')",
          offer_mobile: "url('/assets/backgrounds/offer_bg_mobile.jpg')",
          signature: "url('/assets/backgrounds/signature.png')",
          contact: "url('/assets/backgrounds/contact.jpg')",
          contact_mobile: "url('/assets/backgrounds/contact_mobile.jpg')"

      },
      
    },
  },
  plugins: [],
}
export default config
