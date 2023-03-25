import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

export default function UsersList() {
    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if(isLoading){
        return <Skeleton times={data.length} className="h-10 w-full" />;
    }
    if(error) {
        return <div>Error fetching data...</div>;
    }
    const renderedUsers = data.map((user) => {
        return <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                {user.name}
            </div>
        </div>
    })
    return (
        <div>
            {renderedUsers}
        </div>
    )
}
