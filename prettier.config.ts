import type { Config } from 'prettier'

const config: Config = {
	semi: false,
	singleQuote: true,
	trailingComma: 'none',
	useTabs: true,
	tabWidth: 4,
	endOfLine: 'lf',
	charset: 'utf-8',
	htmlWhitespaceSensitivity: 'ignore',
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindStylesheet: './app/assets/css/main.css'
}

export default config
