export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <h1
        className="title font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
            px-4 py-2 rounded"
      >
        Page NotFound
      </h1>
      <div
        className="container  mx-auto px-4
                           sm:px-6
                           md:px-8
                           lg:px-12
                           xl:px-16
                           2xl:px-20
                           py-8"
      >
        <div
          className="grid grid-cols-1 gap-5 justify-items-center bg-yellow-50 p-5 rounded-lg 
                             sm:grid-cols-1
                             md:grid-cols-2
                             lg:grid-cols-3
                             xl:grid-cols-4
                             2xl:grid-cols-6"
        >
          <h4 className="col-span-full text-red-400 text-center text-lg py-10">
            Sorry, the page you are looking for does not exist.
          </h4>
        </div>
      </div>
    </div>
  );
}
