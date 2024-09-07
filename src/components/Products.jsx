import { useEffect, useState, useMemo } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: "all",
    priceRange: [0, 500],
    discount: 0,
    searchText: "",
    sortOption: "none"
  });

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://server2-tau-ashen.vercel.app/products");
        const data = await response.json();
        setProducts(data);

        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = () => {
    let filteredProducts = products;

    if (selectedFilters.category !== "all") {
      filteredProducts = filteredProducts.filter(product => product.category === selectedFilters.category);
    }

    filteredProducts = filteredProducts.filter(
      product => product.price >= selectedFilters.priceRange[0] && product.price <= selectedFilters.priceRange[1]
    );

    if (selectedFilters.searchText.trim() !== "") {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(selectedFilters.searchText.toLowerCase())
      );
    }

    if (selectedFilters.sortOption === "low-to-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (selectedFilters.sortOption === "high-to-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  const filteredProducts = useMemo(() => filterProducts(), [products, selectedFilters]);

  const numberOfPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const paginatedProducts = useMemo(() => 
    filteredProducts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage),
    [filteredProducts, currentPage, itemsPerPage]
  );

  const handleFilterChange = (type, value) => {
    setSelectedFilters(prevFilters => ({ ...prevFilters, [type]: value }));
    setCurrentPage(0);
  };

  return (
    <div className="bg-slate-200">
      <div className="w-full lg:w-4/5 mx-auto py-20 px-3 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold pl-2">All Products</h2>
          <div className="flex gap-5 items-center mt-5 lg:mt-0">
            <select
              value={selectedFilters.sortOption}
              onChange={(e) => handleFilterChange("sortOption", e.target.value)}
              className="block w-full lg:w-auto px-4 py-2 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="none">Sort By</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4 bg-white p-5 rounded-lg shadow-md mb-6 lg:mb-0">
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2 text-blue-600">Search</label>
              <input
                type="text"
                value={selectedFilters.searchText}
                onChange={(e) => handleFilterChange("searchText", e.target.value)}
                className="px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Search product..."
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2 text-green-600">All Categories</label>
              <select
                value={selectedFilters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
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
              <label className="block text-lg font-semibold mb-2 text-red-600">Price Range</label>
              <input
                type="number"
                placeholder="Min Price"
                value={selectedFilters.priceRange[0]}
                onChange={(e) => handleFilterChange("priceRange", [Number(e.target.value), selectedFilters.priceRange[1]])}
                className="px-4 py-2 w-full mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={selectedFilters.priceRange[1]}
                onChange={(e) => handleFilterChange("priceRange", [selectedFilters.priceRange[0], Number(e.target.value)])}
                className="px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/4 lg:ml-5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {paginatedProducts.map(product => (
                <ProductsCard key={product._id} product={product} />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              {pages.map(page => (
                <button
                  key={page}
                  className={`px-4 py-2 mx-2 ${page === currentPage ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-700"} rounded-md hover:bg-gray-400`}
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
