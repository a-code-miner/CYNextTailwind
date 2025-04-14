'use client';
import AuthProvider from "@/components/AuthProvider";

const ClientWrapper = ({ children }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default ClientWrapper;
