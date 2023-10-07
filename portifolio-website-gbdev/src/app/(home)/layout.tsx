import { Header } from "@/components/header";
import Link from "next/link";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
}
