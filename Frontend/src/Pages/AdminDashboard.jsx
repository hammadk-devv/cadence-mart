import { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  LayoutDashboard,
  PlusCircle,
  LogOut,
  Trash2,
  Upload,
  ShieldCheck,
  Package,
} from "lucide-react";
import AuthContext from "../context/Auth/AuthContext.jsx";
import ThemeContext from "../context/Theme/ThemeContext.jsx";
import apiClient from "../services/apiClient.js";
import Button from "../components/ui/Button.jsx";
import Spinner from "../components/ui/Spinner.jsx";

export default function AdminDashboard() {
  const { userDetail, setToken, setUserDetail } = useContext(AuthContext);
  const { dark } = useContext(ThemeContext);

  const [activeTab, setActiveTab] = useState("overview");
  const [products, setProducts] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(false);

  // Add Product Form State
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [subcategory, setSubcategory] = useState("Smartphones");
  const [brand, setBrand] = useState("Apple");
  const [gender, setGender] = useState("unisex");
  const [stock, setStock] = useState("10");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [images, setImages] = useState([null, null, null, null]);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  // Fetch all products
  const fetchProducts = async () => {
    setIsProductsLoading(true);
    try {
      const res = await apiClient.get("/api/product/addlist");
      if (res.data && res.data.success) {
        setProducts(res.data.products || []);
      } else {
        toast.error(res.data?.message || "Failed to load products");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to load products");
    } finally {
      setIsProductsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cadence_favorites");
    sessionStorage.clear();
    setToken("");
    setUserDetail({});
    toast.success("Successfully logged out from Administrator panel");
    window.location.href = "/";
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to permanently delete this product?")) return;
    try {
      const res = await apiClient.post("/api/product/remove", { id });
      if (res.data && res.data.success) {
        toast.success("Product deleted successfully");
        fetchProducts();
      } else {
        toast.error(res.data?.message || "Failed to delete product");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to delete product");
    }
  };

  // Add Product Submit
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsSubmitLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("discription", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subcategory", subcategory);
      formData.append("brand", brand);
      formData.append("gender", gender);
      formData.append("stock", stock);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes.length > 0 ? sizes : ["M"]));

      images.forEach((img, idx) => {
        if (img) {
          formData.append(`image${idx + 1}`, img);
        }
      });

      const res = await apiClient.post("/api/product/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data && res.data.success) {
        toast.success("Product created successfully!");
        setName("");
        setDescription("");
        setPrice("");
        setBestseller(false);
        setSizes([]);
        setImages([null, null, null, null]);
        fetchProducts();
      } else {
        toast.error(res.data?.message || "Failed to create product");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to create product");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const handleImageChange = (idx, file) => {
    const copy = [...images];
    copy[idx] = file;
    setImages(copy);
  };

  const toggleSize = (size) => {
    setSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  };

  return (
    <div
      className={`flex min-h-screen ${dark ? "bg-zinc-950 text-white" : "bg-gray-50 text-zinc-900"}`}
    >
      {/* Sidebar Navigation */}
      <aside
        className={`w-64 flex-shrink-0 border-r ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"} flex flex-col justify-between`}
      >
        <div>
          {/* Logo Brand Header */}
          <div className="h-16 flex items-center gap-3 px-6 border-b border-inherit">
            <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            <span className="font-extrabold text-lg tracking-wider">CADENCE ADMIN</span>
          </div>

          {/* Nav Items */}
          <nav className="p-4 flex flex-col gap-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-semibold transition-all ${
                activeTab === "overview"
                  ? "bg-[var(--color-primary)] text-white"
                  : dark
                    ? "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-zinc-900"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview / Stats</span>
            </button>
            <button
              onClick={() => setActiveTab("list")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-semibold transition-all ${
                activeTab === "list"
                  ? "bg-[var(--color-primary)] text-white"
                  : dark
                    ? "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-zinc-900"
              }`}
            >
              <Package className="w-4 h-4" />
              <span>All Products</span>
            </button>
            <button
              onClick={() => setActiveTab("add")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-semibold transition-all ${
                activeTab === "add"
                  ? "bg-[var(--color-primary)] text-white"
                  : dark
                    ? "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-zinc-900"
              }`}
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
          </nav>
        </div>

        {/* Footer Area */}
        <div className="p-4 border-t border-inherit">
          <div className="flex items-center gap-3 px-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs uppercase">
              {userDetail?.name?.[0] || "A"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold truncate">{userDetail?.name || "Admin Manager"}</p>
              <p className="text-[10px] text-gray-500 truncate">{userDetail?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-red-500/20 text-red-500 hover:bg-red-500/10 rounded-md text-xs font-semibold transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <header
          className={`h-16 flex items-center justify-between px-8 border-b ${dark ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-gray-200"}`}
        >
          <h1 className="text-lg font-bold">Admin Console</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs px-2.5 py-1 bg-green-500/10 text-green-500 font-bold rounded-full">
              Live Environment Connected
            </span>
          </div>
        </header>

        <div className="flex-grow p-8 overflow-y-auto">
          {activeTab === "overview" && (
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold">Overview Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div
                  className={`p-6 rounded-lg border ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"}`}
                >
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Total Seeded Products
                  </p>
                  <p className="text-3xl font-extrabold">{products.length}</p>
                </div>
                <div
                  className={`p-6 rounded-lg border ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"}`}
                >
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Bestsellers Count
                  </p>
                  <p className="text-3xl font-extrabold">
                    {products.filter((p) => p.bestSeller || p.bestseller).length}
                  </p>
                </div>
                <div
                  className={`p-6 rounded-lg border ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"}`}
                >
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Store Departments
                  </p>
                  <p className="text-3xl font-extrabold">5</p>
                </div>
                <div
                  className={`p-6 rounded-lg border ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"}`}
                >
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                    Stock Status
                  </p>
                  <p className="text-3xl font-extrabold text-green-500">Optimal</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "list" && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Store Inventory</h2>
                <Button variant="outline" size="sm" onClick={fetchProducts}>
                  Refresh Data
                </Button>
              </div>

              {isProductsLoading ? (
                <div className="flex items-center justify-center py-20">
                  <Spinner size="md" />
                </div>
              ) : (
                <div
                  className={`border rounded-lg overflow-hidden ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"}`}
                >
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr
                          className={`border-b text-xs font-bold uppercase ${dark ? "bg-zinc-800/50 border-zinc-800 text-zinc-400" : "bg-gray-100 border-gray-200 text-gray-500"}`}
                        >
                          <th className="px-6 py-4">Image</th>
                          <th className="px-6 py-4">Product Details</th>
                          <th className="px-6 py-4">Category</th>
                          <th className="px-6 py-4">Brand</th>
                          <th className="px-6 py-4">Price</th>
                          <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-inherit">
                        {products.map((item) => (
                          <tr
                            key={item.id || item._id}
                            className={dark ? "hover:bg-zinc-800/30" : "hover:bg-gray-50"}
                          >
                            <td className="px-6 py-4">
                              <img
                                className="w-12 h-12 object-cover rounded-md bg-gray-100"
                                src={
                                  item.image?.[0] ||
                                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200"
                                }
                                alt={item.name}
                              />
                            </td>
                            <td className="px-6 py-4 min-w-[200px]">
                              <p className="font-bold text-sm truncate max-w-xs">{item.name}</p>
                              <p className="text-[10px] text-gray-500 truncate max-w-xs">
                                {item.description}
                              </p>
                            </td>
                            <td className="px-6 py-4 text-sm">{item.category}</td>
                            <td className="px-6 py-4 text-sm">{item.brand || "Cadence"}</td>
                            <td className="px-6 py-4 text-sm font-bold">${item.price}</td>
                            <td className="px-6 py-4 text-center">
                              <button
                                onClick={() => handleDeleteProduct(item._id || item.id)}
                                className="p-2 text-red-500 hover:bg-red-500/10 rounded-md transition-all"
                                aria-label="Delete product"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "add" && (
            <div className="flex flex-col gap-6 max-w-3xl">
              <h2 className="text-xl font-bold">Add New Catalog Item</h2>
              <form onSubmit={handleAddProduct} className="flex flex-col gap-6">
                {/* Images Upload */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                    Image Files (Max 4)
                  </label>
                  <div className="flex gap-4">
                    {images.map((img, idx) => (
                      <label
                        key={idx}
                        className={`w-24 h-24 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all hover:border-[var(--color-primary)] ${dark ? "border-zinc-800 bg-zinc-900" : "border-gray-300 bg-white"}`}
                      >
                        {img ? (
                          <img
                            className="w-full h-full object-cover rounded-lg"
                            src={URL.createObjectURL(img)}
                            alt=""
                          />
                        ) : (
                          <Upload className="w-5 h-5 text-gray-400" />
                        )}
                        <input
                          onChange={(e) => handleImageChange(idx, e.target.files[0])}
                          type="file"
                          accept="image/*"
                          hidden
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                    Product Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={`w-full px-4 py-2 border rounded-md text-sm outline-none focus:border-[var(--color-primary)] ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-300"}`}
                    type="text"
                    placeholder="Enter product title"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                    Product Description
                  </label>
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md text-sm outline-none focus:border-[var(--color-primary)] ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-300"}`}
                    placeholder="Enter detailed description"
                    required
                  />
                </div>

                {/* Category & Subcategory */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                      Category
                    </label>
                    <select
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                      className={`w-full px-4 py-2 border rounded-md text-sm outline-none ${dark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-gray-300"}`}
                    >
                      <option value="Electronics">Electronics</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Home & Living">Home & Living</option>
                      <option value="Sports & Fitness">Sports & Fitness</option>
                      <option value="Beauty">Beauty</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                      Subcategory
                    </label>
                    <select
                      onChange={(e) => setSubcategory(e.target.value)}
                      value={subcategory}
                      className={`w-full px-4 py-2 border rounded-md text-sm outline-none ${dark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-gray-300"}`}
                    >
                      {category === "Electronics" && (
                        <>
                          <option value="Smartphones">Smartphones</option>
                          <option value="Smart Watches">Smart Watches</option>
                          <option value="Headphones">Headphones</option>
                          <option value="Earbuds">Earbuds</option>
                          <option value="Laptops">Laptops</option>
                          <option value="Cameras">Cameras</option>
                        </>
                      )}
                      {category === "Fashion" && (
                        <>
                          <option value="Winterwear">Winterwear</option>
                          <option value="Topwear">Topwear</option>
                          <option value="Bottomwear">Bottomwear</option>
                        </>
                      )}
                      {category === "Home & Living" && (
                        <>
                          <option value="Furniture">Furniture</option>
                          <option value="Lighting">Lighting</option>
                          <option value="Decor">Decor</option>
                          <option value="Kitchen">Kitchen</option>
                        </>
                      )}
                      {category === "Sports & Fitness" && (
                        <>
                          <option value="Running">Running</option>
                          <option value="Cycling">Cycling</option>
                          <option value="Gym Equipment">Gym Equipment</option>
                          <option value="Outdoor">Outdoor</option>
                        </>
                      )}
                      {category === "Beauty" && (
                        <>
                          <option value="Skincare">Skincare</option>
                          <option value="Makeup">Makeup</option>
                          <option value="Hair Care">Hair Care</option>
                          <option value="Perfumes">Perfumes</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                      Brand
                    </label>
                    <input
                      onChange={(e) => setBrand(e.target.value)}
                      value={brand}
                      className={`w-full px-4 py-2 border rounded-md text-sm outline-none focus:border-[var(--color-primary)] ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-300"}`}
                      type="text"
                      placeholder="e.g. Apple"
                      required
                    />
                  </div>
                </div>

                {/* Price, Gender, Stock */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                      Price ($)
                    </label>
                    <input
                      className={`w-full px-4 py-2 border rounded-md text-sm outline-none focus:border-[var(--color-primary)] ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-300"}`}
                      type="number"
                      placeholder="299"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                      Gender Target
                    </label>
                    <select
                      onChange={(e) => setGender(e.target.value)}
                      value={gender}
                      className={`w-full px-4 py-2 border rounded-md text-sm outline-none ${dark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-gray-300"}`}
                    >
                      <option value="unisex">Unisex</option>
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                      <option value="kids">Kids</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                      Stock Units
                    </label>
                    <input
                      className={`w-full px-4 py-2 border rounded-md text-sm outline-none focus:border-[var(--color-primary)] ${dark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-300"}`}
                      type="number"
                      placeholder="50"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Product Sizes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                    Available Sizes
                  </label>
                  <div className="flex gap-2.5">
                    {["XS", "S", "M", "L", "XL", "XXL", "Standard"].map((size) => {
                      const active = sizes.includes(size);
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() => toggleSize(size)}
                          className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all border ${
                            active
                              ? "bg-[var(--color-primary)] border-transparent text-white"
                              : dark
                                ? "bg-zinc-900 border-zinc-800 hover:bg-zinc-800 text-zinc-400"
                                : "bg-gray-100 border-gray-300 hover:bg-gray-200 text-zinc-600"
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bestseller */}
                <div className="flex items-center gap-2.5">
                  <input
                    onChange={() => setBestseller((prev) => !prev)}
                    checked={bestseller}
                    type="checkbox"
                    id="bestseller"
                    className="w-4 h-4 accent-[var(--color-primary)] cursor-pointer"
                  />
                  <label className="text-sm font-semibold cursor-pointer" htmlFor="bestseller">
                    Tag as Store Bestseller
                  </label>
                </div>

                {/* Submit Action */}
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isSubmitLoading}
                  className="w-40 py-2.5 mt-2"
                >
                  Add to Catalog
                </Button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
