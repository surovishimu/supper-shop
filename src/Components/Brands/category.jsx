import { useEffect, useState } from "react";


const Category = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/categoty.json");
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                }
            } catch (error) {
                console.error("Error while fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="mt-20">
            <h1 className="text-4xl font-semibold text-center my-10">Shop By Category</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-5 px-20 mb-10">
                {data.map((item) => (
                    <div key={item.id} className="hover:transform hover:scale-105 transition-transform hover:border hover:border-amber-800">

                        <img className="" src={item.image} alt={item.categoryName} />
                        <p className="text-center ">{item.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
