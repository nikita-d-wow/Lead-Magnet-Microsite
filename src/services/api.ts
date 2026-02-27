const API_BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000/api';

export const captureLead = async (name: string, businessEmail: string) => {
    const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, businessEmail }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to capture lead');
    }

    return await response.json();
};
export const submitScore = async (data: {
    name: string;
    businessEmail: string;
    totalScore?: number;
    maturityLabel?: string;
    scores?: Record<string, number>;
    isAbandoned?: boolean;
    classification?: {
        description: string;
        bullets: string[];
    };
}) => {
    const response = await fetch(`${API_BASE_URL}/leads/score`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        // Use keepalive for abandonment tracking to ensure the request finishes on page unload
        keepalive: data.isAbandoned,
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit score');
    }

    return await response.json();
};
