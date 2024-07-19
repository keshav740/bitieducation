/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            height: {
                '128': '20rem', // Custom value
                '144': '36rem', // Custom value
                '160': '40rem', // Custom value
            },
        },
    },
    plugins: [],
};