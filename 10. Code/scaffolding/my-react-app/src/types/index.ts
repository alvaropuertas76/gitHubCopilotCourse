// This file exports TypeScript interfaces and types that can be used throughout the application.
// Generated by Copilot

export interface ExampleProps {
    title: string;
    description?: string;
}

export type User = {
    id: number;
    name: string;
    email: string;
};

export type ApiResponse<T> = {
    data: T;
    error?: string;
};