import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExampleComponent from './ExampleComponent';
import { fetchWeatherForecasts } from './fetchweatherforecastmock';

test('renders ExampleComponent', () => {
    render(<ExampleComponent />);
    const linkElements = screen.getAllByText(/example/i);
    expect(linkElements.length).toBeGreaterThan(0);
    linkElements.forEach(element => {
        expect(element).toBeInTheDocument();
    });
});

// Edge case: Component renders nothing
test('does not render when hidden prop is true', () => {
    render(<ExampleComponent hidden />);
    const linkElements = screen.queryAllByText(/example/i);
    expect(linkElements.length).toBe(0);
});

// Edge case: Component renders with custom text
test('renders with custom text', () => {
    render(<ExampleComponent text="Custom Example" />);
    expect(screen.getByText(/custom example/i)).toBeInTheDocument();
});

// Edge case: Component handles null or undefined props gracefully
test('renders safely with undefined props', () => {
    render(<ExampleComponent text={undefined} />);
    // Should not throw and should render default or fallback content
    expect(screen.getByText(/example/i)).toBeInTheDocument();
});

describe('fetchWeatherForecasts (mock API)', () => {
    it('returns an array of weather forecasts', async () => {
        const data = await fetchWeatherForecasts();
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBe(3);

        expect(data[0]).toHaveProperty('date');
        expect(data[0]).toHaveProperty('temperatureC');
        expect(data[0]).toHaveProperty('summary');
    });

    it('contains correct mock data', async () => {
        const data = await fetchWeatherForecasts();
        expect(data).toEqual([
            { date: '2025-05-06', temperatureC: 22, summary: 'Sunny' },
            { date: '2025-05-07', temperatureC: 18, summary: 'Cloudy' },
            { date: '2025-05-08', temperatureC: 15, summary: 'Rainy' }
        ]);
    });
});