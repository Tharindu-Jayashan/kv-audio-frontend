import { useState } from "react";

export default function AddItemsPage() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDimensions, setProductDimensions] = useState("");
  const [productDescription, setProductDescription] = useState("");

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Add Items</h1>

      <div className="w-[400px] flex flex-col border p-4 bg-white shadow-md rounded-md">
        <input
          onChange={(e) => setProductKey(e.target.value)}
          value={productKey}
          type="text"
          placeholder="Key"
          className="mb-2 p-2 border rounded"
        />

        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          type="text"
          placeholder="Name"
          className="mb-2 p-2 border rounded"
        />

        <input
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          type="text"
          placeholder="Price"
          className="mb-2 p-2 border rounded"
        />

        <select
          onChange={(e) => setProductCategory(e.target.value)}
          value={productCategory}
          className="mb-2 p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>

        <input
          onChange={(e) => setProductDimensions(e.target.value)}
          value={productDimensions}
          type="text"
          placeholder="Product Dimensions"
          className="mb-2 p-2 border rounded"
        />

        <input
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          type="text"
          placeholder="Product Description"
          className="mb-2 p-2 border rounded"
        />

        <button className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600">
          Add
        </button>
      </div>
    </div>
  );
}
