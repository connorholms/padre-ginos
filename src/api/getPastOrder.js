export default async function getPastOrder(orderNumber) {
  const response = await fetch(`api/past-order/${orderNumber}`);
  const data = await response.json();
  return data;
}
