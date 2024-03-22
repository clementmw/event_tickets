import React, { useEffect, useState } from 'react'; // Import useState
import axios from 'axios';
import UsersNavbar from './UsersNavbar'; // Import the UsersNavbar component

const UserDashboard = () => {
    const [orderHistory, setOrderHistory] = useState([]); // Use state to manage order history

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('access_token');
                const config = { 
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                };
                const response = await axios.get('/userorder', config);
                setOrderHistory(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <UsersNavbar /> {/* Render the UsersNavbar component */}
            <div className="container mx-auto p-4">
    <h1 className="font-bold text-2xl mb-14 mt-14">Purchase History</h1>
    <div>
        {orderHistory.length === 0 ? (
            <p className="text-red-500 font-bold">You don't have any purchase history currently</p>   
                 ) : (
            orderHistory.map((order, index) => (
                <div key={index} className="shadow-md  my-4 mb-7 bg-gray-200 rounded-lg p-4">
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p className="mt-2"><strong>Order Date:</strong> {order.order_date}</p>
                    <p className="mt-2"><strong>Total Price:</strong> {order.total_price}</p>
                    <p className="mt-2"><strong>Quantity:</strong> {order.quantity}</p>
                </div>
            ))
        )}
    </div>
</div>

        </div>
    );
};

export default UserDashboard;