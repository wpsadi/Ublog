// eslint-disable-next-line react/prop-types
function Loader({ loaderMessage = "Loading Now ..." }) {
  return (
    <>
      {/* <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full mainBgC h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 mainBgC rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 mainBgC rounded col-span-2"></div>
                <div className="h-2 mainBgC rounded col-span-1"></div>
              </div>
              <div className="h-2 mainBgC rounded"></div>
            </div>
          </div>
        </div>
      </div> */}
      <div role="tablist" className="flex bg-white flex-col w-full items-center tabs-boxed cursor-default border-solid border-2  rounded-3xl">
  <a role="tab" className="tab bold text-lg italic text-gray-200 cursor-default underline-offset-2 underline text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text">Loading</a>
  <a role="tab" className="tab  cursor-default"><span className="loading loading-ring loading-lg  mainBgC "></span></a>
  <a role="tab" className="tab cursor-default mt-2  bold text-lg italic text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text">{loaderMessage}</a>
</div>


    </>
  );
}

export default Loader;
