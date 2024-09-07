import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: "all",
    priceRange: [0, 500],
    discount: 0,
    searchText: "",
  });

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const numberOfPages = Math.ceil(products.length / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  // Fetch products from API and extract unique categories
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://job-task-server-ruddy-tau.vercel.app/products");
        const data = await response.json();
        setProducts(data);

        // Extract unique categories from products
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle filter and sorting logic
  const filterProducts = () => {
    let filteredProducts = products;

    // Apply category filter
    if (selectedFilters.category !== "all") {
      filteredProducts = filteredProducts.filter(product => product.category === selectedFilters.category);
    }

    // Apply price range filter
    filteredProducts = filteredProducts.filter(
      product => product.price >= selectedFilters.priceRange[0] && product.price <= selectedFilters.priceRange[1]
    );

    // Apply search text filter
    if (selectedFilters.searchText.trim() !== "") {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(selectedFilters.searchText.toLowerCase())
      );
    }

    return filteredProducts;
  };

  const handleFilterChange = (type, value) => {
    setSelectedFilters(prevFilters => ({ ...prevFilters, [type]: value }));
    setCurrentPage(0); // Reset pagination on filter change
  };

  const paginatedProducts = filterProducts().slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="bg-slate-200">
      <div className="w-full lg:w-4/5 mx-auto py-20 px-3 lg:px-0">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold pl-2">All Products</h2>
          <div className="flex gap-5 items-center">
            <select
              value={selectedFilters.sortOption}
              onChange={(e) => handleFilterChange("sortOption", e.target.value)}
              className="block w-full px-4 py-2 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="none">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Layout with filters on the left */}
        <div className="flex">
          {/* Left Sidebar Filters */}
          <div className="w-1/4 bg-white p-5 rounded-lg shadow-md">
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Search</label>
              <input
                type="text"
                value={selectedFilters.searchText}
                onChange={(e) => handleFilterChange("searchText", e.target.value)}
                className="px-4 py-2 w-full border border-gray-300 rounded-md"
                placeholder="Search product..."
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">All Categories</label>
              <select
                value={selectedFilters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                className="block w-full px-4 py-2 border"
              >
                <option value="all">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Price Range</label>
              <input
                type="number"
                placeholder="Min Price"
                className="px-4 py-2 w-full mb-2 border border-gray-300 rounded-md"
                onChange={(e) => handleFilterChange("priceRange", [e.target.value, selectedFilters.priceRange[1]])}
              />
              <input
                type="number"
                placeholder="Max Price"
                className="px-4 py-2 w-full border border-gray-300 rounded-md"
                onChange={(e) => handleFilterChange("priceRange", [selectedFilters.priceRange[0], e.target.value])}
              />
            </div>
          </div>

          {/* Products Section */}
          <div className="w-3/4 ml-5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {paginatedProducts.map(product => (
                <ProductsCard key={product._id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
              {pages.map(page => (
                <button
                  key={page}
                  className={`px-4 py-2 mx-2 ${page === currentPage ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-700"}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
