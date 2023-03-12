import { useQuery } from "@tanstack/react-query";

const AdviceGenerator = () => {
  const { data, isLoading, refetch } = useQuery(
    ["advice"],
    () =>
      fetch("https://api.adviceslip.com/advice", { method: "GET" }).then(
        (response) => response.json()
      ),
    { refetchOnWindowFocus: false }
  );

  const handleClick = () => {
    refetch();
  };

  return (
    <>
      <div className="bg-neutral-100 w-[21.5rem] sm:w-[30rem] text-center px-4 sm:px-10 py-[2.25rem] rounded-lg flex flex-col items-center gap-[25px]">
        {!isLoading ? (
          <>
            <h1 className="text-primary-100 text-[0.75rem] tracking-[3px] leading-none">
              ADVICE #{data.slip.id}
            </h1>
            <p className="text-primary-50 font-extrabold text-[1.6rem]">
              "{data.slip.advice}"
            </p>
          </>
        ) : (
          <h1 className="text-primary-50 text-xl">Loading...</h1>
        )}
        <img src="pattern-divider-mobile.svg" alt="" className="mb-5 w-full" />
      </div>
      <button
        className="bg-primary-100 rounded-full p-4 relative bottom-6 hover:shadow-3xl"
        onClick={handleClick}
        disabled={isLoading}
      >
        <img src="icon-dice.svg" alt="" className="w-[20px] h-[20px]" />
      </button>
    </>
  );
};

export default AdviceGenerator;
