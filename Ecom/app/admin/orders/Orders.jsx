import TableOrder from "@/components/TableOrder";
import React from "react";

const Orders = ({orders}) => {
  
  return (
    <section className="order-list">
    <h2>Les commandes</h2>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        {orders.length > 0 ? (
          orders.map((order) => <TableOrder order={order} key={order.id} />)
        ) : (
          <h2>Aucune commande </h2>
        )}
        <tfoot></tfoot>
      </table>
    </section>
  );
};

export default Orders;
