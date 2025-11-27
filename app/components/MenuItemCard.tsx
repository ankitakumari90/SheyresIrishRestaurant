export default function PromoCard() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-[#2c2112]">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-auto w-[350px] sm:w-[440px] flex flex-col items-center">
        {/* Put your holiday SVGs/pumpkin/leaves icons as <img />, ya emoji use kar sakte ho */}
        <div className="flex flex-wrap justify-center gap-2 mb-1">
          <span role="img" aria-label="pumpkin" className="text-3xl">🎃</span>
          <span role="img" aria-label="leaf" className="text-2xl">🍁</span>
          <span role="img" aria-label="acorn" className="text-2xl">🌰</span>
          <span role="img" aria-label="pie" className="text-2xl">🥧</span>
        </div>
        <div className="text-center font-mono text-2xl mt-2 mb-3 font-bold tracking-wide">
          HAPPY<br/>THANKSGIVING<br/>
          <span className="text-xl font-normal tracking-normal">PICK UP DINNER AT PADDY MACS</span>
        </div>
        <div className="my-2 font-semibold text-lg">FEAST SERVES 4–6 PEOPLE $195</div>
        <div className="text-sm font-semibold mb-1">Feast Includes:</div>
        <ul className="text-center text-base">
          <li>Roasted Turkey</li>
          <li>Honey Glazed Ham</li>
          <li>Whipped Potatoes, etc.</li>
        </ul>
      </div>
    </div>
  );
}
