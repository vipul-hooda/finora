"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
	return (
		<CountUp end={amount} decimal="." decimals={2} prefix="$" duration={0.7} />
	);
};

export default AnimatedCounter;
