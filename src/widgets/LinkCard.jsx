
export default function LinkCard({ alt, src }) {
  return (
    <button className="bg-[#F4F4F4] 
    w-1/3 
    h-[42px] 
    rounded-[5px] 
    flex items-center justify-center 
    hover:scale-110 hover:cursor-pointer
    active:scale-90 duration-200">
      <img className="w-[27px]" src={src} alt={alt} />
    </button>
  );
}
