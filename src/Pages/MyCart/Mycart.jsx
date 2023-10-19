import { useLoaderData } from "react-router-dom";


const Mycart = () => {
    const myCart = useLoaderData();
   
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
            {myCart.map((item) => (
              <tr key={item.productId}>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.price}</td>
                <td className="border p-2">
                  <button  className="bg-red-500 text-white p-2">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
 
  
 
export default Mycart;