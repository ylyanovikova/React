import { FC, useEffect, useState } from "react";

import { IUser } from "../../interfaces/user.interface";
import { userService } from "../../services";
import { User } from "../User/User";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(response => response.data).then(users => setUsers(users));
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    )
};

export { Users }