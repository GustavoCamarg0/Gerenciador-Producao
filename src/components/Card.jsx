export function Card({ icon, bg, text, value }) {
  return (
    <div
      className={`w-52 h-16 flex p-2 text-white rounded-md gap-2 items-center ${bg}`}
    >
      <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="h-full flex flex-col align-top">
        <span className="text-xs text-gray-200 ">{text}</span>
        <p className="text-base">{value}</p>
      </div>
    </div>
  );
}
