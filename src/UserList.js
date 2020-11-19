import React from 'react';


function User({user}) {
    return (
            <div>
                <b>{user.username}</b><span>({user.email})</span>
            </div>
    );
}


function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'liz',
            email: 'liz@gmail.com'
        }
    ]
    return (
        <div>
            {
              users.map(
                  user => (<User user = {user} />)
              )

            }
        </div>        
    )    
};

export default UserList;