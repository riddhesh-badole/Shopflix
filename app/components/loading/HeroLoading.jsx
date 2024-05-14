export default function HeroLoading() {
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <h1 className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <div className="md:h-5 bg-gray-300 rounded-full dark:bg-gray-700 md:w-full mb-4"></div>
          <div className="md:h-5 bg-gray-300 rounded-full dark:bg-gray-700 md:w-48 mb-4"></div>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            <div className="md:h-2 bg-gray-300 rounded-full dark:bg-gray-700 md:w-48 mb-4"></div>
            <div className="md:h-2 bg-gray-300 rounded-full dark:bg-gray-700 md:w-40  mb-4"></div>
            <div className="md:h-2 bg-gray-300 rounded-full dark:bg-gray-700 md:w-40 mb-4"></div>
            <div className="md:h-2 bg-gray-300 rounded-full dark:bg-gray-700 md:w-48 mb-4"></div>
          </p>
        </h1>
      </div>
      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div className="relative left-12 top-12 z-10 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <div className="flex items-center justify-center md:h-96 md:w-60 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"></div>
        </div>
        <div className="overflow-hidden rounded-lg b ">
          <div className="flex items-center justify-center md:h-96 md:w-60 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"></div>
        </div>
      </div>

      <div classNameName="flex flex-col items-center justify-between gap-8 md:flex-row ">
        <div classNameName="flex h-12 w-64 divide-x overflow-hidden rounded-lg border mt-4">
          <div className="flex w-1/3 items-center justify-center bg-gray-300 "></div>
          <div className="flex w-1/3 items-center justify-center bg-gray-300 "></div>
          <div className="flex w-1/3 items-center justify-center bg-gray-300 "></div>
        </div>
      </div>
    </section>
  );
}
