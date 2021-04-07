import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/* a wrapper Router component that takes any React component and renders as it's child component */
type WrapperProps = {
    component?: React.ReactNode;
};
export const Wrapper: React.FC<WrapperProps> = ({ component }: WrapperProps) => <Router>{component}</Router>;
