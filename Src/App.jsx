import { useState,useEffect } from "react";
import Input from "./Component/Input.jsx";
import useCurrencyInfo from './Hooks/useCurrencyInfo.js'
function App() {

  const [amount, setAmount] = useState("0");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currenyInfo = useCurrencyInfo(from);
  const options = Object.keys(currenyInfo);
  
  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount((amount * currenyInfo[to]).toFixed(2));
  }


  useEffect(() => {
  if (currenyInfo[to]) {
    setConvertedAmount((amount * currenyInfo[to]).toFixed(2));
  }
  }, [amount, from, to, currenyInfo]);

  
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage: `url('https://images.pexels.com/photos/6801641/pexels-photo-6801641.jpeg')`}}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault();
          }}>
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button onClick={swap} type="button" className="hover:bg-blue-700 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" >
                Swap
              </button>
            </div>
            <div className="w-full mb-4 mt-1 ">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                onAmountChange={(amount)=>setAmount(amount)}
                amountDisable
              />
            </div>
            <button onClick={convert} type="submit" className="hover:bg-blue-700 w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert { from.toUpperCase()} To {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}
export default App