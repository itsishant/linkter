import { payload } from "@/app/interfaces/Api"

const baseUrl = process.env.BASE_URL;

const createUser = async (Login: payload) => {
    const response = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Login)
    });

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
}

