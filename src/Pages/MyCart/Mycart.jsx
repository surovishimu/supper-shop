import { useLoaderData } from "react-router-dom";
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const Mycart = () => {
  const myCart = useLoaderData();
  const [updateProduct, setUpdateProduct] = useState(myCart);

  useEffect(() => {
    setUpdateProduct(myCart);
  }, [myCart]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-beta.vercel.app/mycart/${id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // Filter out the deleted item from the cart
            const filteredProduct = updateProduct.filter(item => item._id !== id);
            setUpdateProduct(filteredProduct);
          })
        Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
      }
    });
  }

  return (
    <div className="my-20">
      <table className="border-collapse border mx-auto">
        <thead>
          <tr>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {updateProduct.map((item) => (
            <tr key={item._id}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.price}</td>
              <td className="border p-2">
                <RiDeleteBin6Line onClick={() => handleDelete(item._id)} className="text-red-500 mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mycart;
