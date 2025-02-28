'use client'
import { useEffect, useState } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const NProgressWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {children}
            {isClient && (
                <ProgressBar
                    height="4px"
                    color="blue"
                    options={{ showSpinner: false }}
                    shallowRouting
                />
            )}
        </>
    );
};

export default NProgressWrapper;
