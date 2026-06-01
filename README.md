🌐 Currency Converter App

A modern, responsive Currency Converter built using React, Vite, Tailwind CSS, and a custom currency-rate hook.
The app fetches real-time exchange rates and converts amounts with precision (up to 2 decimal places).

🚀 Features

-> 🔄 Real-time currency conversion

-> 🔁 Swap From ↔ To currencies

-> 🎯 Accurate results up to 2 decimal places

-> 🧩 Reusable Input component

-> ⚙️ Custom hook for exchange rates (useCurrencyInfo)

-> 🛡️ Loading + error handling in custom hook

-> 🌈 Beautiful UI with blur glass effect

-> 📱 Fully responsive design using Tailwind

📂 Project Structure

 src/

  ├── Components/
 
  │    └── Input.jsx
 
  ├── hooks/
 
  │    └── useCurrencyInfo.js
 
  ├── App.jsx
 
  ├── index.css
 
  └── main.jsx
 

🧠 Custom Hook: useCurrencyInfo

This hook fetches updated currency conversion rates for the selected base currency.

✔️ Features of the Hook

-> Fetches data from a fast CDN API

-> Handles loading state

-> Handles API errors

-> Aborts old requests when currency changes

-> Returns clean, predictable data

Example Usage
const currencyInfo= useCurrencyInfo(fromCurrency);

🔧 Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/your-username/currency-converter.git

  cd currency-converter

2️⃣ Install dependencies

  npm install

3️⃣ Start development server

  npm run dev

⚙️ Build for Production

  npm run build

🖼️ UI Preview

Simple two-input layout

Swap button in the center

Soft glass effect over a background image

Tailwind components

📊 How Conversion Works:-
Conversion Function
const convert = () => {
  const result = amount * currencyInfo[toCurrency];
  setConvertedAmount(Number(result.toFixed(2)));
};

Swap Values

Swaps both the selected currencies and their corresponding values.

-> 💡 Future Enhancements

-> 🌍 Display currency flags

-> 📈 Add conversion charts

-> 💾 Save last selected currencies

-> 🔔 Add rate change alerts

-> 💹 Add crypto currency support

👨‍💻 Author

Priyanshu kumar
B.Tech CSE | Final year

⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
