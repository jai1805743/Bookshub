// src/bill.js
import jsPDF from "jspdf";

export const generateBill = (item) => {
  const doc = new jsPDF();

  // ===== HEADER =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("My Bookstore", 20, 20);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Invoice", 160, 20);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 160, 30);
  doc.text(`Invoice #: INV${Math.floor(Math.random() * 10000)}`, 160, 40);

  // ===== CUSTOMER INFO =====
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Billed To:", 20, 50);
  doc.setFont("helvetica", "normal");
  doc.text("Customer Name", 20, 58); // later you can pass customer info
  doc.text("Email: customer@example.com", 20, 65);

  // ===== ORDER DETAILS =====
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Order Details:", 20, 80);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Book: ${item.name}`, 20, 90);
  doc.text(`Price: ${item.price}`, 20, 100);
  doc.text(`Quantity: 1`, 20, 110);
  doc.text(`Delivery Charge: ₹50`, 20, 120);

  // ===== TOTAL =====
  const priceValue = parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0;
  const total = priceValue + 50;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(`TOTAL: ₹${total}`, 20, 140);

  // ===== FOOTER =====
  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  doc.text("Thank you for shopping with us! Visit again ", 20, 160);

  // ===== SAVE FILE =====
  doc.save(`Invoice_${item.name}.pdf`);
};
