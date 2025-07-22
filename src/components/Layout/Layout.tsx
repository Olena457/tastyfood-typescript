import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SplitBar from "../SplitBar/SplitBar";

export interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="">
        <SplitBar />
      </div>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
          <Outlet />
        </main>
        <footer className="bg-white shadow mt-8"></footer>
      </div>
    </>
  );
}
