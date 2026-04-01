// This forces the Next.js worker to resolve the absolute path 
// to the virtual environment where your modules live.
module.exports = {
    plugins: {
        [require.resolve('tailwindcss')]: {},
        [require.resolve('autoprefixer')]: {},
    },
};