import type { NextPage } from 'next';
import Container from '../components/Container';
import Head from 'next/head';
import data from '../public/data';
import Users from '../components/Users';
import { IUser } from '../interfaces';
interface IHomeProps {
	users: IUser[];
}

const Home: NextPage<IHomeProps> = (props: { users: IUser[] }): JSX.Element => {
	return (
		<Container>
			<Head>
				<title>Next - Home Page</title>
			</Head>
			<div>
				<h1>Next</h1>
				<Users users={props.users} />
			</div>
		</Container>
	);
};

Home.getInitialProps = (): IHomeProps => {
	const jsonParsed: IUser[] = data();

	return { users: jsonParsed };
};

export default Home;
