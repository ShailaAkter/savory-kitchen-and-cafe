import ContainerBox from '@/components/ContainerBox';
import React from 'react';

const Orders = () => {
  return (
    <ContainerBox>
      <div className="p-4 lg:px-20 xl:px-40">
        <h1 className="text-2xl font-semibold mb-6">My Orders</h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="hidden md:table-cell p-4">Order ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Price</th>
                <th className="hidden md:table-cell p-4">Products</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm md:text-base">
                <td className="hidden md:table-cell p-4">1237861238721</td>
                <td className="p-4">19.07.2023</td>
                <td className="p-4">89.90</td>
                <td className="hidden md:table-cell p-4">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
                <td className="p-4">On the way (approx. 10min)...</td>
              </tr>
              <tr className="text-sm md:text-base bg-gray-100">
                <td className="hidden md:table-cell p-4">1237861238721</td>
                <td className="p-4">19.07.2023</td>
                <td className="p-4">89.90</td>
                <td className="hidden md:table-cell p-4">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
                <td className="p-4">On the way (approx. 10min)...</td>
              </tr>
              <tr className="text-sm md:text-base">
                <td className="hidden md:table-cell p-4">1237861238721</td>
                <td className="p-4">19.07.2023</td>
                <td className="p-4">89.90</td>
                <td className="hidden md:table-cell p-4">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
                <td className="p-4">On the way (approx. 10min)...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ContainerBox>
  );
};

export default Orders;
