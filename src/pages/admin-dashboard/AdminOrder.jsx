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

        <div className="p-4 overflow-auto">
          <table className="overflow-auto text-nowrap">
            <thead className="border-b-2">
              <tr className="flex items-center gap-4 py-2">
                <th>Items</th>
                <th>Email</th>
                <th>Total</th>
                <th>Payment Status</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-fit">
                  <ul>
                    <li>Black Clarks Shoe - 1</li>
                    <li>Tie - 2</li>
                    <li>Red Heels - 1</li>
                  </ul>
                </td>
                <td>useremail@gmail.com</td>
                <td>₦ 125, 850</td>
                <td>
                  <span className="text-xs text-green-700 bg-green-100 py-1 px-2 rounded-full">
                    Paid at 12/05/2024 by 07:54
                  </span>
                </td>
                <td>{new Date().getUTCFullYear()}</td>
                <td>Delivered</td>
                <td>view details</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
