/** @type {import('tailwindcss').Config} */
// Get theme defaults.
const defaultTheme = require('tailwindcss/defaultTheme');
// Build the config.
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
	screens: {
		sm: '480px',
		md: '768px',
		lg: '1440px',
	  },
    extend: {
		fontFamily: {
			primary: ['Nunito', ...defaultTheme.fontFamily.serif],
		},
		colors: {
			'transparent': 'transparent',
			'current': 'currentColor',
			'white': '#ffffff',
			'black': '#000000',
			'dark': '#545454',
			'light': '#B6B6B6',
			'accent': {
				'light': '#CCC1E6',
				DEFAULT: '#372865',
				'dark': '#353252',
			},
			'ocean': '#F6F9FE',
			'twitter': '#00acee',
			'twitch': '#6441a5',
			'dropbox': '#3d9ae8',
			'bitbucket': '#2684ff',
			'bing': '#008373',
			'behance': '#053eff',
			'atlassian': '#003366',
		},
		borderWidth: {
			'20': '20px',
		},
		backgroundImage: {
			'main-decoration': "url('./main-decoration.png')",
		},
		lineHeight: {
			'11': '4.375rem',
		}
	},
  },
  plugins: [],
}
