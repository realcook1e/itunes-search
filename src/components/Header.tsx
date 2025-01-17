import Image from "next/image";
import { UserRound, Settings } from "lucide-react";

import { logo } from "@/shared/assets";
import Search from "./Search";

const Header: React.FC = () => {
	return (
		<header className="bg-foreground text-background">
			<div className="container">
				<div className="flex items-center justify-between py-4">
					<div className="flex items-center gap-3">
						<Image
							src={logo}
							alt="logo"
							height={30}
							width={30}
						/>
						<h1 className="font-bold text-2xl">iTunes Search</h1>
					</div>
					<div className="flex gap-3">
						<div className="p-2 border rounded-full border-white/20 cursor-pointer hover:border-white transition-colors duration-300">
							<UserRound />
						</div>
						<div className="p-2 border rounded-full border-white/20 cursor-pointer hover:border-white transition-colors duration-300">
							<Settings />
						</div>
					</div>
				</div>
			</div>
			<hr className="border-white/30" />
			<Search />
		</header>
	);
};

export default Header;
