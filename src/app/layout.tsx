import { ReactNode } from "react";
import "./styles.css";
import "./variables.css";

type Props = {
	children: ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="uk">
			<body>
				{children}
			</body>
		</html>
	);
}
