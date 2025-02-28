import * as React from 'react';
import HeaderComponent from '@/components/header/header.component';
import FooterComponent from '@/components/footer/footer.component';

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </>
    );
}
