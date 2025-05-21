import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
	const loggedIn = {
		firstName: "Vipul",
		lastName: "Hooda",
		email: "hooda.dexter@gmail.com",
	};

	return (
		<section className="home no-scrollbar">
			<div className="home-content no-scrollbar">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Guest"}
						subtext="Access and manage your account and transactions successfully"
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1234.56}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 123.45 }, { currentBalance: 123.45 }]}
			/>
		</section>
	);
};

export default Home;
