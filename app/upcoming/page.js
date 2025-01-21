export default function Upcoming() {
  return (
    <div className='h-full w-full bg-black/40 flex justify-center items-center pt-10'>
      <div className='h-[75vh] w-[90vw] flex justify-center items-center gap-12'>
        <div className='upcoming h-full flex flex-col items-center justify-center gap-1 text-white text-4xl'>
          <div className='shows'>Show 1</div>
          <div className='shows'>Show 2</div>
          <div className='shows'>Show 3</div>
          <div className='shows'>Show 4</div>
          <div className='shows'>Show 5</div>
          <div className='shows'>Show 6</div>
          <div className='shows'>Show 6</div>
        </div>
        <div className='upcoming h-3/5'></div>
      </div>
    </div>
  );
}
