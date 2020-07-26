import React from "react";
import styles from "./users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i.pinimg.com/236x/8a/05/33/8a053319bd263f33acaccd922f55e451.jpg',
                followed: false,
                fullName: 'Dmitriy',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://i.pinimg.com/236x/8a/05/33/8a053319bd263f33acaccd922f55e451.jpg',
                followed: true,
                fullName: 'Vlad',
                status: 'I am a boss too',
                location: {city: 'Moscov', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://i.pinimg.com/236x/8a/05/33/8a053319bd263f33acaccd922f55e451.jpg',
                followed: false,
                fullName: 'Andrey',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://i.pinimg.com/236x/8a/05/33/8a053319bd263f33acaccd922f55e451.jpg',
                followed: true,
                fullName: 'Valera',
                status: 'From USA',
                location: {city: 'New York', country: 'USA'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;