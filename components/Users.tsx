import { useRouter } from 'next/router';
import { IUser } from '../interfaces';
import Image from 'next/image';

const Users = (users: { users: IUser[] }) => {
	const router = useRouter();

	return (
		<div>
			<ul className="list-group">
				{users.users.map(
					(user: IUser): JSX.Element => (
						<li
							className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
							key={user.id}
							onClick={() => router.push(`/users/[id]`, `/users/${user.id}`)}
						>
							<div>
								<h5>
									{user.id}. {user.first_name} {user.last_name}
								</h5>
								<p>Email: {user.email}</p>
							</div>
							<Image
								src={user.avatar}
								alt={user.first_name + ' avatar'}
								className="rounded"
								height="70rem"
								width="70rem"
							/>
						</li>
					),
				)}
			</ul>
		</div>
	);
};

export default Users;
