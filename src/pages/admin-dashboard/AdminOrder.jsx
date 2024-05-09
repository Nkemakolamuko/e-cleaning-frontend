import React from "react";
import Title from "../../components/Title";

const AdminOrder = () => {
  return (
    <div>
      <Title title={"Orders"} />

      <div className="border rounded py-4 text-slate-700">
        <h3 className="px-4">Filter:</h3>
        <div className="flex items-center w-full gap-4 px-4 border-b pb-4">
          <select
            name="status"
            id="status"
            className="w-full border rounded px-2 py-2 text-sm"
          >
            <option value="Delivered">---Select---</option>
            <option value="Delivered">All</option>
            <option value="Delivered">Paid</option>
            <option value="Delivered">Not Paid</option>
          </select>

          <select
            name="show"
            id="show"
            className="w-full border rounded px-2 py-2 text-sm"
          >
            <option value="Show 0-10">---Select---</option>
            <option value="Show 0-10">Show 0-10</option>
            <option value="Show 0-10">Show 0-20</option>
            <option value="Show 0-10">Show 0-30</option>
            <option value="Show 0-10">Show 0-40</option>
            <option value="Show 0-10">Show 0-50</option>
            <option value="Show 0-10">Show 0-60</option>
          </select>
        </div>

        <div className="p-4 overflow-auto scroll">
          <table className="table-auto w-full border-collapse text-nowrap">
            <thead className="border-b-2">
              <tr className="text-left bg-gray-200">
                <th className="px-4 py-2">Items</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Payment Status</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="bg-white border-b">
                <td className="px-4 py-4">
                  <ul className="font-medium text-base">
                    <li>Black Clarks Shoe - 1</li>
                    <li>Tie - 2</li>
                    <li>Red Heels - 1</li>
                  </ul>
                </td>
                <td className="px-4 py-4">user1email@gmail.com</td>
                <td className="px-4 py-4">₦ 125, 850</td>
                <td className="px-4 py-4">
                  <span className="text-xs text-green-700 bg-green-100 py-1 px-2 rounded-full">
                    Paid at 12/05/2024 by 07:54
                  </span>
                </td>
                <td className="px-4 py-4">{new Date().toDateString()}</td>
                <td className="px-4 py-2 text-green-500 font-semibold">
                  Delivered
                </td>
                <td className="px-4 py-4">
                  <span className="bg-green-400 text-white rounded px-2 py-2">
                    view details
                  </span>
                </td>
              </tr>
              {/* 2 */}
              <tr className="bg-white border-b">
                <td className="px-4 py-4">
                  <ul className="font-medium text-base">
                    <li>Black Adidas Shoe - 1</li>
                    <li>Spray Starch - 3</li>
                    <li>Black Sneakers - 1</li>
                  </ul>
                </td>
                <td className="px-4 py-4">user2email@gmail.com</td>
                <td className="px-4 py-4">₦ 175, 500</td>
                <td className="px-4 py-4">
                  <span className="text-xs text-rose-700 bg-rose-100 py-1 px-2 rounded-full">
                    Not paid
                  </span>
                </td>
                <td className="px-4 py-4">{new Date().toDateString()}</td>
                <td className="px-4 py-2 text-rose-500 font-semibold">
                  Not Delivered
                </td>
                <td className="px-4 py-4">
                  <span className="bg-green-400 text-white rounded px-2 py-2">
                    view details
                  </span>
                </td>
              </tr>
              {/* 3 */}
              <tr className="bg-white border-b">
                <td className="px-4 py-4">
                  <ul className="font-medium text-base">
                    <li>Black Clarks Shoe - 1</li>
                    <li>Tie - 2</li>
                    <li>Red Heels - 1</li>
                  </ul>
                </td>
                <td className="px-4 py-4">user1email@gmail.com</td>
                <td className="px-4 py-4">₦ 125, 850</td>
                <td className="px-4 py-4">
                  <span className="text-xs text-green-700 bg-green-100 py-1 px-2 rounded-full">
                    Paid at 12/05/2024 by 07:54
                  </span>
                </td>
                <td className="px-4 py-4">{new Date().toDateString()}</td>
                <td className="px-4 py-2 text-green-500 font-semibold">
                  Delivered
                </td>
                <td className="px-4 py-4">
                  <span className="bg-green-400 text-white rounded px-2 py-2">
                    view details
                  </span>
                </td>
              </tr>
              {/* 4 */}
              <tr className="bg-white border-b">
                <td className="px-4 py-4">
                  <ul className="font-medium text-base">
                    <li>Black Clarks Shoe - 1</li>
                    <li>Tie - 2</li>
                    <li>Red Heels - 1</li>
                  </ul>
                </td>
                <td className="px-4 py-4">user1email@gmail.com</td>
                <td className="px-4 py-4">₦ 125, 850</td>
                <td className="px-4 py-4">
                  <span className="text-xs text-green-700 bg-green-100 py-1 px-2 rounded-full">
                    Paid at 12/05/2024 by 07:54
                  </span>
                </td>
                <td className="px-4 py-4">{new Date().toDateString()}</td>
                <td className="px-4 py-2 text-green-500 font-semibold">
                  Delivered
                </td>
                <td className="px-4 py-4">
                  <span className="bg-green-400 text-white rounded px-2 py-2">
                    view details
                  </span>
                </td>
              </tr>
              {/* 5 */}
              <tr className="bg-white border-b">
                <td className="px-4 py-4">
                  <ul className="font-medium text-base">
                    <li>Black Clarks Shoe - 1</li>
                    <li>Tie - 2</li>
                    <li>Red Heels - 1</li>
                  </ul>
                </td>
                <td className="px-4 py-4">user1email@gmail.com</td>
                <td className="px-4 py-4">₦ 125, 850</td>
                <td className="px-4 py-4">
                  <span className="text-xs text-green-700 bg-green-100 py-1 px-2 rounded-full">
                    Paid at 12/05/2024 by 07:54
                  </span>
                </td>
                <td className="px-4 py-4">{new Date().toDateString()}</td>
                <td className="px-4 py-2 text-green-500 font-semibold">
                  Delivered
                </td>
                <td className="px-4 py-4">
                  <span className="bg-green-400 text-white rounded px-2 py-2">
                    view details
                  </span>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
