import Item from "./Item";
import { PRODUCT, RESOURCES, COMPANY } from "./Menus";
const ItemsContainer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:px-8 px-5 py-16">
        <Item Links={PRODUCT} title="Product" />
        <Item Links={RESOURCES} title="Resources" />
        <Item Links={COMPANY} title="Company" />
        <div className="flex flex-col space-y-4">
            <h1 className="mb-1 font-bold text-violet-500">Subscribe to our newsletter</h1>
            <p>For product announcements and exclusive insights</p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
            <input
                type="text"
                placeholder="Input your email"
                className="text-gray-800 sm:w-72 w-full sm:mr-1 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button
                className="bg-violet-500 hover:bg-violet-700 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full"
            >
                Subscribe
            </button>
            </div>
        </div>
    </div>

  );
};

export default ItemsContainer;