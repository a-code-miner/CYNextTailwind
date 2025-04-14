'use client';
import { GoogleOAuthProvider } from "@react-oauth/google";

const AuthProvider = ({ children }) => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
        console.log('Google client ID is missing');
        return <div>{children}</div>
    };
    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>{children}</GoogleOAuthProvider>
    );
};

export default AuthProvider;
