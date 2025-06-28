import GenericTable from "../../ui/table/GenericTable";
import { renderRow } from "../../ui/RenderRow";
import { TABLE_HEADERS } from "../../data/gridKeys";
import OrderRow from "./OrderRow";

const orders = [
  {
    orderNumber: 583,
    name: "Ahmed Hamdy",
    email: "ahmed.hamdy@example.com",
    phone: "+20 100 000 0583",
    course: "Ruby On Rails",
    date: "14/5/2025",
    total: "340$",
    status: "completed",
  },
  {
    orderNumber: 584,
    name: "Sara Ali",
    email: "sara.ali@example.com",
    phone: "+20 100 000 0584",
    course: "React",
    date: "22/4/2025",
    total: "299$",
    status: "pending",
  },
  {
    orderNumber: 585,
    name: "Mohamed Tarek",
    email: "mohamed.tarek@example.com",
    phone: "+20 100 000 0585",
    course: "Node.js",
    date: "10/3/2025",
    total: "410$",
    status: "completed",
  },
  {
    orderNumber: 586,
    name: "Laila Nabil",
    email: "laila.nabil@example.com",
    phone: "+20 100 000 0586",
    course: "Python",
    date: "5/6/2025",
    total: "250$",
    status: "cancelled",
  },
  {
    orderNumber: 587,
    name: "Youssef Adel",
    email: "youssef.adel@example.com",
    phone: "+20 100 000 0587",
    course: "Laravel",
    date: "18/2/2025",
    total: "370$",
    status: "refunded",
  },
  {
    orderNumber: 588,
    name: "Nour Hassan",
    email: "nour.hassan@example.com",
    phone: "+20 100 000 0588",
    course: "React",
    date: "25/5/2025",
    total: "320$",
    status: "completed",
  },
  {
    orderNumber: 589,
    name: "Omar Khaled",
    email: "omar.khaled@example.com",
    phone: "+20 100 000 0589",
    course: "Ruby On Rails",
    date: "8/4/2025",
    total: "330$",
    status: "pending",
  },
  {
    orderNumber: 590,
    name: "Mona Sameh",
    email: "mona.sameh@example.com",
    phone: "+20 100 000 0590",
    course: "Node.js",
    date: "3/3/2025",
    total: "280$",
    status: "completed",
  },
  {
    orderNumber: 591,
    name: "Ali Zaki",
    email: "ali.zaki@example.com",
    phone: "+20 100 000 0591",
    course: "Python",
    date: "17/1/2025",
    total: "310$",
    status: "cancelled",
  },
  {
    orderNumber: 592,
    name: "Aya Mohamed",
    email: "aya.mohamed@example.com",
    phone: "+20 100 000 0592",
    course: "Laravel",
    date: "29/5/2025",
    total: "345$",
    status: "completed",
  },
  {
    orderNumber: 593,
    name: "Khaled Yasser",
    email: "khaled.yasser@example.com",
    phone: "+20 100 000 0593",
    course: "React",
    date: "12/6/2025",
    total: "360$",
    status: "refunded",
  },
  {
    orderNumber: 594,
    name: "Hana Ashraf",
    email: "hana.ashraf@example.com",
    phone: "+20 100 000 0594",
    course: "Node.js",
    date: "7/2/2025",
    total: "290$",
    status: "completed",
  },
  {
    orderNumber: 595,
    name: "Eman Fathy",
    email: "eman.fathy@example.com",
    phone: "+20 100 000 0595",
    course: "Python",
    date: "21/3/2025",
    total: "410$",
    status: "pending",
  },
  {
    orderNumber: 596,
    name: "Mostafa Rami",
    email: "mostafa.rami@example.com",
    phone: "+20 100 000 0596",
    course: "Ruby On Rails",
    date: "2/5/2025",
    total: "385$",
    status: "completed",
  },
  {
    orderNumber: 597,
    name: "Dina Hany",
    email: "dina.hany@example.com",
    phone: "+20 100 000 0597",
    course: "Laravel",
    date: "15/4/2025",
    total: "300$",
    status: "cancelled",
  },
];

function OrdersTable() {
  return (
    <>
      <GenericTable
        headers={TABLE_HEADERS.orders}
        data={orders}
        renderRow={renderRow(OrderRow)}
        pageSize={20}
        resaultsCount={20}
        isLoading={false}
      />
    </>
  );
}

export default OrdersTable;
