import React from "react";

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return (
        <div className="w-full p-4">
            <table className="table w-full">
                <thead>
                    <tr className="h-8">
                        <td className="bg-gray-300 rounded-r-md">#</td>
                        <td className="bg-gray-300">نام کاربر</td>
                        <td className="bg-gray-300">نام کاربری</td>
                        <td className="bg-gray-300">ایمیل</td>
                        <td className="bg-gray-300 rounded-l-md">آدرس</td>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="bg-white rounded-r-md p-1">{user.id}</td>
                            <td className="bg-white p-1">{user.name}</td>
                            <td className="bg-white p-1">{user.username}</td>
                            <td className="bg-white p-1">{user.email}</td>
                            <td className="bg-white rounded-l-md p-1">{user.address?.street}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersPage;
