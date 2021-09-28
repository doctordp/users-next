import { useRouter } from 'next/router';
import data from '../../public/data';
import Image from 'next/image';

import Container from '../../components/Container';
import { IUser } from '../../interfaces';
import React from 'react';

const User = (props: { user: IUser }) => {
	return (
		<Container>
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-header text-center">
							<Image
								src={props.user.avatar}
								alt={props.user.first_name + ' ' + props.user.last_name}
								className="rounded"
								height="300rem"
								width="300rem"
							/>
						</div>
						<div className="card-body text-center">
							<h3>
								{props.user.id}. {props.user.first_name} {props.user.last_name}
							</h3>
							<p>Email: {props.user.email}</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

User.getInitialProps = (context: {
	query: { id: string };
}): { user: IUser } => {
	const allUsers: IUser[] = data();
	const user: IUser =
		allUsers.find((user: IUser) => user.id === parseInt(context.query.id)) ||
		allUsers[0];

	return { user: user };
};

export default User;
