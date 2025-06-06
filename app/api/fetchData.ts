import axios from "axios";
import { useParams } from "next/navigation";

// Define the Event interface
interface Event {
    from_date: string;
    to_date: string;
    [key: string]: any;
}

interface ServiceParams {
    // Common fields
    event_id?: string | number;
    firstname?: string;
    surname?: string;
    mobile_no?: string;
    dob?: string;
    password?: string;
    name?: string;
    e_id?: string;
    p_id?: string;
    participants?: Array<any>;
    [key: string]: any; // Allow any additional properties
}

type ServiceResponse<T> = {
    message: T;
};

interface ClientExperience {
    client_name: string;
    position: string;
    photo: string;
    company: string;
    experience: string;
}

// Common API call function
const makeApiCall = async <T>(
    endpoint: string,
    params: ServiceParams
): Promise<ServiceResponse<T>> => {
    // const username = process.env.NEXT_PUBLIC_USERNAME;
    // const password = process.env.NEXT_PUBLIC_PASSWORD;
    // const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
    const username = "906603c0b4239d4"
    const password = "36798f79e29c304"
    const base_url = "http://10.10.10.165:8001/api/method"

    // Debug logs
    console.log('API Call Details:', {
        base_url,
        endpoint,
        fullUrl: `${base_url}/${endpoint}`,
        hasUsername: !!username,
        hasPassword: !!password
    });

    if (!base_url) {
        throw new Error('API base URL is not configured');
    }

    const auth = btoa(`${username}:${password}`);
    try {
        const response = await axios.get<ServiceResponse<T>>(`${base_url}/${endpoint}`, {
            headers: {
                Authorization: `Basic ${auth}`,
            },
            params: params,
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('API Error Details:', {
                status: error.response?.status,
                statusText: error.response?.statusText,
                data: error.response?.data,
                url: error.config?.url
            });
        }
        console.error(`Error calling API ${endpoint}:`, error);
        throw error;
    }
};

const makeApiCallPost = async <T>(
    endpoint: string,
    params: ServiceParams
): Promise<ServiceResponse<T>> => {
    const username = process.env.NEXT_PUBLIC_USERNAME;
    const password = process.env.NEXT_PUBLIC_PASSWORD;
    const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
    const auth = btoa(`${username}:${password}`);

    try {
        const response = await axios.post<ServiceResponse<T>>(`${base_url}/${endpoint}`, params, {
            headers: {
                Authorization: `Basic ${auth}`,
                withCredentials: true,
            },
        });
        return response.data;
    } catch (error) {
        // console.log("Error in the API call post")
        console.error(`Error calling API ${endpoint}:`, error);
        throw error;
    }
};

export const get_client_experience = async (): Promise<ServiceResponse<ClientExperience[]>> => {
    return makeApiCall<ClientExperience[]>("samarth.Samarth_Technoverse.get_client_experience", {});
};
export const insert_client_inquiry = async (params: any): Promise<ServiceResponse<ClientExperience[]>> => {
    return makeApiCall<ClientExperience[]>("samarth.Samarth_Technoverse.insert_client_inquiry", params);
};
