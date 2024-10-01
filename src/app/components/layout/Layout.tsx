import React, { FC, ReactNode } from 'react';
import Header from '@/app/header/header';
import Footer from '../footer/Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout-container">
                <Header />
            <main>{children}</main>
                <Footer />
        </div>
    );
};

export default Layout;
