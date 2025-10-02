
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk color palette
				neon: {
					DEFAULT: '#00f0e6',
					cyan: 'hsl(var(--neon-cyan))',
					blue: 'hsl(var(--neon-blue))',
					electric: 'hsl(var(--neon-electric))',
					purple: 'hsl(var(--neon-purple))',
					pink: 'hsl(var(--neon-pink))'
				},
				cyber: {
					black: 'hsl(var(--cyber-black))',
					dark: 'hsl(var(--cyber-dark))',
					'dark-blue': 'hsl(var(--cyber-dark-blue))',
					gray: 'hsl(var(--cyber-gray))',
					'light-gray': 'hsl(var(--cyber-light-gray))'
				},
				navAccent: '#ffd34d',
				mutedTeal: '#66c2d9',
				bgDeep: '#050506',
				portfolio: {
					dark: '#2D2E32',
					blue: '#147EFB',
					gray: '#767676',
					light: '#F9F9F9'
				}
			},
			screens: {
				'xs': '480px',
				'galaxy-s8': '360px',
				'iphone-14-pro-max': '430px',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				mulish: ['Mulish', 'sans-serif'],
				orbitron: ['Orbitron', 'monospace'],
				exo: ['Exo 2', 'sans-serif'],
				'space-mono': ['Space Mono', 'monospace']
			},
			gridTemplateColumns: {
				'16': 'repeat(16, minmax(0, 1fr))',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }: any) {
			addUtilities({
				'.frost-glass': {
					'background-color': 'rgba(5,10,12,0.45)',
					'backdrop-filter': 'blur(8px) saturate(120%)',
					'-webkit-backdrop-filter': 'blur(8px) saturate(120%)',
					'border': '1px solid rgba(0,240,230,0.06)'
				},
				'.magnify-on-hover': {
					'transition': 'transform 220ms cubic-bezier(.2,.9,.2,1), filter 220ms',
					'will-change': 'transform, filter'
				},
				'.magnify-on-hover:hover': {
					'transform': 'translateZ(0) scale(1.08)',
					'filter': 'brightness(1.06) saturate(1.04)'
				},
				'.magnify-on-hover:focus': {
					'transform': 'translateZ(0) scale(1.08)',
					'filter': 'brightness(1.06) saturate(1.04)',
					'outline': '2px solid #00f0e6',
					'outline-offset': '2px'
				}
			});
		}
	],
} satisfies Config;
