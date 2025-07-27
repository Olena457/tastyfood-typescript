import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";

export interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  return (
    <>
      {!isMainPage && <Header />}
      <div className="layout flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-4">
          {children}
          <Outlet />
        </main>
      </div>
    </>
  );
}
