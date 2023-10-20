import { Link, useParams } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
const Cards = ({ products , param }) => {
  console.log(products);
  const {params } = useParams()
  console.log(products);

  const handleUpdate = ()=>{

  }
  return (
    <div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center"></div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={products?.image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center justify-between text-xs">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-green-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
              <div>
                  <button onClick={handleUpdate}><Link to={`/${products.brandName}/${products.name}/${products._id}`}><AiOutlineEdit className="w-6 h-6"></AiOutlineEdit></Link></button>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {products?.name}
              </h3>
            </a>
            <p className="leadi dark:text-gray-400">
              {products?.shortDescription.slice(0,80)} .....
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <Link to={`${products.name}`}>
            <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
          <div className="text-4xl font-bold">{products?.price} $</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
