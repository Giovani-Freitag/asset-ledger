import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
    plugins: [react()],
    base: isProd ? '/asset-ledger/' : '/',
    test: {
        include: ['tests/**/*.test.{ts,tsx}'],
        environment: 'jsdom',
        globals: true,
    },
});
