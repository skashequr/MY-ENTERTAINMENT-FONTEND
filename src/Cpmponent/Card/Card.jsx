import { Link } from "react-router-dom";

export const Card = ({brand}) => {
    // console.log(brand);
    return (
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
        <div className="grid gap-8 sm:max-w-sm sm:mx-auto lg:max-w-full ">
          <div className=" overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={brand?.link}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                
                
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
               {brand?.brand}
              </a>
              <p className="mb-2 text-gray-700">
                {brand?.dis.slice(0,200)}.....
              </p>
              <Link to={brand?.brand}>
                <button className="btn btn-primary">Click Here</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };