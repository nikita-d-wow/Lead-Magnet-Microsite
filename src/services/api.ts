const API_BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000/api';

export const captureLead = async (name: string, businessEmail: string) => {
    try {
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
    } catch (error) {
        throw error;
    }
};
