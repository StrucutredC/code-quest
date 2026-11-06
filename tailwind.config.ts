import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink:'#101225', panel:'#191c35', violet:'#8b5cf6', cyan:'#22d3ee', lime:'#a3e635' }, boxShadow: { glow:'0 0 35px rgba(139,92,246,.18)' } } }, plugins: [] }; export default config;
