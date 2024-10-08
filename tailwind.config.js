/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            height: {
                '128': '20rem', // Custom value
                '130': '25.4rem', // Custom value
                '135': '30rem', // Custom value
                '140': '32rem', // Custom value
                '144': '36rem', // Custom value
                '160': '40rem', // Custom value
                '1000': '100vh'
            },
            width: {
                '5': '4rem',
                '40': '16rem',
                '128': '20rem', // Custom value
                '144': '36rem', // Custom value
                '160': '40rem', // Custom value
                '170': '45rem', // Custom value
                '180': '60rem', // Custom value
            },
        },
    },
    plugins: [],
};