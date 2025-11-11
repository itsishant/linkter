const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const createUser = async (data: { email: string; }) => {
    const response = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
};

const verifyOtp = async (data: { email: string; otp: string; password: string; }) => {
    const response = await fetch(`${baseUrl}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
};

const signIn = async (data: {email: string, password: string}) => {
    const response = await fetch(`${baseUrl}/signin`, {
         method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export {
    createUser,
    verifyOtp,
    signIn
}
